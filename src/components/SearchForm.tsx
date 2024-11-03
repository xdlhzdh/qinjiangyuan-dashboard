// components/SearchForm.tsx
import { Box, Button, MenuItem, Typography, IconButton, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


// typescript中的类型定义
//
// 通过接口定义类型，和type定义类型的区别是两个相同的interface类型定义会自动合并，而type定义不会
// interface CustomTextFieldProps extends TextFieldProps {
//     select?: boolean; // 可选属性
// }
//
// 通过类型别名定义类型
// type CustomTextFieldProps = TextFieldProps & {
//     select?: boolean; // 可选属性
// };
//
// 元组类型
// type Point = [number, number];
//
// 联合类型
// type Result = Success | Failure;
//
// 泛型接口
// interface Response<T> {
//     data: T;
//     status: number;
// }
//
// 映射类型，转换T的所有属性为只读
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
//
// 映射类型，转换T的所有属性为可选
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
//
// 映射类型，转换T的所有属性为必选
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };
//
// 映射类型，选择T的部分属性为新类型
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
// 例子
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Pick<Todo, 'title' | 'completed'>;
//
// 条件类型
// type ElementType<T> = T extends (infer U)[] ? U : T;
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
//
// 索引签名类型
// interface MixedDictionary {
//     [key: string]: string | number;
//     [index: number]: string;
// }

// const myMixedDictionary: MixedDictionary = {
//     0: "zero",
//     1: "one",
//     name: "John Doe",
//     age: 30
// };

type CustomTextFieldProps = TextFieldProps & {
    select?: boolean; // 可选属性
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
