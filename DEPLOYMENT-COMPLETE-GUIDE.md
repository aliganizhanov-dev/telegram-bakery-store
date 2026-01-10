# Complete Deployment Guide

This guide will walk you through deploying your Telegram Store to production.

## 🚀 Quick Deployment (Automated)

Run this script and follow the prompts:

```bash
cd ~/telegram-store
./deploy-to-github.sh
```

The script will:
1. Authenticate with GitHub
2. Create a new repository
3. Push your code
4. Show you the next steps for Render.com

---

## 📋 Manual Deployment Steps

If you prefer to do it manually, follow these steps:

### Step 1: Authenticate with GitHub CLI

```bash
cd ~/telegram-store
gh auth login
```

Choose:
- Account: GitHub.com
- Protocol: HTTPS (recommended)
- Authenticate: Follow the browser prompt

### Step 2: Create GitHub Repository

```bash
# Create public repository
gh repo create telegram-bakery-store --public --source=. --remote=origin

# OR create private repository
gh repo create telegram-bakery-store --private --source=. --remote=origin
```

### Step 3: Push Code to GitHub

```bash
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Render.com

1. **Sign up/Login to Render.com**
   - Go to https://render.com
   - Sign up with your GitHub account (recommended)

2. **Create New Blueprint**
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will detect `render.yaml` automatically

3. **Configure Environment Variables**
   
   For the **backend** service, add these environment variables:
   ```
   TELEGRAM_BOT_TOKEN=8386187963:AAGuxwEQxu9b_BtVuBQXF7MnQgHlweVKsMI
   ADMIN_TELEGRAM_ID=8566832958
   NODE_ENV=production
   ```

4. **Update Frontend URL**
   
   After backend deploys, you'll get a URL like:
   `https://telegram-store-backend-xxxxx.onrender.com`
   
   Update frontend API URL if needed (already configured).

5. **Update Web App URL**
   
   After frontend deploys, you'll get a URL like:
   `https://telegram-store-frontend-xxxxx.onrender.com`
   
   Update the `WEB_APP_URL` environment variable in the backend service.

6. **Wait for Deployment**
   - Backend: ~5-10 minutes
   - Frontend: ~2-5 minutes

### Step 5: Configure Telegram Bot

Once both services are deployed:

1. **Set Bot Menu Button**
   
   Go to BotFather in Telegram:
   ```
   /setmenubutton
   @Zakaz_pishiriqlar_bot
   URL: <your-frontend-url>
   Text: 🛍 Open Store
   ```

2. **Test Your Bot**
   - Open Telegram
   - Search for @Zakaz_pishiriqlar_bot
   - Click the menu button
   - Your store should open!

---

## 🔧 Alternative: Manual GitHub Repository Creation

If you prefer to use the GitHub website:

1. Go to https://github.com/new

2. Fill in:
   - Repository name: `telegram-bakery-store`
   - Description: "Telegram Web App Store for food orders"
   - Public/Private: Choose based on your preference
   - **Do NOT** initialize with README

3. Click "Create repository"

4. Run these commands:
   ```bash
   cd ~/telegram-store
   
   # Update remote URL (replace YOUR_USERNAME)
   git remote set-url origin https://github.com/YOUR_USERNAME/telegram-bakery-store.git
   
   # Push code
   git branch -M main
   git push -u origin main
   ```

---

## 📱 Testing Your Deployed App

### Test Backend API

```bash
# Get products
curl https://your-backend-url.onrender.com/api/products

# Health check
curl https://your-backend-url.onrender.com/api/health
```

### Test Frontend

Open in browser:
```
https://your-frontend-url.onrender.com
```

### Test Telegram Bot

1. Open Telegram
2. Search for: @Zakaz_pishiriqlar_bot
3. Send: /start
4. Click: "🛍 Open Store" button
5. Browse products and add to cart
6. Click "💳 Checkout" to place order
7. Bot should confirm your order!

---

## 🐛 Troubleshooting

### Bot Not Responding

1. Check backend logs in Render dashboard
2. Verify TELEGRAM_BOT_TOKEN is correct
3. Ensure bot is not running locally (stop local server)

### Web App Not Loading

1. Check frontend deployment status
2. Verify backend API URL in frontend config
3. Check browser console for errors

### Orders Not Working

1. Check data directory exists and is writable
2. Verify backend API routes are working
3. Check Render logs for errors

### Render.com Free Tier Notes

- Services spin down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Consider upgrading to paid plan for production use

---

## 🔐 Security Notes

### Environment Variables

Never commit these to GitHub:
- `TELEGRAM_BOT_TOKEN`
- `ADMIN_TELEGRAM_ID`

Always set them in Render dashboard.

### Database

Current setup uses JSON files. For production:
- Consider PostgreSQL (Render offers free tier)
- Or use a hosted database service

---

## 📊 Monitoring

### Render Dashboard

Monitor:
- Service status
- Logs
- Metrics (CPU, memory)
- Deploy history

### Telegram Bot

Monitor:
- Bot response time
- Error messages
- Order completion rate

---

## 🚀 Next Steps

After successful deployment:

1. **Custom Domain** (Optional)
   - Connect your own domain in Render
   - Update bot menu button URL

2. **Database Upgrade** (Recommended)
   - Migrate from JSON to PostgreSQL
   - Better data persistence and performance

3. **Payment Integration**
   - Add payment providers (Stripe, PayPal, etc.)
   - Or use Telegram Payments API

4. **Analytics**
   - Add Google Analytics
   - Track user behavior and sales

5. **Admin Panel**
   - Enhance admin features
   - Add product management UI
   - Order tracking dashboard

---

## 📞 Need Help?

If you encounter issues:

1. Check Render logs
2. Review error messages
3. Verify environment variables
4. Test API endpoints manually

---

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Render.com account created
- [ ] Backend deployed
- [ ] Frontend deployed
- [ ] Environment variables set
- [ ] WEB_APP_URL updated
- [ ] Bot menu button configured
- [ ] Tested in Telegram
- [ ] Orders working
- [ ] Admin panel accessible

---

**Your Bot Token:** `8386187963:AAGuxwEQxu9b_BtVuBQXF7MnQgHlweVKsMI`  
**Your Admin ID:** `8566832958`  
**Bot Username:** @Zakaz_pishiriqlar_bot

Good luck with your deployment! 🎉
