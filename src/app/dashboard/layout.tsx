// src/app/dashboard/layout.tsx

import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <main>
                {children}
            </main>
        </Box>
    );
}
