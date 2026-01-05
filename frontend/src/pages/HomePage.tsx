import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Cart } from '../components/Cart';
import { useCart } from '../hooks/useCart';
import { useTelegram } from '../hooks/useTelegram';
import { getProducts, createOrder } from '../api/api';
import { Product } from '../types';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'address' | 'phone'>('cart');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const { cart, addToCart, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const { user, tg } = useTelegram();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Xato:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({ product, quantity: 1 });
    // Telegram'da vibration
    if (tg) {
      tg.HapticFeedback?.impactOccurred('light');
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('address');
  };

  const handleSubmitOrder = async () => {
    if (!address || !phone) {
      alert('Iltimos, manzil va telefon raqamingizni kiriting!');
      return;
    }

    try {
      const orderData = {
        user_id: user?.id || 0,
        username: user?.username,
        items: cart.map(item => ({
          product_id: item.product.id,
          product_name: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
        })),
        total_price: totalPrice,
        delivery_address: address,
        phone: phone,
      };

      const response = await createOrder(orderData);

      if (response.success) {
        // Telegram botga ma'lumot yuborish
        if (tg) {
          tg.sendData(JSON.stringify({
            type: 'order',
            orderId: response.data.id,
            totalPrice: totalPrice,
          }));
        }

        clearCart();
        setShowCart(false);
        setCheckoutStep('cart');
        setAddress('');
        setPhone('');
        alert('✅ Buyurtma qabul qilindi!');
      }
    } catch (error) {
      console.error('Xato:', error);
      alert('❌ Xatolik yuz berdi!');
    }
  };

  if (loading) {
    return <div className="loading">⏳ Yuklanmoqda...</div>;
  }

  return (
    <div className="home-page">
      <header className="header">
        <h1>🛍 Do'kon</h1>
        <button 
          className="cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Savat {totalItems > 0 && `(${totalItems})`}
        </button>
      </header>

      {!showCart ? (
        <div className="products-grid">
          {products.length === 0 ? (
            <p className="no-products">Mahsulotlar yo'q</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))
          )}
        </div>
      ) : (
        <div className="checkout-container">
          {checkoutStep === 'cart' && (
            <Cart
              items={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              onCheckout={handleCheckout}
              totalPrice={totalPrice}
            />
          )}

          {checkoutStep === 'address' && (
            <div className="checkout-form">
              <h2>📍 Yetkazib berish ma'lumotlari</h2>
              <div className="form-group">
                <label>Manzil:</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Shahar, ko'cha, uy raqami..."
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label>Telefon raqam:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+998 90 123 45 67"
                />
              </div>
              <div className="form-actions">
                <button
                  onClick={() => setCheckoutStep('cart')}
                  className="back-btn"
                >
                  ← Orqaga
                </button>
                <button
                  onClick={handleSubmitOrder}
                  className="submit-btn"
                  disabled={!address || !phone}
                >
                  ✅ Tasdiqlash
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
