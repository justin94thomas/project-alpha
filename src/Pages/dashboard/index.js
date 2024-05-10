import React, { useState, useEffect } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { images } from "../../Setup/Content/assets";
import { useSelector, useDispatch } from 'react-redux';
import { getDashboardProjects } from '../../Utils/APIstore';
import Projects from './projects.json';
import Loader from '../../Components/Loader';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        gap: 20,
    },
    content: {
        border: "1px solid #f4f4f4",
        borderRadius: 8,
        minHeight: "30px",
        background: "#f4f4f4",
        cursor: "pointer",
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const storeData = useSelector(state => state);
    const [dashboardContent, setDashboardContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function fetchData() {
            try {
                setLoading(true);
                const response = await getDashboardProjects();
                if (response.success) {
                    dispatch({ type: 'PROJECT_DATA', payload: response.data });
                } else {
                    dispatch({ type: 'PROJECT_DATA', payload: Projects.Content });
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                dispatch({ type: 'PROJECT_DATA', payload: Projects.Content });
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        if (storeData.showProjects && storeData.showProjects.length > 0) {
            setDashboardContent(storeData.showProjects)
        } else {
            setDashboardContent(storeData.dashboardProjects)
        }
    }, [storeData]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Box style={{ margin: 16 }}>
            {loading && <Loader />}
            <Grid container spacing={2} className={classes.main}>
                {dashboardContent.map((item) => (
                    <Grid item xs={6} sm={4} lg={2} key={item.Name}>
                        <Link to={item.Routes} style={{ textDecoration: 'none' }}>
                            <div className={classes.content}>
                                <img src={images[item.Image]} style={{ width: '100%' }} />
                                <Typography variant="p">{capitalizeFirstLetter(item.Name)}</Typography>
                            </div>
                        </Link>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
