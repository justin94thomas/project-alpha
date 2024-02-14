import React from 'react';
import CartItem from '../CartItem';

function Cart({ cartItems, removeFromCart, updateItemCount }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    updateItemCount={updateItemCount}
                />
            ))}
            <div className="checkout-button">
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
