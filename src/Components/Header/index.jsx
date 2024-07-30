import {
    AppBar,
    Box,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
    Typography,
    useMediaQuery
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { icons, images } from '../../Setup/Content/assets';
import Routes from '../../Setup/routes-manager/routes.json';

const useStyles = makeStyles((theme) => ({
    toolbarSection: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    },
    noCartImg: {
        background: '#fff !important',
        borderRadius: '50%',
        width: 50
    },
    appBar: {
        color: '#000 !important',
        backgroundColor: '#fff !important'
    }
}));

const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const { AccountCircleIcon, AlphaLogo } = icons;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const handleShowProfile = () => { };

    const handleSearchChange = debounce((val) => {
        setSearchQuery(val);
        dispatch({ type: 'SEARCH_PROJECT', payload: val });
    }, 500);

    useEffect(() => {
        let names = storeData?.projects?.dashboardProjects && storeData?.projects?.dashboardProjects.map(item => item.Name);
        setSearchSuggestions(names);
    }, [storeData]);

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Grid container xs={12}>
                    <Grid item xs={10} className={classes.toolbarSection}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => history.push(Routes.dashboard)}>
                            <img src={AlphaLogo} className={classes.noCartImg} alt="logo" />
                        </IconButton>
                        <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={() => history.push(Routes.dashboard)}>
                            Project Alpha
                        </Typography>
                        {!isMobile && (
                            <Box style={{ flexGrow: 1 }}>
                                <Autocomplete
                                    style={{ width: '300px', marginLeft: 20 }}
                                    freeSolo
                                    options={searchSuggestions}
                                    renderInput={(params) => (
                                        <TextField
                                            style={{ background: '#fff !important', borderRadius: '8px', margin: 10 }}
                                            {...params}
                                            label="Search"
                                            variant="outlined"
                                            value={searchQuery}
                                            onChange={(e) => handleSearchChange(e.target.value)}
                                        />
                                    )}
                                />
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={2} className={classes.toolbarSection} style={{ justifyContent: 'right' }}>
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
                        <Menu
                            id="profile-menu"
                            anchorEl={profileAnchorEl}
                            keepMounted
                            open={Boolean(profileAnchorEl)}
                            onClose={handleProfileClose}
                        >
                            <MenuItem onClick={handleShowProfile}>Profile</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
