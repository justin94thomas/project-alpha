import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
