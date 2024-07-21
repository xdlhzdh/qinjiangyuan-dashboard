// src/app/layout.tsx
"use client"
import React, { ReactNode, useState } from 'react';
import { CssBaseline, Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Sidebar from '@components/Sidebar';
import { MenuProvider } from 'src/components/MenuContext';

export default function RootLayout({ children }: { children: ReactNode }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [sidebarOpen, setDrawerOpen] = useState(true);
    const [rotateIcon, setRotateIcon] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!sidebarOpen);
        setRotateIcon(!rotateIcon);
    };

    return (
        <html lang="en">
            <head >
                <title>青疆源后台管理系统</title>
            </head>
            <body style={{ height: '100vh' }}>
                <CssBaseline />
                <Box sx={{ display: 'flex', maxHeight: '100%' }}>
                    <MenuProvider>
                        <Sidebar sidebarOpen={sidebarOpen} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 0, mt: 0, overflow: 'auto' }}>

                            <AppBar elevation={1} style={{
                                /* 调整背景颜色和透明度，透明度为0表示完全透明，那么就是纯白色 */
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                /* boxShadow作用同elevation */
                                // boxShadow: 'no',
                                /* 字体颜色是黑色 */
                                color: '#000000',
                                position: 'static',
                                boxSizing: 'border-box',
                            }}>
                                <Toolbar>
                                    <IconButton edge="start" color="inherit" aria-label="menu"
                                        sx={{
                                            transform: rotateIcon ? 'rotate(90deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s'
                                        }}
                                        onClick={handleDrawerToggle}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography sx={{ fontSize: '1.4rem' }} noWrap >
                                        首页
                                    </Typography>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <IconButton edge="end" color="inherit" onClick={handleMenu}>
                                        <AccountCircleSharpIcon fontSize='large' />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>个人设置</MenuItem>
                                        <MenuItem onClick={handleClose}>退出</MenuItem>
                                    </Menu>
                                </Toolbar>
                            </AppBar>
                            <Box sx={{ flexGrow: 1 }}>
                                {children}
                            </Box>
                        </Box>
                    </MenuProvider>
                </Box>
            </body>
        </html >
    );
}
