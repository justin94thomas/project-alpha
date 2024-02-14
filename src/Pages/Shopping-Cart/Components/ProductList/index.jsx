import React from 'react';
import ProductCard from '../ProductCard';
import ProductData from './product.json';

const productData = ProductData.Sneakers;

function ProductList({ addToCart }) {
    return (
        <div className="product-list">
            {productData.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
