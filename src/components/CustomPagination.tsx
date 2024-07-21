// components/CustomPagination.tsx
import React from 'react';
import Pagination from '@mui/material/Pagination';

interface ICustomPagination {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function CustomPagination({ count, page, onChange }: ICustomPagination) {
    // boundaryCount设置为1，表示在边界处只显示1个页码
    // siblingCount设置为1，表示在当前页旁边显示1个页码
    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            color="primary"
            boundaryCount={2}
            siblingCount={1}
            showFirstButton
            showLastButton
        />
    );
}

export default CustomPagination;