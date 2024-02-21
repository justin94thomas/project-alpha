import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import Projects from "./projects.json";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        gap: 20,
        padding: "16px",
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
        <Box>
            <Grid container spacing={2} className={classes.main}>
                {Projects?.Content.map((item) => (
                    <Grid item xs={2} key={item.Name}>

                        <Link to={item.Routes}>
                            <div className={classes.content}>
                                <Typography variant="p">{item.Name}</Typography>
                            </div>
                        </Link>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
