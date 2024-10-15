// src/components/HealthCardPage.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import { Container, Typography, Button, CircularProgress, Box } from '@mui/material';

const HealthCardPage = () => {
    const { id } = useParams();
    const { authData } = useContext(AuthContext);
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await api.get(`/cards/${id}`);
                setCard(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch health card');
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this health card?')) {
            try {
                await api.delete(`/cards/${id}`);
                navigate('/dashboard');
            } catch (err) {
                console.error(err);
                alert('Failed to delete health card');
            }
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography variant="h6" color="error" sx={{ mt: 4 }}>
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
                Health Card Details
            </Typography>
            <Typography><strong>Card ID:</strong> {card._id}</Typography>
            <Typography><strong>User ID:</strong> {card.userId}</Typography>
            <Typography><strong>Health Info:</strong> {card.healthInfo}</Typography>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" component={Link} to={`/healthcard/${id}/edit`} sx={{ mr: 2 }}>
                    Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDelete}>
                    Delete
                </Button>
            </Box>
        </Container>
    );
};

export default HealthCardPage;
