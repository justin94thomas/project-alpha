import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, useTheme, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineShoppingCart } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    cardImgBox: {
        border: '1px solid #eee',
        height: '250px',
        overflow: 'hidden'
    },
    itemDetails: {
        gap: '4px',
        display: 'flex',
        flexDirection: 'column'
    },
    productName: {
        textAlign: 'left',
        fontWeight: 600
    },
    productReview: {
        textAlign: 'left'
    },
    discountedPrice: {
        textDecoration: 'line-through',
        color: 'gray',
    },
    productPrice: {
        textAlign: 'left',
        fontSize: '14px'
    },
    addBtn: {
        border: '1px solid #eee',
        borderRadius: '8px',
        '&:hover': {
            background: '#0242E8',
            color: '#fff'
        }
    }


}))
const ProductCard = ({ productData }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    console.log("productData", productData)
    return (<>
        <Grid container xs={12} margin={20}>
            {productData && productData.length > 0 ?
                <>
                    {productData.map((item, index) => {
                        return <Grid item xs={3} style={{ padding: '10px' }}>
                            <Box className={classes.cardImgBox}>
                                <Carousel interval={null}>
                                    {item.image.length > 0 && item.image.map(img => {
                                        return <Carousel.Item>
                                            <img src={img} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
                                        </Carousel.Item>
                                    })}
                                </Carousel>
                            </Box>
                            <Box className={classes.itemDetails}>
                                <Typography varient='p' className={classes.productName}>{item.name}</Typography>
                                <Typography varient='p' className={classes.productReview}>(100)</Typography>
                                <Typography varient='p' className={classes.productPrice}>{item.price} {item.original && <span className={classes.discountedPrice}>{item.original}</span>} </Typography>
                                <Button className={classes.addBtn}>Add to Cart <MdOutlineShoppingCart style={{ marginLeft: '10px' }} size={16} /></Button>
                            </Box>
                        </Grid>
                    })}
                </>
                : <Typography>No Products Available</Typography>}

        </Grid>
    </>)
}

export default ProductCard;