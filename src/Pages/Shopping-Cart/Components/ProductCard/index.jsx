import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ProductCard({ product, addToCart }) {
    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        addToCart(product);
        setCount(1);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    };

    return (
        <div className="product-card">
            <Carousel>
                {product.image.map(item => {
                    return <Carousel.Item>
                        <img src={item} alt={product.name} />
                    </Carousel.Item>
                })}
            </Carousel>

            <h3>{product.name}</h3>
            <p>{`Price: $${product.price}`}</p>
            {count === 0 ? (
                <button onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                <div className="count-buttons">
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
            )}
        </div>
    );
}

export default ProductCard;
