import React from 'react';

function CartItem({ item, removeFromCart, updateItemCount }) {
    const handleDelete = () => {
        removeFromCart(item.id);
    };

    const handleIncrement = () => {
        updateItemCount(item.id, item.count + 1);
    };

    const handleDecrement = () => {
        if (item.count > 1) {
            updateItemCount(item.id, item.count - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
                <h3>{item.name}</h3>
                <p>{`Price: $${item.price}`}</p>
            </div>
            <div className="item-count">
                <button onClick={handleDecrement}>-</button>
                <span>{item.count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button className="delete-button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default CartItem;
