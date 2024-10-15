// src/components/Dashboard.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import { Container, Typography, List, ListItem, ListItemText, Button, CircularProgress, Box } from '@mui/material';

const Dashboard = () => {
    const { authData } = useContext(AuthContext);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await api.get('/cards');
                setCards(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch health cards');
            } finally {
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

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
                Your Health Cards
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/create-healthcard" sx={{ mb: 2 }}>
                Create New Health Card
            </Button>
            {cards.length === 0 ? (
                <Typography>No health cards found. Create one!</Typography>
            ) : (
                <List>
                    {cards.map((card) => (
                        <ListItem key={card._id} button component={Link} to={`/healthcard/${card._id}`}>
                            <ListItemText primary={`Card ID: ${card._id}`} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default Dashboard;
