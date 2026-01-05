#!/bin/bash

# Deployment script for Telegram Store
# This script will authenticate with GitHub, create a repository, and push the code

echo "==================================="
echo "Telegram Store - GitHub Deployment"
echo "==================================="
echo ""

# Step 1: Authenticate with GitHub
echo "Step 1: Authenticating with GitHub..."
echo "Please follow the prompts to authenticate."
echo ""

gh auth login

if [ $? -ne 0 ]; then
    echo "❌ Authentication failed. Please try again."
    exit 1
fi

echo ""
echo "✅ Authentication successful!"
echo ""

# Step 2: Get repository name
echo "Step 2: Repository Setup"
read -p "Enter repository name (default: telegram-bakery-store): " REPO_NAME
REPO_NAME=${REPO_NAME:-telegram-bakery-store}

read -p "Make repository public? (y/n, default: y): " IS_PUBLIC
IS_PUBLIC=${IS_PUBLIC:-y}

if [ "$IS_PUBLIC" = "y" ]; then
    VISIBILITY="--public"
else
    VISIBILITY="--private"
fi

# Step 3: Create GitHub repository
echo ""
echo "Step 3: Creating GitHub repository..."
gh repo create "$REPO_NAME" $VISIBILITY --source=. --remote=origin

if [ $? -ne 0 ]; then
    echo "❌ Failed to create repository."
    exit 1
fi

echo ""
echo "✅ Repository created!"
echo ""

# Step 4: Push code
echo "Step 4: Pushing code to GitHub..."
git branch -M main
git push -u origin main

if [ $? -ne 0 ]; then
    echo "❌ Failed to push code."
    exit 1
fi

echo ""
echo "✅ Code pushed successfully!"
echo ""

# Get repository URL
REPO_URL=$(gh repo view --json url -q .url)

echo "==================================="
echo "✅ GitHub Setup Complete!"
echo "==================================="
echo ""
echo "Repository URL: $REPO_URL"
echo ""
echo "Next Steps:"
echo "1. Go to Render.com: https://render.com"
echo "2. Sign up/login (use GitHub account)"
echo "3. Click 'New +' → 'Blueprint'"
echo "4. Connect your repository: $REPO_URL"
echo "5. Render will automatically detect render.yaml and deploy both services"
echo ""
echo "Don't forget to set these environment variables in Render dashboard:"
echo "  - TELEGRAM_BOT_TOKEN=8566832958:AAGc7iNYASz5ulOHR9N4ONdFuLS3ASGbn5s"
echo "  - ADMIN_TELEGRAM_ID=8566832958"
echo "  - WEB_APP_URL=<your-frontend-url-from-render>"
echo ""
