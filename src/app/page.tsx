// src/app/page.tsx
"use client";
import ProductTable from '@components/ProductTable';
import SearchForm from '@components/SearchForm';
import ProductCreateSsr from '@components/ProductCreate';
import Dashboard from '@components/Dashboard';
import { useMenuContext } from '../components/MenuContext';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
    const { selectedMenuItem } = useMenuContext();
    return (
        <div>
            {selectedMenuItem === '商品列表' && <Box> <SearchForm /> <ProductTable /></Box>}
            {selectedMenuItem === '创建商品' && <ProductCreateSsr />}
            {selectedMenuItem === '销量' && <Dashboard />}
        </div>
    );
};

export default HomePage;
