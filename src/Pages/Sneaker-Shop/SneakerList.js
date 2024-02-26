// SneakerList.js
import React from 'react';
import SneakerCard from './SneakerCard';
import { useSneakerContext } from '../../Context/SneakerContext';

const SneakerList = () => {
    const { state } = useSneakerContext();
    debugger

    return (
        <div>
            {state.sneakers.map(sneaker => (
                <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
        </div>
    );
};

export default SneakerList;
