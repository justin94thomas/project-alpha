import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import Projects from "./projects.json";
import { images } from "../../Setup/Content/assets";

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

    return (
        <Box style={{ margin: 16 }}>
            <Grid container spacing={2} className={classes.main}>
                {Projects?.Content.map((item) => (
                    <Grid item xs={6} sm={4} lg={2} key={item.Name}>
                        <Link to={item.Routes} style={{ textDecoration: 'none' }}>
                            <div className={classes.content}>
                                <img src={images[item.Image]} style={{ width: '100%' }} />
                                <Typography variant="p">{item.Name}</Typography>
                            </div>
                        </Link>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
