import React, { useState } from 'react';
import { addProduct } from '../api/api';
import './AdminPage.css';

export const AdminPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    stock: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await addProduct({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
        category: formData.category,
        stock: parseInt(formData.stock),
      });

      if (response.success) {
        alert('✅ Mahsulot qo\'shildi!');
        setFormData({
          name: '',
          description: '',
          price: '',
          image: '',
          category: '',
          stock: '',
        });
      }
    } catch (error) {
      console.error('Xato:', error);
      alert('❌ Xatolik yuz berdi!');
    }
  };

  return (
    <div className="admin-page">
      <h1>⚙️ Admin Panel</h1>
      <div className="admin-form-container">
        <h2>➕ Yangi mahsulot qo'shish</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Nomi *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Tavsif</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label>Narxi (so'm) *</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Rasm URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label>Kategoriya</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Miqdori (dona) *</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            ✅ Qo'shish
          </button>
        </form>
      </div>
    </div>
  );
};
