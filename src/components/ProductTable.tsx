// components/ProductTable.tsx
"use client";
import React from 'react';
import { GridOnOutlined } from '@mui/icons-material';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, styled, TableContainerProps, IconButton, Typography } from '@mui/material';
import BatchAction from '@components/BatchAction';
import Pagination from '@components/Pagination';


const createData = (id: number, number: number, name: string, price: number, sku: string, stock: number) => {
    return { id, number, name, price, sku, stock };
};

const rows = [
    createData(1, 26, '华为 HUAWEI P20', 3788, '6946605', 100),
    createData(2, 27, '小米 8', 2699, '743778', 99),
    createData(3, 28, '小米 红米5A', 649, '743779', 98),
    createData(4, 29, 'Apple iPhone 8 Plus', 5499, '743779', 97),
    createData(5, 30, 'HLA 海澜之家', 98, 'HNTBJ2E042A', 0),
    createData(6, 31, '三星', 98, 'ABIDIG', 0),
    createData(7, 32, '苹果', 198, '1SDFGASDFE', 9),
    createData(8, 33, 'VIVO', 45, 'EGDAF', 19),
    createData(9, 34, 'OPPO', 85, 'AFEGADLI', 56),
    createData(10, 35, '鸿星尔克', 42, 'TGOEUI39', 236),
];

const StyledTableContainer = styled(TableContainer)<TableContainerProps>({
    position: 'relative',  // 伪元素的定位参照点
    '&::before, &::after': {
        content: '""',
        position: 'absolute', // 从非static的父元素中定位，配合父元素的position
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'transparent',
        userSelect: 'none',  // 左右边框不可选中
    },
    '&::before': {
        left: 0,
        borderLeft: '1px solid #ccc', // 左边框样式
    },
    '&::after': {
        right: 0,
        borderRight: '1px solid #ccc', // 右边框样式
    },
    border: '1px solid #ccc',
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    '& .MuiTableCell-head, & .MuiTableCell-body': {
        fontSize: '1rem', // 表格中的字体大小
    },
});

const CustomTableRow = styled(TableRow)({
    height: '10px',
    padding: 2,
});

const CustomTableCell = styled(TableCell)({
    height: '10px',
    padding: 2, // Optional: Reduce padding to match height requirement
});

const ProductTable = () => {
    const [isAllSelected, setIsAllSelected] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState(rows.map(() => false));

    const handleSelectAllClick = () => {
        const newSelectedRows = selectedRows.map(() => !isAllSelected);
        setIsAllSelected(!isAllSelected);
        setSelectedRows(newSelectedRows);
    };

    const handleSelectRowClick = (index: number) => {
        const newSelectedRows = [...selectedRows];
        newSelectedRows[index] = !newSelectedRows[index];
        setSelectedRows(newSelectedRows);
    };

    return (
        <Box sx={{ mx: 2, mt: 0, mb: 1 }} >
            <Box sx={{ display: 'flex', mb: 1, justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                        <GridOnOutlined />
                    </IconButton>
                    <Typography sx={{ fontSize: '1.1rem' }}>商品列表</Typography>
                </Box>

            </Box>
            <StyledTableContainer component={Paper} >
                <Table >
                    <TableHead>
                        <CustomTableRow>
                            <CustomTableCell padding="checkbox" >
                                <Checkbox
                                    color="primary"
                                    checked={isAllSelected}
                                    onChange={handleSelectAllClick} />
                            </CustomTableCell>
                            <CustomTableCell width='5%'>编号</CustomTableCell>
                            <CustomTableCell width='15%'>商品图片</CustomTableCell>
                            <CustomTableCell>商品名称</CustomTableCell>
                            <CustomTableCell>价格/规格</CustomTableCell>
                            <CustomTableCell>SKU库存</CustomTableCell>
                            <CustomTableCell>销量</CustomTableCell>
                            <CustomTableCell align='center'>操作</CustomTableCell>
                        </CustomTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <CustomTableRow key={row.id}>
                                <CustomTableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={selectedRows[index]}
                                        onChange={() => handleSelectRowClick(index)} />
                                </CustomTableCell>
                                <CustomTableCell width='5%'>{row.number}</CustomTableCell>
                                <CustomTableCell width='15%'>{/* Add image component here */}</CustomTableCell>
                                <CustomTableCell>{row.name}</CustomTableCell>
                                <CustomTableCell>¥{row.price}/{row.sku}</CustomTableCell>
                                <CustomTableCell>{row.stock}</CustomTableCell>
                                <CustomTableCell>{row.stock}</CustomTableCell>
                                <CustomTableCell align='center'>
                                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>查看</Button>
                                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>编辑</Button>
                                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>删除</Button>
                                </CustomTableCell>
                            </CustomTableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                <BatchAction />
                <Pagination />
            </Box>
        </Box>
    );
};

export default ProductTable;
