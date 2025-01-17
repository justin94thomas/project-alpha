import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem,
    Popover,
    TextField,
    Box,
} from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import { icons } from '../../Setup/Content/assets';
import Routes from '../../Setup/routes-manager/routes.json';


const Header = () => {
    const history = useHistory();
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const { MenuIcon, AccountCircleIcon } = icons;

    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const handleSignOut = () => {
        handleProfileClose();
    };

    const handleShowProfile = () => { };
    const handleSearchChange = (event, newValue) => {
        setSearchQuery(newValue);
        setSearchSuggestions(['Apple', 'Banana', 'Orange']);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={() => history.push(Routes.dashboard)}>
                    Project Alpha
                </Typography>
                <Box style={{ flexGrow: 1 }}>
                    <Autocomplete
                        style={{ width: '300px', marginLeft: 20 }}
                        freeSolo
                        options={searchSuggestions}
                        renderInput={(params) => (
                            <TextField
                                style={{ background: '#fff', borderRadius: '8px', margin: 10 }}
                                {...params}
                                label="Search"
                                variant="outlined"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e, e.target.value)}
                            />
                        )}
                    />
                </Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="account of current user"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={handleProfileClick}
                >
                    <AccountCircleIcon />
                </IconButton>
                {/* Profile Menu */}
                <Menu
                    id="profile-menu"
                    anchorEl={profileAnchorEl}
                    keepMounted
                    open={Boolean(profileAnchorEl)}
                    onClose={handleProfileClose}
                >
                    <MenuItem onClick={handleShowProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                    {/* You can add more options in the profile menu */}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
