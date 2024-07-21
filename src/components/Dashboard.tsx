// src/components/Dashboard.tsx
"use client";
import React from 'react';
import { Box } from '@mui/material';
import Statistics from '@components/Statistics';
import Graph from '@components/Graph';

const Dashboard: React.FC = () => {
    return (
        <Box component="main" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Statistics />
            <Box sx={{ mt: 1 }} />
            <Graph />
        </Box>
    );
};

export default Dashboard;
