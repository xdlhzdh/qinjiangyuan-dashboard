// componets/Sidebar.tsx
"use client";
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import { HomeOutlined, ShoppingCartOutlined, ViewListOutlined, BarChartOutlined, DiscountOutlined, ManageAccountsOutlined, SvgIconComponent, GridOnOutlined, AddBoxOutlined, MonetizationOnOutlined } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { useMenuContext } from '@components/MenuContext';


const SidebarContainer = styled.div<{ open: boolean }>`
  width: ${props => (props.open ? '170px' : '0')};
  box-sizing: border-box;
  transition: width 0.2s;
  background-color: #003399;
  opacity: 0.8;
  color: #DFE3E4;
  overflow: auto;
  scrollbar-gutter: stable; /* 防止滚动条闪烁 */
  height: 100vh;
`;

const CustomListItemButton = styled(ListItemButton)({
    '& .MuiListItemIcon-root': {
        minWidth: '40px',
        marginRight: '2px', // 设置图标和文字之间的宽度
    },
    '& .MuiListItemText-primary': {
        fontSize: '18px', // 设置字体的大小
        marginRight: '20px',
    },
});

const CustomListItemChildButton = styled(ListItemButton)({
    '& .MuiListItemIcon-root': {
        minWidth: 'auto',
        marginRight: '12px', // 设置图标和文字之间的宽度
    },
    '& .MuiListItemText-primary': {
        fontSize: '17px', // 设置字体的大小
    },
    marginLeft: '18px',  // 设置图标左边的空白
});

interface SubmenuItem {
    text: string;
    icon: SvgIconComponent;
    iconSize?: string;
}

interface MenuItemProps {
    text: string;
    icon: SvgIconComponent;
    iconSize?: string;
    submenus: SubmenuItem[];
}

function createMenuItem(props: MenuItemProps) {
    return {
        text: props.text,
        icon: <props.icon sx={{ fontSize: props.iconSize || '24px', color: '#DFE3E4' }} />,
        submenus: props.submenus.map(submenu => ({
            text: submenu.text,
            icon: <submenu.icon sx={{ fontSize: submenu.iconSize || '22px', color: '#DFE3E4' }} />
        }))
    };
}

const menuItems = [
    createMenuItem({ text: '首页', icon: HomeOutlined, iconSize: '24px', submenus: [{ text: 'Submenu 1.1', icon: HomeOutlined, iconSize: '24px' }] }),
    createMenuItem({ text: '商品', icon: ShoppingCartOutlined, iconSize: '22px', submenus: [{ text: '商品列表', icon: GridOnOutlined, iconSize: '19px' }, { text: '创建商品', icon: AddBoxOutlined }] }),
    createMenuItem({ text: '订单', icon: ViewListOutlined, submenus: [{ text: 'Submenu 1.1', icon: HomeOutlined }] }),
    createMenuItem({ text: '统计', icon: BarChartOutlined, submenus: [{ text: '销量', icon: MonetizationOnOutlined }] }),
    createMenuItem({ text: '营销', icon: DiscountOutlined, submenus: [{ text: 'Submenu 1.1', icon: HomeOutlined }] }),
    createMenuItem({ text: '权限', icon: ManageAccountsOutlined, iconSize: '26px', submenus: [{ text: 'Submenu 1.1', icon: HomeOutlined }] }),
];

const SidebarContent: React.FC = () => {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);
    const { setSelectedMenuItem } = useMenuContext();
    const handleMemuClick = (index: number) => {
        setOpenIndexes(prevOpenIndexes =>
            prevOpenIndexes.includes(index)
                ? prevOpenIndexes.filter(i => i !== index)
                : [...prevOpenIndexes, index]
        );
    };
    const handleChildMenuClick = (menuItem: string) => {
        setSelectedMenuItem(menuItem);
    };
    return (
        <List component="nav">
            {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                    <CustomListItemButton onClick={() => handleMemuClick(index)} >
                        <Grid container direction="row" alignItems="end">
                            <Grid>
                                <ListItemIcon >{item.icon}</ListItemIcon>
                            </Grid>
                            <Grid>
                                <ListItemText primary={item.text} />
                            </Grid>
                            <Grid>
                                {openIndexes.includes(index) ? <ExpandLess /> : <ExpandMore />}
                            </Grid>
                        </Grid>
                    </CustomListItemButton>
                    <Collapse in={openIndexes.includes(index)} timeout="auto" unmountOnExit >
                        <List component="nav" disablePadding >
                            {item.submenus.map((submenu, submenuIndex) => (
                                <CustomListItemChildButton key={submenuIndex} onClick={() => handleChildMenuClick(submenu.text)}>
                                    <Grid container direction="row" alignItems="end">
                                        <Grid>
                                            <ListItemIcon >{submenu.icon}</ListItemIcon>
                                        </Grid>
                                        <Grid>
                                            <ListItemText primary={submenu.text} />
                                        </Grid>
                                    </Grid>
                                </CustomListItemChildButton>
                            ))}
                        </List>
                    </Collapse>
                    <Divider variant='fullWidth' />
                </React.Fragment>
            ))
            }
        </List >
    );
};

interface SidebarProps {
    sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
    return (
        <SidebarContainer open={sidebarOpen}>
            <SidebarContent />
        </SidebarContainer>
    );
};

export default Sidebar;
