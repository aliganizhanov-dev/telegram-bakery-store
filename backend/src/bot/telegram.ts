import TelegramBot from 'node-telegram-bot-api';
import { ProductModel } from '../models/Product';
import { OrderModel } from '../models/Order';

export class TelegramBotHandler {
  private bot: TelegramBot;
  private webAppUrl: string;
  private adminId: string;

  constructor(token: string, webAppUrl: string, adminId: string) {
    this.bot = new TelegramBot(token, { polling: true });
    this.webAppUrl = webAppUrl;
    this.adminId = adminId;
    this.setupHandlers();
  }

  private setupHandlers() {
    // /start komandasi
    this.bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      const firstName = msg.from?.first_name || 'Do\'kon mijozi';

      const keyboard = {
        inline_keyboard: [
          [
            {
              text: '🛍 Do\'konni ochish',
              web_app: { url: this.webAppUrl }
            }
          ],
          [
            { text: '📦 Mening buyurtmalarim', callback_data: 'my_orders' }
          ]
        ]
      };

      // Admin uchun qo'shimcha tugma
      if (msg.from?.id.toString() === this.adminId) {
        keyboard.inline_keyboard.push([
          { text: '⚙️ Admin Panel', callback_data: 'admin_panel' }
        ]);
      }

      this.bot.sendMessage(
        chatId,
        `Assalomu aleykum, ${firstName}! 👋\n\n` +
        `🛍 Bizning do'konimizga xush kelibsiz!\n\n` +
        `Mahsulotlarni ko'rish va buyurtma berish uchun tugmani bosing:`,
        { reply_markup: keyboard }
      );
    });

    // Callback query handler
    this.bot.on('callback_query', async (query) => {
      const chatId = query.message?.chat.id;
      if (!chatId) return;

      switch (query.data) {
        case 'my_orders':
          await this.handleMyOrders(chatId, query.from.id);
          break;
        case 'admin_panel':
          await this.handleAdminPanel(chatId, query.from.id);
          break;
        default:
          if (query.data?.startsWith('order_')) {
            await this.handleOrderDetails(chatId, query.data.replace('order_', ''));
          }
      }

      this.bot.answerCallbackQuery(query.id);
    });

    // Web App dan kelgan ma'lumotlar
    this.bot.on('message', async (msg) => {
      if (msg.web_app_data) {
        await this.handleWebAppData(msg);
      }
    });

    console.log('✅ Telegram bot ishga tushdi!');
  }

  private async handleMyOrders(chatId: number, userId: number) {
    const orders = OrderModel.getByUserId(userId);

    if (orders.length === 0) {
      this.bot.sendMessage(chatId, '📦 Sizda hali buyurtmalar yo\'q.');
      return;
    }

    const keyboard = {
      inline_keyboard: orders.slice(0, 10).map(order => [{
        text: `№${order.id.slice(0, 8)} - ${order.status} - ${order.total_price} so'm`,
        callback_data: `order_${order.id}`
      }])
    };

    this.bot.sendMessage(
      chatId,
      `📦 Sizning buyurtmalaringiz (${orders.length} ta):`,
      { reply_markup: keyboard }
    );
  }

  private async handleOrderDetails(chatId: number, orderId: string) {
    const order = OrderModel.getById(orderId);

    if (!order) {
      this.bot.sendMessage(chatId, '❌ Buyurtma topilmadi.');
      return;
    }

    const statusEmoji = {
      pending: '⏳',
      confirmed: '✅',
      delivered: '🎉',
      cancelled: '❌'
    };

    const itemsList = order.items
      .map(item => `• ${item.product_name} x${item.quantity} - ${item.price * item.quantity} so'm`)
      .join('\n');

    const message = 
      `📦 Buyurtma: #${order.id.slice(0, 8)}\n\n` +
      `${statusEmoji[order.status]} Status: ${order.status}\n\n` +
      `🛍 Mahsulotlar:\n${itemsList}\n\n` +
      `💰 Jami: ${order.total_price} so'm\n` +
      `📍 Manzil: ${order.delivery_address || 'Ko\'rsatilmagan'}\n` +
      `📞 Telefon: ${order.phone || 'Ko\'rsatilmagan'}\n` +
      `📅 Sana: ${order.created_at}`;

    this.bot.sendMessage(chatId, message);
  }

  private async handleAdminPanel(chatId: number, userId: number) {
    if (userId.toString() !== this.adminId) {
      this.bot.sendMessage(chatId, '❌ Sizda admin huquqi yo\'q.');
      return;
    }

    const orders = OrderModel.getAll();
    const products = ProductModel.getAll();
    const pendingOrders = orders.filter(o => o.status === 'pending').length;

    const keyboard = {
      inline_keyboard: [
        [
          {
            text: '➕ Mahsulot qo\'shish',
            web_app: { url: `${this.webAppUrl}/admin` }
          }
        ],
        [
          { text: `📦 Buyurtmalar (${orders.length})`, callback_data: 'admin_orders' }
        ]
      ]
    };

    this.bot.sendMessage(
      chatId,
      `⚙️ Admin Panel\n\n` +
      `📦 Jami buyurtmalar: ${orders.length}\n` +
      `⏳ Kutilayotgan: ${pendingOrders}\n` +
      `🛍 Mahsulotlar: ${products.length}\n`,
      { reply_markup: keyboard }
    );
  }

  private async handleWebAppData(msg: TelegramBot.Message) {
    const chatId = msg.chat.id;
    const data = JSON.parse(msg.web_app_data?.data || '{}');

    if (data.type === 'order') {
      // Buyurtma tasdiqlandi
      this.bot.sendMessage(
        chatId,
        `✅ Buyurtma qabul qilindi!\n\n` +
        `📦 Buyurtma raqami: #${data.orderId.slice(0, 8)}\n` +
        `💰 Jami: ${data.totalPrice} so'm\n\n` +
        `Tez orada siz bilan bog'lanamiz! 📞`
      );

      // Adminga xabar
      if (this.adminId) {
        this.bot.sendMessage(
          parseInt(this.adminId),
          `🔔 Yangi buyurtma!\n\n` +
          `👤 Mijoz: @${msg.from?.username || 'username yo\'q'}\n` +
          `💰 Summa: ${data.totalPrice} so'm`
        );
      }
    }
  }

  getBot() {
    return this.bot;
  }
}
