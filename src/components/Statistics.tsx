// src/components/Statistics.tsx
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const Statistics: React.FC = () => {
    const stats = [
        { label: '今日订单总数', value: '200' },
        { label: '今日销售总额', value: '¥ 5000.00' },
        { label: '昨日销售总额', value: '¥ 5000.00' },
        // Add more stats as needed
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {stats.map((stat, index) => (
                    <Grid item md={4} key={index}>
                        <Paper elevation={0} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                            <Typography variant="h6" >{stat.label}</Typography>
                            <Typography variant="h4">{stat.value}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Statistics;
