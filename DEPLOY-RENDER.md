# 🚀 RENDER.COM GA DEPLOY - QADAMMA-QADDAM

## ✅ SIZ HOZIR BU BOSQICHADASIZ:

Loyiha tayyor va commit qilingan! Endi uni internetga chiqaramiz.

---

## 📋 1. GITHUB REPOSITORY YARATISH

### Variant A: GitHub Web orqali (Oson)

1. **GitHub.com** ga kiring: https://github.com
2. Yuqoridagi **"+"** belgisini bosing
3. **"New repository"** ni tanlang
4. Repository nomi: `telegram-bakery-store`
5. **Public** ni tanlang (yoki Private)
6. **"Create repository"** ni bosing

### Repository yaratilgach:

Terminalda quyidagilarni bajaring:

```bash
cd ~/telegram-store

# GitHub repository manzilini qo'shing (URL ni o'zingizniki bilan almashtiring)
git remote add origin https://github.com/SIZNING_USERNAME/telegram-bakery-store.git

# Kodni GitHub ga yuklash
git branch -M main
git push -u origin main
```

**ESLATMA:** GitHub parol o'rniga **Personal Access Token** so'rashi mumkin.

---

## 📋 2. RENDER.COM GA RO'YXATDAN O'TISH

1. **https://render.com** ga o'ting
2. **"Get Started"** ni bosing
3. **"Sign up with GitHub"** ni tanlang
4. GitHub akkauntingiz bilan kiring
5. Render.com ga ruxsat bering

---

## 📋 3. BACKEND NI DEPLOY QILISH

1. Render.com dashboardda **"New +"** tugmasini bosing
2. **"Web Service"** ni tanlang
3. **"Connect a repository"** - GitHub repository ni tanlang
4. Sozlamalar:

```
Name: telegram-store-backend
Region: Frankfurt
Branch: main
Root Directory: backend
Build Command: npm install && npm run build
Start Command: npm start
```

5. **Environment Variables** qo'shing:

```
TELEGRAM_BOT_TOKEN = 8386187963:AAGuxwEQxu9b_BtVuBQXF7MnQgHlweVKsMI
ADMIN_TELEGRAM_ID = 8566832958
PORT = 3000
WEB_APP_URL = https://telegram-store-frontend.onrender.com
```

6. **"Create Web Service"** ni bosing
7. ⏳ Deploy jarayoni 5-10 daqiqa davom etadi

---

## 📋 4. FRONTEND NI DEPLOY QILISH

1. Render.com dashboardda yana **"New +"** tugmasini bosing
2. **"Static Site"** ni tanlang
3. O'sha repository ni tanlang
4. Sozlamalar:

```
Name: telegram-store-frontend
Branch: main
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: dist
```

5. **Environment Variables** (ixtiyoriy):

```
VITE_API_URL = https://telegram-store-backend.onrender.com/api
```

6. **"Create Static Site"** ni bosing
7. ⏳ Deploy jarayoni 5 daqiqa

---

## 📋 5. BACKEND ENVIRONMENT VARIABLES NI YANGILASH

Frontend deploy bo'lgach, URL olasiz. Keyin:

1. Render.com da **Backend service** ga o'ting
2. **"Environment"** tabni oching
3. **WEB_APP_URL** ni yangilang:
```
WEB_APP_URL = https://telegram-store-frontend.onrender.com
```
(O'zingizning frontend URL ni qo'ying)

4. **"Save Changes"** ni bosing
5. Backend avtomatik qayta deploy bo'ladi

---

## 📋 6. BOTFATHER DA URL YANGILASH

Endi botga doimiy URL qo'yishingiz mumkin:

1. @BotFather ga o'ting
2. `/mybots` → Zakaz_pishiriqlar_bot
3. **Edit Bot** → **Menu Button**
4. **Configure Menu Button** → **Edit Menu Button URL**
5. URL kiriting:
```
https://telegram-store-frontend.onrender.com
```

---

## 🎉 TAYYOR!

Endi botingiz 24/7 ishlaydi!

---

## 🔧 MUAMMOLAR?

### Backend deploy xatosi:
- Environment variables to'g'ri kiritilganini tekshiring
- Build logs ni ko'ring

### Frontend ochilmaydi:
- Build Command to'g'riligini tekshiring: `npm install && npm run build`
- Publish Directory: `dist`

### Bot javob bermaydi:
- Backend Environment da TELEGRAM_BOT_TOKEN to'g'riligini tekshiring
- Backend logs ni ko'ring

---

## 📞 YORDAM KERAKMI?

Qaysi bosqichda tiqildingiz? Menga xabar bering! 😊

---

## 💡 QISQACHA:

1. ✅ GitHub repository yarating
2. ✅ Kodni push qiling
3. ✅ Render.com ga ro'yxatdan o'ting
4. ✅ Backend deploy qiling (Environment variables bilan)
5. ✅ Frontend deploy qiling
6. ✅ BotFather da URL yangilang
7. 🎉 Test qiling!

**Omad!** 🚀
