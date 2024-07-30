import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Loader from '../../Components/Loader';
import { images } from "../../Setup/Content/assets";
import { getDashboardProjects } from '../../Utils/APIstore';
import Projects from './projects.json';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        gap: 20,
    },
    content: {
        border: "1px solid #f4f4f4",
        borderRadius: 8,
        minHeight: "30px",
        background: "#f4f4f4 !important",
        cursor: "pointer",
        padding: 16,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const storeData = useSelector(state => state);
    const [dashboardContent, setDashboardContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function fetchData() {
            try {
                setLoading(true);
                const response = await getDashboardProjects();
                debugger
                if (response.success) {
                    dispatch({ type: 'PROJECT_DATA', payload: response.data });
                } else {
                    dispatch({ type: 'PROJECT_DATA', payload: Projects?.Content });
                }
            } catch (error) {
                dispatch({ type: 'PROJECT_DATA', payload: Projects.Content });
                console.log('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, [dispatch]);

    useEffect(() => {
        if (storeData?.projects?.showProjects && storeData?.projects?.showProjects.length > 0) {
            setDashboardContent(storeData?.projects?.showProjects);
        } else {
            setDashboardContent(storeData?.projects?.dashboardProjects);
        }
    }, [storeData]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Box style={{ margin: 16 }}>
            {loading && <Loader />}
            <Grid container spacing={2} className={classes.main}>
                {dashboardContent && dashboardContent.length > 0 ? (
                    dashboardContent.map((item) => (
                        <Grid item xs={6} sm={4} lg={2} key={item.Name}>
                            <Link to={item.Routes} style={{ textDecoration: 'none' }}>
                                <div className={classes.content}>
                                    <img
                                        src={images[item.Image]}
                                        alt='dashboard-img'
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <Typography variant="body1">{capitalizeFirstLetter(item.Name)}</Typography>
                                </div>
                            </Link>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No content available</Typography>
                )}
            </Grid>
        </Box>
    );
}
