import React, { useState, useEffect } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { images } from "../../Setup/Content/assets";
import { useSelector, useDispatch } from 'react-redux';

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
    const storeData = useSelector(state => state);
    const [dashboardContent, setDashboardContent] = useState([]);

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
