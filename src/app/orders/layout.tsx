// src/app/orders/layout.tsx

import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default function OrdersLayout({ children }: { children: ReactNode }) {
    return (
        <Box>
            <main style={{ flexGrow: 1, padding: '16px' }}>
                {children}
            </main>
        </Box>
    );
}