// components/BatchAction.tsx
"use client";
import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Button, SelectChangeEvent } from '@mui/material';

const BatchAction = () => {
    const [action, setAction] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAction(event.target.value as string);
    };

    const handleReset = () => {
        setAction(''); // Reset the action state to its initial value
    };

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <FormControl variant="outlined" size="small">
                <InputLabel>批量操作</InputLabel>
                <Select
                    value={action}
                    onChange={handleChange}
                    label="批量操作"
                    displayEmpty={false}
                    style={{ width: 150 }}
                >
                    <MenuItem value="" disabled>请选择操作</MenuItem>
                    <MenuItem value="coupon">派优惠券</MenuItem>
                    <MenuItem value="off-shelves">商品下架</MenuItem>
                    <MenuItem value="off-shelves">重新上架</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained">确定</Button>
                <Button variant="outlined" onClick={handleReset}>重置</Button>
            </Box>
        </Box>
    );
};

export default BatchAction;
