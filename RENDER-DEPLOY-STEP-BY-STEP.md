# Render.com - Oddiy Deploy Qo'llanma

Blueprint ishlamayapti. Shuning uchun har bir service'ni alohida deploy qilamiz.

---

## 🎯 1-QADAM: BACKEND DEPLOY QILISH

### A) Backend Service yaratish

1. **Render.com**'ga kiring: https://dashboard.render.com
2. Dashboard'da **"New +"** tugmasini bosing
3. **"Web Service"** ni tanlang (Blueprint EMAS!)
4. **"Build and deploy from a Git repository"** → **Next**
5. GitHub repository'ni ulang:
   - Repository: `aliganizhanov-dev/telegram-bakery-store`
   - **"Connect"** tugmasini bosing

### B) Backend Sozlamalar

Quyidagi maydonlarni to'ldiring:

```
Name: telegram-store-backend
Region: Frankfurt (yoki Oregon)
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm start
Instance Type: Free
```

### C) Environment Variables

**"Advanced"** yoki **"Environment"** bo'limida qo'shing:

```
TELEGRAM_BOT_TOKEN = 8566832958:AAGc7iNYASz5ulOHR9N4ONdFuLS3ASGbn5s
ADMIN_TELEGRAM_ID = 8566832958
NODE_ENV = production
PORT = 3000
```

**"Create Web Service"** tugmasini bosing.

### D) Deploy tugashini kutish

- 5-10 daqiqa kutish
- Deploy tugagach URL oling: `https://telegram-store-backend-xxxx.onrender.com`

### E) Tekshirish

Brauzerda oching:
```
https://telegram-store-backend-xxxx.onrender.com/api/products
```

Mahsulotlar ro'yxati ko'rinishi kerak.

---

## 🎯 2-QADAM: FRONTEND DEPLOY QILISH

### A) Frontend API URL'ini yangilash

Avval frontend'ni backend URL'iga ulaymiz:

1. Backend URL'ingizni nusxalang (masalan: `https://telegram-store-backend-xxxx.onrender.com`)
2. Terminal'da:

```bash
cd ~/telegram-store/frontend/src/api
```

API URL'ini yangilaymiz (men yordam beraman, pastda buyruq bor).

### B) Frontend Service yaratish

1. **Render.com Dashboard**'ga qayting
2. **"New +"** → **"Static Site"** ni tanlang
3. Repository: `aliganizhanov-dev/telegram-bakery-store`
4. **"Connect"**

### C) Frontend Sozlamalar

```
Name: telegram-store-frontend
Region: Frankfurt (yoki Oregon)
Branch: main
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: dist
```

**"Create Static Site"** tugmasini bosing.

### D) Deploy tugashini kutish

- 2-5 daqiqa kutish
- Deploy tugagach URL oling: `https://telegram-store-frontend-xxxx.onrender.com`

---

## 🎯 3-QADAM: WEB_APP_URL YANGILASH

Frontend URL'ini backend'ga qo'shamiz:

1. **Backend service**'ga o'ting
2. **"Environment"** bo'limiga o'ting
3. Yangi variable qo'shing yoki WEB_APP_URL'ni yangilang:
   ```
   WEB_APP_URL = https://telegram-store-frontend-xxxx.onrender.com
   ```
4. **"Save Changes"** → Backend avtomatik qayta ishga tushadi

---

## 🎯 4-QADAM: TELEGRAM BOT'NI SOZLASH

### A) BotFather'da sozlash

1. Telegram'da **@BotFather** ni oching
2. Buyruqlar yuboring:

```
/setmenubutton
```

3. Bot'ingizni tanlang: **@Zakaz_pishiriqlar_bot**
4. **URL** kiriting: `https://telegram-store-frontend-xxxx.onrender.com`
5. **Button text** kiriting: `🛍 Open Store`

### B) Test qilish

1. Telegram'da `@Zakaz_pishiriqlar_bot` ni oching
2. `/start` yuboring
3. **"🛍 Open Store"** tugmasini bosing
4. **Magazin ochiladi!** 🎉

---

## 🐛 MUAMMOLAR VA YECHIMLAR

### Muammo 1: Backend deploy bo'lmayapti

**Yechim:**
- Root Directory: `backend` ekanligini tekshiring
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

### Muammo 2: Frontend bo'sh ochilyapti

**Yechim:**
- API URL to'g'ri ekanligini tekshiring
- Browser Console'da error bormi? (F12 bosing)
- Backend ishlayaptimi? API URL'ini brauzerda oching

### Muammo 3: Bot javob bermayapti

**Yechim:**
- Backend loglarini tekshiring (Render dashboard)
- TELEGRAM_BOT_TOKEN to'g'rimi?
- Bot ikki joyda ishlamayotganligiga ishonch hosil qiling (local'da to'xtating)

### Muammo 4: CORS xatolik

**Yechim:**
Backend'da CORS allaqachon sozlangan, lekin agar muammo bo'lsa:
- Backend Environment'ga qo'shing: `FRONTEND_URL=https://your-frontend.onrender.com`

---

## 📞 YORDAM

Agar muammo yuz bersa:

1. **Backend logs** ni tekshiring (Render dashboard → Backend service → Logs)
2. **Frontend logs** ni tekshiring
3. **Browser console** ni tekshiring (F12)
4. Menga screenshot yoki error message yuboring

---

## ✅ SUCCESS CHECKLIST

- [ ] Backend deploy bo'ldi
- [ ] Backend API ishlayapti (`/api/products` ochildi)
- [ ] Frontend deploy bo'ldi
- [ ] Frontend ochildi va mahsulotlar ko'rinyapti
- [ ] WEB_APP_URL yangilandi
- [ ] Bot menu button sozlandi
- [ ] Telegram'da bot ishlayapti
- [ ] Buyurtma berish mumkin

---

**Endi birinchi qadam: Backend deploy qilish!**

Render.com'ga kiring va yuqoridagi **1-QADAM**ni bajaring! 🚀
