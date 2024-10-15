// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import HealthCardPage from './components/HealthCardPage';
import CreateHealthCard from './components/CreateHealthCard';
import EditHealthCard from './components/EditHealthCard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/create-healthcard"
                    element={
                        <ProtectedRoute>
                            <CreateHealthCard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/healthcard/:id"
                    element={
                        <ProtectedRoute>
                            <HealthCardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/healthcard/:id/edit"
                    element={
                        <ProtectedRoute>
                            <EditHealthCard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
