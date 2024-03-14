import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useMarketplaceContext } from '../../../../Setup/Context/MarketplaceContext';

const useStyles = makeStyles((theme) => ({
    cardImgBox: {
        border: '1px solid #eee',
        height: '250px',
        overflow: 'hidden'
    },
    itemDetails: {
        gap: '4px',
        display: 'flex',
        flexDirection: 'column',
        height: '142px'
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
        marginTop: 'auto',
        '&:hover': {
            background: '#0242E8',
            color: '#fff'
        },
    },
    addedToCart: {
        borderRadius: '50%',
        width: 36,
        border: '1px solid',
        lineHeight: '36px'
    },
    quantitySelector: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: 'auto',
    }
}))


const ProductCard = ({ productData }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { state, dispatch } = useMarketplaceContext();

    const handleAddToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
    }

    const handleAddMore = (item) => {
        dispatch({ type: 'ADD_QUANTITY', payload: item.id });
    }

    const handleRemoveItem = (item) => {
        dispatch({ type: 'REDUCE_QUANTITY', payload: item.id });
        if (item.quantity === 1) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
        }
    }

    return (<>
        <Grid container xs={12} margin={20}>
            {productData && productData.length > 0 ?
                <>
                    {productData.map((item, index) => {
                        let isAdded = false;
                        let quantity = 0;
                        if (state?.cart.length > 0) {
                            const addedItem = state.cart.find(cartItem => cartItem.id === item.id);
                            if (addedItem) {
                                isAdded = true;
                                quantity = addedItem.quantity;
                            }
                        }
                        let product = isAdded ? { ...item, isAdded, quantity } : { ...item };
                        return (
                            <Grid item xs={3} style={{ padding: '10px' }} key={index}>
                                <Box className={classes.cardImgBox}>
                                    <Carousel interval={null}>
                                        {product.image.length > 0 && product.image.map((img, imgIndex) => (
                                            <Carousel.Item key={imgIndex}>
                                                <img src={img} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Box>
                                <Box className={classes.itemDetails}>
                                    <Typography variant='p' className={classes.productName}>{product.name}</Typography>
                                    <Typography variant='p' className={classes.productReview}>(100)</Typography>
                                    <Typography variant='p' className={classes.productPrice}>{product.price} {product.original && <span className={classes.discountedPrice}>{product.original}</span>} </Typography>
                                    {product.isAdded ?
                                        <div className={classes.quantitySelector}>
                                            <Button variant="contained" color="primary" onClick={() => handleAddMore(product)}>+</Button>
                                            <Typography className={classes.addedToCart}>{product.quantity}</Typography>
                                            <Button variant="contained" color="secondary" onClick={() => handleRemoveItem(product)}>-</Button>
                                        </div> :
                                        <Button className={classes.addBtn} onClick={() => handleAddToCart(product)}>Add to Cart<MdOutlineShoppingCart style={{ marginLeft: '10px' }} size={16} />
                                        </Button>
                                    }
                                </Box>
                            </Grid>
                        );
                    })}

                </>
                : <Typography>No Products Available</Typography>}
        </Grid >
    </>)
}

export default ProductCard;