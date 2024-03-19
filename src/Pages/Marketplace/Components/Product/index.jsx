import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, makeStyles, Checkbox } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import ProductCard from './Card';
import { LuFilter } from "react-icons/lu";
import { useMarketplaceContext } from '../../../../Setup/Context/MarketplaceContext';


const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderBottom: '2px solid #D5EF82',
        margin: "30px 0px"
    },
    headerText: {
        fontSize: '56px',
        fontWeight: 600,
    },
    subHeader: {
        fontSize: '16px',
        margin: "10px 0px"
    },
    box: {
        transition: 'box-shadow .075s ease-in-out',
        boxShadow: '0 4px 15px 2px rgba(0,0,0,.1)',
        height: '80px',
        width: '130px',
        cursor: 'pointer'
    },
    filterHead: {
        minHeight: '56px',
        alignItems: 'center',
        display: 'flex',
        fontSize: '16px',
        fontWeight: 600,
    }
}))

const Filter = ({ selectedProduct, setFilterData }) => {
    const classes = useStyles();
    const { state } = useMarketplaceContext();
    const [brands, setBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        let productType = selectedProduct?.name;
        if (state[productType]) {
            const uniqueBrands = [...new Set(state[productType].map(product => product.brand))];
            setBrands(uniqueBrands);
        }
    }, [selectedProduct]);

    const updateProduct = (e, brand) => {
        let productType = selectedProduct?.name;
        if (e.target.checked) {
            const updatedBrands = [...selectedBrands, brand];
            setSelectedBrands(updatedBrands);
            const filteredList = state[productType].filter(product => updatedBrands.includes(product.brand));
            setFilterData(filteredList);
        } else {
            const updatedBrands = selectedBrands.filter(selectedBrand => selectedBrand !== brand);
            setSelectedBrands(updatedBrands);
            const filteredList = state[productType].filter(product => updatedBrands.includes(product.brand));
            setFilterData(filteredList);
        }
    };

    return (
        <Box style={{ borderRight: '1px solid #eee', height: '100%' }}>
            <div style={{ borderBottom: '1px solid #eee', }}>
                <Typography varient={'p'} className={classes.filterHead}>Filter <LuFilter style={{ marginLeft: '4px' }} size={12} /></Typography>
            </div>
            <div style={{ marginTop: '30px' }}>
                <Typography varient={'p'} style={{ fontWeight: 600 }}>Brand</Typography>
                <div style={{ textAlign: 'left', marginTop: '12px' }}>
                    {brands && brands.map(prod =>
                        <Typography varient={'p'}><Checkbox style={{ color: '#0242E8' }} onChange={(e) => updateProduct(e, prod)} /> {prod}</Typography>
                    )}
                </div>
            </div>
            {/* <div style={{ marginTop: '30px' }}>
                <Typography varient={'p'} style={{ fontWeight: 600 }}>Price</Typography>
            </div> */}
        </Box>
    )
}
const ProductList = ({ selectedProduct }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { state } = useMarketplaceContext();
    const [productData, setProductData] = useState([]);
    const [filterData, setFilterData] = useState();


    useEffect(() => {
        if (selectedProduct && state) {
            let productType = selectedProduct?.name;
            const productData = state[productType] ? state[productType] : [];
            setProductData(productData);
        }
        if (filterData) {
            setProductData(filterData);
        }
    }, [state, filterData])

    return (<>
        <Grid container xs={12}>
            {/* <Grid item xs={2} style={{ height: '100vh' }}>
                <Filter selectedProduct={selectedProduct} productData={productData} setFilterData={setFilterData} />
            </Grid> */}
            <Grid item xs={11}>
                <Box>
                    <Typography varient={'p'} className={classes.filterHead} style={{ marginLeft: 30 }}>{selectedProduct?.name} ({productData.length})</Typography>
                </Box>
                <Grid container xs={12} style={{ margin: '20px' }}>
                    <ProductCard productData={productData} filterData={filterData} />
                </Grid>
            </Grid>
        </Grid>
    </>)
}

export default ProductList;
