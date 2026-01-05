# 🎯 TELEGRAM BOT - TEZKOR BOSHLASH

## 📋 Sizga kerak bo'ladi:

1. ✅ Bot Token (BotFather dan)
2. ✅ Telegram ID (userinfobot dan)
3. ✅ Internet
4. ✅ Node.js (o'rnatilgan ✓)

---

## 🚀 3 DAQIQADA ISHGA TUSHIRISH

### Variant 1: AVTOMATIK (ENG OSON)

```bash
cd ~/telegram-store
./start.sh
```

Script sizdan so'raydi:
1. Bot Token
2. Telegram ID

Keyin avtomatik ishga tushadi! 🎉

---

### Variant 2: QOʻLDA

**1-qadam: Token qoʻshish**
```bash
cd ~/telegram-store/backend
nano .env
```

Quyidagilarni yozing:
```env
TELEGRAM_BOT_TOKEN=sizning_tokeningiz
ADMIN_TELEGRAM_ID=sizning_id
PORT=3000
WEB_APP_URL=http://localhost:5173
```

**2-qadam: Backend ishga tushirish**
```bash
cd ~/telegram-store/backend
npm run dev
```

**3-qadam: Yangi terminal ochib, Frontend ishga tushirish**
```bash
cd ~/telegram-store/frontend
npm run dev
```

---

## 📱 BOTNI SOZLASH

### BotFather da:

1. `/mybots` → o'z botingizni tanlang
2. **Bot Settings**
3. **Menu Button**
4. **Configure Menu Button**
5. **Edit Menu Button URL**
6. URL kiriting: `http://localhost:5173`

---

## ✅ TEKSHIRISH

Telegram da:
1. Botni oching
2. `/start` bosing
3. Pastda "☰ Menu" tugmasi paydo bo'ladi
4. Yoki "🛍 Do'konni ochish" tugmasini bosing

Web App ochilsa - **MUVAFFAQIYAT!** 🎉

---

## 🆘 YORDAM KERAKMI?

### Agar bot javob bermasa:

1. Backend terminal tekshiring - xato bormi?
2. `.env` faylda token to'g'rimi?
3. BotFather da token faolmi?

### Agar Web App ochilmasa:

1. Frontend terminal tekshiring
2. BotFather da Menu Button URL to'g'rimi?
3. Backend ishlaganini tekshiring

### Agar mahsulotlar ko'rinmasa:

Backend terminal da quyidagi yozuv bo'lishi kerak:
```
✅ Demo mahsulotlar qo'shildi!
```

---

## 📞 QOʻSHIMCHA YORDAM

Barcha qoʻllanmalar:
- `BOT-SETUP-GUIDE.md` - Bot yaratish
- `HOSTING-GUIDE.md` - Botni internetga chiqarish
- `README.md` - Umumiy maʼlumot

---

## 🎓 BIRINCHI MARTA BOT YASAYAPSIZMI?

**Men sizni qadamma-qaddam olib borishim mumkin! Faqat:**

1. BotFather dan token oling
2. `./start.sh` ni ishga tushiring
3. Telegramda botni sinab ko'ring

**Hammasi! Oson!** 😊

---

## 💡 KEYINGI QADAMLAR

Bot ishlay boshlangach:

1. ✅ Admin panel orqali mahsulot qo'shing
2. ✅ Do'stlaringizga ko'rsating
3. ✅ Buyurtma qabul qiling
4. ✅ Kerak bo'lsa, Render.com ga deploy qiling (BEPUL)

---

## 🎉 OMAD!

Agar savollar bo'lsa, so'rang! Men yordam beraman. 🚀
