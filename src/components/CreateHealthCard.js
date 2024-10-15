// src/components/CreateHealthCard.js
import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';

const CreateHealthCard = () => {
    const [healthInfo, setHealthInfo] = useState('');
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/cards', { healthInfo });
            navigate(`/healthcard/${response.data._id}`);
        } catch (error) {
            console.error(error);
            alert('Failed to create health card');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Create Health Card
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
                        Create
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateHealthCard;
