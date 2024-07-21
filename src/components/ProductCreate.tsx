// components/ProductCreate.tsx
"use client";
import React, { ChangeEvent, useState, useCallback, useEffect } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Grid, Box, Typography, Paper, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import Image from 'next/image';


const ProductCreate = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productSpecs, setProductSpecs] = useState('');
    const [warehouse, setWarehouse] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const checkAndUpdateButtonStatus = useCallback(() => {
        // console.log(productName, productPrice, productStock, productSpecs, warehouse, productDescription, images.length);
        if (productName.trim() === '' || productPrice.trim() === '' || productStock.trim() === '' || productSpecs.trim() === '' || warehouse.trim() === '' || productDescription.trim() === '' || images.length < 1) {
            setIsButtonDisabled(true);
        }
        else {
            setIsButtonDisabled(false);
        }
    }, [productName, productPrice, productStock, productSpecs, warehouse, productDescription, images]);

    useEffect(() => {
        checkAndUpdateButtonStatus();
    }, [checkAndUpdateButtonStatus]);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) {
            console.log('No files selected.');
            return;
        }
        if (files.length + images.length > 5) {
            alert('You can upload up to 5 images.');
            return;
        }
        setImages([...images, ...Array.from(files)]);
        console.log("images.length: ", images.length, "images: ", images);
        // checkAndUpdateButtonStatus();
    };

    const handleImageRemove = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
        // checkAndUpdateButtonStatus();
    };

    const handleConfirmButtonClick = () => {
        if (productName.trim() === '') {
            alert('Please enter product name');
            return;
        }
        if (productPrice.trim() === '') {
            alert('Please enter product price');
            return;
        }
        if (productStock.trim() === '') {
            alert('Please enter product stock');
            return;
        }
        if (productSpecs.trim() === '') {
            alert('Please select product specs');
            return;
        }
        if (warehouse.trim() === '') {
            alert('Please select warehouse');
            return;
        }
        if (productDescription.trim() === '') {
            alert('Please enter product description');
            return;
        }
        if (images.length < 1) {
            alert('Please upload at least 1 image');
            return;
        }
        setIsButtonDisabled(true);
    };

    const handleClearButtonClick = () => {
        setProductName('');
        setProductPrice('');
        setProductStock('');
        setProductSpecs('');
        setWarehouse('');
        setProductDescription('');
        setImages([]);
        setIsButtonDisabled(true);
    }

    return (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh' }}>
        <Paper elevation={0} sx={{ borderRadius: 1, width: '50%', mx: 'auto', my: 'auto' }}>
            <Typography variant="h6" gutterBottom ml={1}>
                创建商品
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                    {/* 桌面是中等屏幕，占满整个宽度 */}
                    <Grid item md={12}>
                        <TextField
                            fullWidth
                            label="商品名称"
                            variant="outlined"
                            value={productName}
                            onChange={(e) => {
                                setProductName(e.target.value);
                                // checkAndUpdateButtonStatus();
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            label="商品单价"
                            variant="outlined"
                            type="number"
                            value={productPrice}
                            onChange={(e) => {
                                setProductPrice(e.target.value);
                                // checkAndUpdateButtonStatus();
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            label="商品库存"
                            variant="outlined"
                            type="number"
                            value={productStock}
                            onChange={(e) => {
                                setProductStock(e.target.value);
                                // checkAndUpdateButtonStatus();
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>商品规格</InputLabel>
                            <Select
                                value={productSpecs}
                                onChange={(e) => {
                                    setProductSpecs(e.target.value);
                                    // checkAndUpdateButtonStatus();
                                }}
                                label="商品规格"
                            >
                                <MenuItem value="1盒">1盒</MenuItem>
                                <MenuItem value="2盒">2盒</MenuItem>
                                <MenuItem value="3盒">3盒</MenuItem>
                                <MenuItem value="4盒">4盒</MenuItem>
                                <MenuItem value="5盒">5盒</MenuItem>
                                <MenuItem value="6盒">6盒</MenuItem>
                                <MenuItem value="1罐">1罐</MenuItem>
                                <MenuItem value="2罐">2罐</MenuItem>
                                <MenuItem value="3罐">3罐</MenuItem>
                                <MenuItem value="4罐">4罐</MenuItem>
                                <MenuItem value="5罐">5罐</MenuItem>
                                <MenuItem value="6罐">6罐</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>货仓</InputLabel>
                            <Select
                                value={warehouse}
                                onChange={(e) => {
                                    setWarehouse(e.target.value);
                                    // checkAndUpdateButtonStatus();
                                }}
                                label="货仓"
                            >
                                <MenuItem value="全国">全国</MenuItem>
                                <MenuItem value="北京">北京</MenuItem>
                                <MenuItem value="上海">上海</MenuItem>
                                <MenuItem value="杭州">杭州</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            fullWidth
                            label="商品描述"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={productDescription}
                            onChange={(e) => {
                                setProductDescription(e.target.value);
                                // checkAndUpdateButtonStatus();
                            }}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    startIcon={<PhotoCamera />}
                                    sx={{ mr: 1 }}
                                >
                                    上传图片
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageUpload}
                                    />
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleClearButtonClick}>
                                    清空
                                </Button>
                            </Box>
                            <Button variant="contained" color="primary" disabled={isButtonDisabled} onClick={handleConfirmButtonClick}>
                                确认
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {images.map((image, index) => (
                                <Box key={index} sx={{ position: 'relative', m: 1 }}>
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt={`product-${index}`}
                                        style={{ width: 100, height: 100, objectFit: 'contain' }}
                                    />
                                    <IconButton
                                        size="small"
                                        onClick={() => handleImageRemove(index)}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            background: 'rgba(255, 255, 255, 0.3)',
                                        }}
                                    >
                                        X
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    </Box>
    );
};

export default ProductCreate;
