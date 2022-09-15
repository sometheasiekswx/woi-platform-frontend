import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'
import logoSmall from '../images/logoSmall.svg'


const actions = [
    {text: 'Home', href: '/'},
    {text: 'About Us', href: '/'},
    {text: 'Projects', href: '/'},
    {text: 'Services', href: '/'},
    {text: 'Contact Us', href: '/'}
]

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    flexGrow: 1,
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit', '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0), // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch', '&:focus': {
                width: '20ch',
            },
        },
    },
}))


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (<AppBar position='static'>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Box
                    component='img'
                    src={logoSmall}
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        width: 100,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                />
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom', horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top', horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'flex', md: 'none'},
                        }}
                    >
                        {actions.map((action) => (
                            <MenuItem key={`${action.text}-${action.href}`} onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>{action.text}</Typography>
                            </MenuItem>))}
                    </Menu>
                </Box>
                <Search sx={{mx: 2, display: {xs: 'flex', md: 'none'}}}>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Search…'
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
                <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                    {actions.map((action) => (<Button
                        key={`${action.text}-${action.href}`}
                        onClick={handleCloseNavMenu}
                        sx={{ml: 2, color: 'white', display: '', whiteSpace: 'nowrap'}}
                    >
                        {action.text}
                    </Button>))}
                </Box>
                <Search sx={{mx: 2, display: {xs: 'none', md: 'flex'}}}>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Search…'
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
                <Box
                    component='img'
                    src={logoSmall}
                    sx={{
                        mr: 2,
                        display: {xs: 'flex', md: 'none'},
                        width: 100,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                />
            </Toolbar>
        </Container>
    </AppBar>)
}

export default Header