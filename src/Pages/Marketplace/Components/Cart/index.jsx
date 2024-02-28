import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, useTheme, Button } from '@material-ui/core';
import { FaTrashCan } from "react-icons/fa6";

const useStyles = makeStyles((theme) => ({
    myCartText: {
        fontWeight: 600,
        fontSize: '20px'
    },
    cartMain: {
        display: 'flex',

    },
    myCartBox: {
        textAlign: 'left',
        marginTop: '20px'
    },
    cartMainHead: {
        marginTop: 20,
        borderBottom: '2px solid #eee',
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardMain: {
        padding: '0px',
        height: '60vh',
        display: 'flex',
        gap: 40,
        borderBottom: '2px solid #eee',
    },
    cartCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '12px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000'
        }
    },
    cartItem: {
        border: '1px solid #eee',
        borderRadius: '8px',
        textAlign: 'left',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column'
    },
    productDetail: {
        display: 'flex',
        gap: '10px'
    },
    productDetail2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    checkoutMain: {
        textAlign: 'left',
        marginTop: '16px'
    },
    discountBtn: {
        background: 'rgb(0, 0, 0)',
        color: ' rgb(255, 255, 255)',
        padding: '6px',
        marginLeft: '15px',
        fontSize: '12px',
        marginTop: '-5px',
        width: '115px'
    },
    promotionCard: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d3d3d3',
        paddingBottom: 10
    },
    promotionCard2: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    checkoutBtn: {
        background: '#E9C27D',
        color: '#000',
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        marginTop: '20px'
    },
    checkoutItems: {
        fontSize: '12px'
    },
    checkoutItemDiscount: {
        fontSize: '12px',
        color: 'red'
    },
    checkoutItemTotal: {
        fontSize: '14px',
        fontWeight: 600
    }
}))

const MarketplaceCart = () => {
    const classes = useStyles();


    return (<Grid container xs={12} justifyContent='center'>
        <Grid container xs={9} className={classes.cartMain}>
            <Grid item xs={12} className={classes.myCartBox}>
                <Typography varient='p' className={classes.myCartText}>Your Cart</Typography>
            </Grid>
            <Grid item xs={12} className={classes.cartMainHead}>
                <Typography style={{ fontSize: '14px' }}>Continue Shopping</Typography>
                <Typography style={{ fontSize: '14px' }}>Items</Typography>
                <Typography style={{ fontSize: '14px' }}>Need Help?</Typography>
            </Grid>
            <Grid item xs={12} className={classes.cardMain}>
                <Grid item xs={9} className={classes.cartCard}>
                    <Box className={classes.cartItem}>
                        <Grid container xs={12}>
                            <Grid item xs={5}>
                                <Grid item xs={12} style={{ padding: '5px 12px' }}>
                                    <Typography varient='p' style={{ fontWeight: 600, fontSize: '13px' }}>Product Name</Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.productDetail}>
                                    <img style={{ height: '90px', padding: '0px 0px 10px 10px' }} src={'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/211d4d31-22dc-4792-aafd-70a6d32a4fdf/air-jordan-i-high-g-golf-shoes-qKzTBg.png'} />
                                    <Typography varient='p'>In Stock</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} className={classes.productDetail2}>
                                <Typography varient="p" style={{ fontSize: '13px', color: '#a4a4a4' }}>Each</Typography>
                                <Typography varient="p">Rs. 100</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.productDetail2}>
                                <Typography className={classes.checkoutItems}>Quantity</Typography>
                                <input name="Quantity" type='number' style={{ width: 75, paddingLeft: 6 }} />
                            </Grid>
                            <Grid item xs={2} className={classes.productDetail2}>
                                <Typography className={classes.checkoutItems}>Total</Typography>
                                <Typography style={{ fontSize: "15px" }}>Rs 300</Typography>
                            </Grid>
                            <Grid item xs={1} className={classes.productDetail2}>
                                <FaTrashCan size={18} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={3} className={classes.checkoutMain}>
                    <Grid item xs={12}>
                        <Typography className={classes.checkoutItems}>Enter Discount Code</Typography>
                        <input name="Quantity" type='text' placeholder="Discount Code" style={{ width: 140 }} />
                        <Button className={classes.discountBtn}>Submit</Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '15px' }}>
                        <Typography style={{ fontSize: "16px", fontWeight: 600 }}>Promotions</Typography>
                        <div className={classes.promotionCard}>
                            <Typography className={classes.checkoutItems}>Fee Shipping on order above Rs. 1000</Typography>
                            <Typography className={classes.checkoutItems} style={{ color: 'green' }}>-Rs. 50</Typography>
                        </div>
                        <div className={classes.promotionCard2} style={{ paddingTop: 10 }}>
                            <Typography className={classes.checkoutItems}>Sub Total</Typography>
                            <Typography className={classes.checkoutItems}>Rs. 50</Typography>
                        </div>
                        <div className={classes.promotionCard2}>
                            <Typography className={classes.checkoutItems}>Shipping Cost</Typography>
                            <Typography className={classes.checkoutItems}>Rs. 50</Typography>
                        </div>
                        <div className={classes.promotionCard2}>
                            <Typography className={classes.checkoutItemDiscount}>Shipping Discount</Typography>
                            <Typography className={classes.checkoutItemDiscount}>-Rs. 50</Typography>
                        </div>
                        <div className={classes.promotionCard2}>
                            <Typography className={classes.checkoutItems}>Tax</Typography>
                            <Typography className={classes.checkoutItems}>Rs. 50</Typography>
                        </div>
                        <div className={classes.promotionCard2}>
                            <Typography className={classes.checkoutItemTotal} >Total</Typography>
                            <Typography className={classes.checkoutItemTotal}>Rs. 50</Typography>
                        </div>
                        <Button className={classes.checkoutBtn}>Checkout</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}
export default MarketplaceCart;