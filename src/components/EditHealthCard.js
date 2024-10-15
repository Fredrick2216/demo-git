// src/components/EditHealthCard.js
import React, { useState, useEffect, useContext } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';

const EditHealthCard = () => {
    const { id } = useParams();
    const [healthInfo, setHealthInfo] = useState('');
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await api.get(`/cards/${id}`);
                setHealthInfo(response.data.healthInfo);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch health card');
            } finally {
                setLoading(false);
            }
        };

        fetchCard();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/cards/${id}`, { healthInfo });
            navigate(`/healthcard/${id}`);
        } catch (error) {
            console.error(error);
            alert('Failed to update health card');
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
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Edit Health Card
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        label="Health Information"
                        multiline
                        rows={5}
                        fullWidth
                        required
                        value={healthInfo}
                        onChange={(e) => setHealthInfo(e.target.value)}
                        margin="normal"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Update
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EditHealthCard;
