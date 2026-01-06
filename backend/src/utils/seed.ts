import { ProductModel } from '../models/Product';

export const seedDatabase = () => {
  const products = ProductModel.getAll();
  
  // Agar mahsulotlar bo'lmasa, demo ma'lumotlar qo'shamiz
  if (products.length === 0) {
    const demoProducts = [
      {
        name: '🍞 Oq Non',
        description: 'Yangi pishgan yumshoq oq non, kundalik ovqat uchun ideal',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
        category: 'Non mahsulotlari',
        stock: 50,
      },
      {
        name: '🥖 Frantsuz Bulkasi',
        description: 'Qattiq po\'stloqli, ichki qismi yumshoq frantsuz bulkasi',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400',
        category: 'Non mahsulotlari',
        stock: 30,
      },
      {
        name: '🥐 Kruassant',
        description: 'Frantsuz uslubidagi sariyog\'li, qatlamli kruassant',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
        category: 'Pishiriqlar',
        stock: 25,
      },
      {
        name: '🍪 Shokoladli Pechenye',
        description: 'Shokolad chiplari bilan shirinroq, xushbo\'y pechenye',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
        category: 'Pishiriqlar',
        stock: 40,
      },
      {
        name: '🧁 Kapkeyk',
        description: 'Kremli, rangli kapkeyk - bolalar uchun ajoyib tanlov',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400',
        category: 'Shirinliklar',
        stock: 30,
      },
      {
        name: '🍰 Shokoladli Tort',
        description: 'Yumshoq shokoladli biskvit va qaymoqli krem bilan, maxsus tadbirlar uchun',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
        category: 'Tortlar',
        stock: 10,
      },
    ];

    demoProducts.forEach(product => {
      ProductModel.create(product);
    });

    console.log('✅ Demo mahsulotlar qo\'shildi!');
  }
};
