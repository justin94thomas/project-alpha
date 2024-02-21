import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



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

    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }

    return (
        <div className="product-card">
            {/* <Slider {...Settings}>
                {product.image.map(item => (
                    <img src={item} alt={product.name} />
                ))}
            </Slider> */}

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
