import React from 'react';
import SneakerList from './SneakerList';
import Checkout from './Checkout';
import { SneakerProvider } from '../../Context/SneakerContext';

const SneakerShop = () => {
    return (
        <SneakerProvider>
            <div>
                <SneakerList />
                <Checkout />
            </div>
        </SneakerProvider>
    );
};

export default SneakerShop;
