import { ProductModel } from '../models/Product';

export const seedDatabase = () => {
  const products = ProductModel.getAll();
  
  // Agar mahsulotlar bo'lmasa, demo ma'lumotlar qo'shamiz
  if (products.length === 0) {
    const demoProducts = [
      {
        name: '🍕 Pizza Margarita',
        description: 'Klassik pizza pomidor sousi va mozzarella bilan',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
        category: 'Ovqat',
        stock: 20,
      },
      {
        name: '🍔 Burger',
        description: 'Go\'shtli burger kartoshka fri bilan',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
        category: 'Ovqat',
        stock: 15,
      },
      {
        name: '🍜 Lagman',
        description: 'O\'zbekcha lagman',
        price: 30000,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        category: 'Ovqat',
        stock: 25,
      },
      {
        name: '☕ Kofe Latte',
        description: 'Issiq kofe sutli',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
        category: 'Ichimlik',
        stock: 50,
      },
      {
        name: '🧃 Fresh Juice',
        description: 'Yangi siqilgan meva sharbati',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
        category: 'Ichimlik',
        stock: 30,
      },
      {
        name: '🍰 Tort',
        description: 'Shokoladli tort',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
        category: 'Shirinlik',
        stock: 10,
      },
    ];

    demoProducts.forEach(product => {
      ProductModel.create(product);
    });

    console.log('✅ Demo mahsulotlar qo\'shildi!');
  }
};
