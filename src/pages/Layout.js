import React, { useContext } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { LiveTv } from '@mui/icons-material';
import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material'
import MyContext from '../context/MyContext';

const WebTitle = styled(Typography)`
    font-family: tahoma,sans-serif;
`

const Loading = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgb(131 129 129 / 63%);
    display: flex;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 100000;
`

const Layout = () => {
    const navigate = useNavigate();
    const { loading } = useContext(MyContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#2e51a2' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Desktop */}
                        <LiveTv sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <WebTitle
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BukanMyAnimeList
                        </WebTitle>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={() => navigate('/')}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => navigate('/collection-list/')}>
                                    <Typography textAlign="center">Collection</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* Mobile */}
                        <LiveTv sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <WebTitle
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BMAL
                        </WebTitle>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={() => navigate('/')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                                onClick={() => navigate('/collection-list/')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Collection
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
            {
                loading && <Loading>
                    <CircularProgress />
                </Loading>
            }
        </>
    )
};

export default Layout;
