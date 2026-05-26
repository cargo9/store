# 🚀 Deployment Guide

This guide will help you deploy GoMerch Store to production.

## 📋 Overview

We'll deploy to:
- **Railway** - Backend API + PostgreSQL Database
- **Vercel** - Frontend React App

Total time: ~15 minutes

---

## 🚂 Part 1: Deploy Backend to Railway

### Step 1: Create Railway Account

1. Go to https://railway.app
2. Click "Start a New Project"
3. Sign up with GitHub (recommended)

### Step 2: Create New Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `GoMerchStore` repository
4. Railway will detect it's a Node.js project

### Step 3: Add PostgreSQL Database

1. In your Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will create a database automatically
4. **Important:** Copy the connection details (we'll need them)

### Step 4: Configure Environment Variables

1. Click on your backend service
2. Go to "Variables" tab
3. Add these variables:

```
NODE_ENV=production
PORT=5000
JWT_SECRET=your_random_secret_string_here_make_it_long_and_random

# Database (Railway provides these automatically)
DATABASE_URL=${{Postgres.DATABASE_URL}}
DB_HOST=${{Postgres.PGHOST}}
DB_PORT=${{Postgres.PGPORT}}
DB_NAME=${{Postgres.PGDATABASE}}
DB_USER=${{Postgres.PGUSER}}
DB_PASSWORD=${{Postgres.PGPASSWORD}}

# Frontend URL (we'll update this after deploying frontend)
FRONTEND_URL=*
```

**Generate JWT_SECRET:**
```bash
# Run this in terminal to generate a random secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Configure Root Directory

1. In Railway service settings
2. Find "Root Directory"
3. Set it to: `server`
4. This tells Railway where your backend code is

### Step 6: Deploy

1. Railway will automatically deploy
2. Wait for deployment to complete (~2-3 minutes)
3. You'll get a URL like: `https://your-app.railway.app`
4. **Save this URL!** You'll need it for the frontend

### Step 7: Test Backend

Open your Railway URL in browser:
```
https://your-app.railway.app/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

✅ **Backend is live!**

---

## ⚡ Part 2: Deploy Frontend to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended)

### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Import your `GoMerchStore` repository
3. Vercel will detect it's a React app

### Step 3: Configure Build Settings

**Framework Preset:** Create React App

**Build Command:**
```
npm run build
```

**Output Directory:**
```
build
```

**Install Command:**
```
npm install
```

### Step 4: Add Environment Variable

Click "Environment Variables" and add:

```
REACT_APP_API_URL=https://your-app.railway.app/api
```

⚠️ **Replace** `your-app.railway.app` with your actual Railway URL from Part 1!

### Step 5: Deploy

1. Click "Deploy"
2. Wait for deployment (~2-3 minutes)
3. You'll get a URL like: `https://your-app.vercel.app`

---

## 🔗 Part 3: Connect Frontend and Backend

### Update Backend CORS

1. Go back to Railway
2. Open your backend service
3. Go to "Variables"
4. Update `FRONTEND_URL`:

```
FRONTEND_URL=https://your-app.vercel.app
```

⚠️ **Replace** with your actual Vercel URL!

5. Railway will automatically redeploy

### Update Frontend API URL

1. Go to your GitHub repository
2. Edit `src/api/auth.js`
3. Change line 1:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

4. Commit and push:

```bash
git add src/api/auth.js
git commit -m "Update API URL for production"
git push
```

5. Vercel will automatically redeploy

---

## 🎉 Done! Test Your Live Site

1. Open your Vercel URL: `https://your-app.vercel.app`
2. Click "Login" → "Register"
3. Create an account
4. Try adding items to cart
5. Test search functionality

Everything should work! 🚀

---

## 🐛 Troubleshooting

### Backend Issues

**"Application failed to respond"**
- Check Railway logs: Service → Deployments → View Logs
- Make sure `ROOT_DIRECTORY` is set to `server`
- Verify all environment variables are set

**"Database connection failed"**
- Make sure PostgreSQL service is running
- Check database variables are correctly linked
- Railway should auto-link them with `${{Postgres.VARIABLE}}`

**"CORS error"**
- Make sure `FRONTEND_URL` in Railway matches your Vercel URL exactly
- No trailing slash in URL

### Frontend Issues

**"Failed to fetch" or "Network error"**
- Check `REACT_APP_API_URL` is set correctly in Vercel
- Make sure Railway backend is running
- Test backend URL directly: `https://your-backend.railway.app/api/health`

**"Blank page"**
- Check Vercel build logs for errors
- Make sure build completed successfully
- Check browser console for errors (F12)

**Environment variable not working**
- Environment variables in React must start with `REACT_APP_`
- Redeploy after adding variables
- Clear browser cache

---

## 💰 Pricing

### Railway
- **Free tier:** $5 credit/month
- Enough for small projects
- Upgrade if you need more

### Vercel
- **Free tier:** Unlimited for personal projects
- 100GB bandwidth/month
- Perfect for this project

---

## 🔄 Updating Your Site

### Update Backend
1. Make changes locally
2. Commit and push to GitHub
3. Railway auto-deploys

### Update Frontend
1. Make changes locally
2. Commit and push to GitHub
3. Vercel auto-deploys

Both platforms have **automatic deployments** from GitHub!

---

## 📊 Monitoring

### Railway
- View logs: Service → Deployments → Logs
- Monitor usage: Project → Usage
- Check database: PostgreSQL service → Data

### Vercel
- View deployments: Project → Deployments
- Check analytics: Project → Analytics
- View logs: Deployment → Function Logs

---

## 🔐 Security Checklist

- [x] `.env` files not in GitHub
- [x] JWT_SECRET is random and secure
- [x] Database password is secure (Railway generates it)
- [x] CORS is configured correctly
- [x] HTTPS enabled (automatic on Railway & Vercel)

---

## 🎯 Next Steps

After deployment, consider:
- [ ] Add custom domain
- [ ] Set up monitoring/alerts
- [ ] Add Google OAuth
- [ ] Implement payment system
- [ ] Add email notifications
- [ ] Set up CI/CD tests

---

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- Create an issue on GitHub

---

**Congratulations! Your site is live! 🎉**
