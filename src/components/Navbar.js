import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//Components
import UserRegLog from "./UserRegLog";
//AuthStore import for valid user
// import authStore from '../store/authStore'
//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logout from '@mui/icons-material/Logout';

const Navbar = () => {

    const [openUserModal, setOpenUserModal] = useState(false);
    const activateUserModal = () => setOpenUserModal(true);
    const closeUserModal = () => setOpenUserModal(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Home</Link>
                <Link to="/jam3ya">Jam3ya</Link>
            </Typography>
            {/* add boolean check for use to toggle login/reg to logout */}
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <AccountCircleSharpIcon/>
                </IconButton>
                </Tooltip>
            </Box>
            <Menu anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{ elevation: 0,
                        sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                
                <MenuItem onClick={activateUserModal}>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon fontSize="small" />
                    </ListItemIcon >
                    Register
                        </MenuItem>
                <MenuItem onClick={activateUserModal}>
                    <ListItemIcon>
                        <LoginSharpIcon fontSize="small" />
                    </ListItemIcon>
                    login
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                    <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            {/* Add onclick for modal, transfer states as props */}
            </Toolbar>
            </AppBar>
            <UserRegLog openUserModal={openUserModal}
                closeUserModal={ closeUserModal }/>
    </Box>
    )
}

export default Navbar      