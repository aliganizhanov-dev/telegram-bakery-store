import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.name} className="product-image" />
      )}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString()} so'm</span>
          <button 
            onClick={onAddToCart}
            className="add-to-cart-btn"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? '🛒 Qo\'shish' : '❌ Tugadi'}
          </button>
        </div>
        {product.stock > 0 && product.stock < 10 && (
          <span className="stock-warning">⚠️ {product.stock} ta qoldi</span>
        )}
      </div>
    </div>
  );
};
