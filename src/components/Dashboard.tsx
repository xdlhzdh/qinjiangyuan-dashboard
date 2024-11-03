// src/components/Dashboard.tsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import BarChartNoSsr, { DataPoint } from '@components/BarChart';

const data: DataPoint[] = [
    { name: 'Jan', uv: 3000 },
    { name: 'Feb', uv: 4500 },
    { name: 'Mar', uv: 3000 },
    { name: 'Apr', uv: 6000 },
    { name: 'May', uv: 3000 },
    { name: 'Jun', uv: 1500 },
    { name: 'Jul', uv: 3000 },
    { name: 'Aug', uv: 1500 },
    { name: 'Sep', uv: 6000 },
    { name: 'Oct', uv: 4500 },
    { name: 'Nov', uv: 4500 },
    { name: 'Dec', uv: 1500 },
];

const Dashboard: React.FC = () => (
    // Container vs Box ?
    <Grid container spacing={2} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Total Revenue */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Total Revenue</Typography>
                <Typography variant="h4">$45,231.89</Typography>
                <Typography variant="subtitle1" color="textSecondary">+20.1% from last month</Typography>
            </Paper>
        </Grid>
        {/* Subscriptions */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Subscriptions</Typography>
                <Typography variant="h4">+2350</Typography>
                <Typography variant="subtitle1" color="textSecondary">+180.1% from last month</Typography>
            </Paper>
        </Grid>
        {/* Sales */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Sales</Typography>
                <Typography variant="h4">+12,234</Typography>
                <Typography variant="subtitle1" color="textSecondary">+19% from last month</Typography>
            </Paper>
        </Grid>
        {/* Active Now */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Active Now</Typography>
                <Typography variant="h4">+573</Typography>
                <Typography variant="subtitle1" color="textSecondary">+201 since last hour</Typography>
            </Paper>
        </Grid>
        {/* Overview Chart */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
                <Typography variant="h6">Overview</Typography>
                <BarChartNoSsr width={600} height={300} data={data} />
            </Paper>
        </Grid>
        {/* Recent Sales */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6">Recent Sales</Typography>
                <Box>
                    <Typography>Olivia Martin: $1,999.00</Typography>
                    <Typography>Jackson Lee: $39.00</Typography>
                    <Typography>Isabella Nguyen: $299.00</Typography>
                    <Typography>William Kim: $99.00</Typography>
                    <Typography>Sofia Davis: $39.00</Typography>
                </Box>
            </Paper>
        </Grid>
    </Grid>
);

export default Dashboard;
