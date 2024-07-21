// components/Graph.tsx
import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Box } from '@mui/material';


const Graph = () => {
    const data = [
        10,
        20,
        30,
        40,
        50,
    ];

    return (
        <Box sx={{ width: '100%', height: 400 }}>
            <Typography variant="h6" gutterBottom>
                示例折线图npm install react@latest react-dom@latest
            </Typography>
            <LineChart series={[{ data: data, label: '销量' }]}>
            </LineChart>
        </Box>
    );
};

export default Graph;
