import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...item, count: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== itemId);
        setCartItems(updatedCart);
    };

    const updateItemCount = (itemId, newCount) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.id === itemId ? { ...cartItem, count: newCount } : cartItem
        );
        setCartItems(updatedCart);
    };

    return (
        <div className="app-container">
            <ProductList addToCart={addToCart} />
            <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateItemCount={updateItemCount}
            />
        </div>
    );
}

export default ShoppingCart;
