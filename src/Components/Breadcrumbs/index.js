import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function CustomSeparator(props) {
    const classes = useStyles();
    const { array } = props;

    const handleClick = (item) => (event) => {
        event.preventDefault();
        props.history.push(item.url)
    }

    return (
        <div className={classes.root}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {array && array.map((item, index) => (
                    <Link color="inherit" key={index} href={item.url} onClick={handleClick(item)}>
                        <Typography color="textPrimary">{item.label}</Typography>
                    </Link>
                ))}

            </Breadcrumbs>
        </div>
    );
}
