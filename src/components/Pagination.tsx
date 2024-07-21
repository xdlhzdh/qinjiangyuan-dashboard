// components/Pagination.tsx
import React, { ChangeEvent } from 'react';
import { Box, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import CustomPagination from '@components/CustomPagination';


const Pagination = () => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    // 设置RowPerPage
    const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
        setRowsPerPage(event.target.value as number);
    };

    return (
        <Box display="flex" alignItems="center" mt={2} >
            <FormControl variant="outlined" size="small" >
                <Select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                    style={{
                        width: 110,
                    }}
                >
                    <MenuItem value={5}>5条/页</MenuItem>
                    <MenuItem value={10}>10条/页</MenuItem>
                    <MenuItem value={20}>20条/页</MenuItem>
                </Select>
            </FormControl>
            <CustomPagination count={3} page={page} onChange={handleChangePage} />
        </Box >
    );
};

export default Pagination;
