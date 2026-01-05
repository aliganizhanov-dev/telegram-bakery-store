import React from 'react';
import { CartItem } from '../types';
import './Cart.css';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
  totalPrice: number;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  totalPrice,
}) => {
  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <p>🛒 Savat bo'sh</p>
        <p>Mahsulot qo'shing!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>🛒 Savat ({items.length})</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.product.name}</h3>
              <p className="cart-item-price">
                {item.product.price.toLocaleString()} so'm × {item.quantity}
              </p>
            </div>
            <div className="cart-item-controls">
              <button
                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                className="quantity-btn"
                disabled={item.quantity >= item.product.stock}
              >
                +
              </button>
              <button
                onClick={() => onRemove(item.product.id)}
                className="remove-btn"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Jami:</h3>
        <h3 className="total-price">{totalPrice.toLocaleString()} so'm</h3>
      </div>
      <button onClick={onCheckout} className="checkout-btn">
        📦 Buyurtma berish
      </button>
    </div>
  );
};
