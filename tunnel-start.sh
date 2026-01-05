#!/bin/bash

echo "🚀 TELEGRAM BOT - HTTPS TUNNEL"
echo "=============================="
echo ""

# Frontend uchun tunnel (port 5173)
echo "📡 HTTPS tunnel ochilmoqda..."
echo ""

# Serveo.net orqali tunnel
ssh -o StrictHostKeyChecking=no -R 80:localhost:5173 serveo.net > /tmp/tunnel.log 2>&1 &

# Bir oz kutamiz
sleep 5

# URL ni olish
TUNNEL_URL=$(grep -o 'https://[^ ]*' /tmp/tunnel.log | head -1)

if [ -z "$TUNNEL_URL" ]; then
    echo "❌ Tunnel ochilmadi!"
    echo ""
    echo "🔧 Boshqa usul - ngrok kerak:"
    echo "   sudo apt install ngrok"
    echo "   ngrok http 5173"
    exit 1
fi

echo "✅ HTTPS URL olindi:"
echo ""
echo "   $TUNNEL_URL"
echo ""

# .env faylni yangilash
cd ~/telegram-store/backend
sed -i "s|WEB_APP_URL=.*|WEB_APP_URL=$TUNNEL_URL|" .env

echo "✅ .env yangilandi!"
echo ""
echo "🔄 Backendni qayta ishga tushirish kerak:"
echo ""
echo "   cd ~/telegram-store/backend"
echo "   npm run dev"
echo ""
echo "📱 Keyin Telegram botni sinang!"
echo ""
