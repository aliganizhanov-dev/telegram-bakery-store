import express, { Request, Response } from 'express';
import { ProductModel } from '../models/Product';
import { OrderModel } from '../models/Order';

const router = express.Router();

// ===== MAHSULOTLAR =====

// Barcha mahsulotlarni olish
router.get('/products', (req: Request, res: Response) => {
  try {
    const products = ProductModel.getAll();
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// ID bo'yicha mahsulot
router.get('/products/:id', (req: Request, res: Response) => {
  try {
    const product = ProductModel.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Mahsulot topilmadi' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Yangi mahsulot qo'shish (Admin)
router.post('/products', (req: Request, res: Response) => {
  try {
    const { name, description, price, image, category, stock } = req.body;

    if (!name || !price) {
      return res.status(400).json({ success: false, error: 'Name va price majburiy' });
    }

    const product = ProductModel.create({
      name,
      description,
      price: parseFloat(price),
      image,
      category,
      stock: parseInt(stock) || 0
    });

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Mahsulotni yangilash (Admin)
router.put('/products/:id', (req: Request, res: Response) => {
  try {
    const updated = ProductModel.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Mahsulot topilmadi' });
    }
    res.json({ success: true, message: 'Mahsulot yangilandi' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Mahsulotni o'chirish (Admin)
router.delete('/products/:id', (req: Request, res: Response) => {
  try {
    const deleted = ProductModel.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Mahsulot topilmadi' });
    }
    res.json({ success: true, message: 'Mahsulot o\'chirildi' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// ===== BUYURTMALAR =====

// Barcha buyurtmalarni olish
router.get('/orders', (req: Request, res: Response) => {
  try {
    const orders = OrderModel.getAll();
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Foydalanuvchi buyurtmalari
router.get('/orders/user/:userId', (req: Request, res: Response) => {
  try {
    const orders = OrderModel.getByUserId(parseInt(req.params.userId));
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Yangi buyurtma yaratish
router.post('/orders', (req: Request, res: Response) => {
  try {
    const { user_id, username, items, total_price, delivery_address, phone } = req.body;

    if (!user_id || !items || !total_price) {
      return res.status(400).json({ 
        success: false, 
        error: 'user_id, items va total_price majburiy' 
      });
    }

    const order = OrderModel.create({
      user_id,
      username,
      items,
      total_price,
      delivery_address,
      phone
    });

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

// Buyurtma statusini yangilash
router.patch('/orders/:id/status', (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const updated = OrderModel.updateStatus(req.params.id, status);
    
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Buyurtma topilmadi' });
    }
    
    res.json({ success: true, message: 'Status yangilandi' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server xatosi' });
  }
});

export default router;
