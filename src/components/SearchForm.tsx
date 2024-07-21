// components/SearchForm.tsx
import { Box, Button, MenuItem, Typography, IconButton, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type CustomTextFieldProps = TextFieldProps & {
    select?: boolean; // Your custom property
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({ select, ...props }) => {
    // 当select为true时，设置TextField为select variant="outlined"
    // 当select为false或未定义时，仅设置variant="outlined"
    return (
        <TextField
            variant="outlined"
            fullWidth
            size='small'
            select={!!select}
            {...props}
        // 如果需要根据select的值来改变其他属性，可以在这里使用条件表达式
        />
    );
};

const SearchForm = () => {
    return (
        <Box sx={{ mx: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', mb: 1, justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Typography fontSize='1.1rem'>筛选搜索</Typography>
                </Box>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <CustomTextField label="商品名称" select={false} />
                    <CustomTextField label="商品货号" select={false} />
                    <CustomTextField label="商品分类" select={true} >
                        <MenuItem value="">请选择</MenuItem>
                        {/* Add more options as needed */}
                    </CustomTextField>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                    <CustomTextField label="上架状态" select={true} >
                        <MenuItem value="">全部</MenuItem>
                        {/* Add more options as needed */}
                    </CustomTextField>
                    <CustomTextField label="审核状态" select={true} >
                        <MenuItem value="">全部</MenuItem>
                        {/* Add more options as needed */}
                    </CustomTextField>
                    <CustomTextField label="商品品牌" select={true} >
                        <MenuItem value="">请选择品牌</MenuItem>
                        {/* Add more options as needed */}
                    </CustomTextField>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="contained">查找结果</Button>
                <Button variant="outlined">重置</Button>
            </Box>
        </Box>
    );
};

export default SearchForm;
