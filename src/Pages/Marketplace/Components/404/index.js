import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../../../Setup/Content/assets';

const useStyles = makeStyles((theme) => ({
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text1: {
        textTransform: 'uppercase',
        fontSize: 28
    },
    text2: {
        fontWeight: 600,
        display: 'block'
    }
}))


const Page404 = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return <>
        <Grid container xs={12}>
            <Grid item xs={4} className={classes.textBox}>
                <Typography className={classes.text1} varient='h2'>{t('headings:Marketplace_Page404')}<span className={classes.text2}>{t('headings:Marketplace_Page404_2')}</span></Typography>
                <Typography varient='p'>{t('content:Marketplace_checkBack')}</Typography>
            </Grid>
            <Grid item xs={8}>
                <img src={images.image404} style={{ width: '100%' }} />
            </Grid>
        </Grid>
    </>
}

export default Page404;