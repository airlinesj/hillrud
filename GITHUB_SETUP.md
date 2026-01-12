# 🔧 GitHub Terminal Commands Guide

## Step 1: Create GitHub Repository (Web Interface)

1. Go to [GitHub.com](https://github.com) → Sign in
2. Click **"+"** → **"New repository"**
3. Repository name: `anniversary-website`
4. Make it **Public**
5. **DO NOT** initialize with README (we have files)
6. Click **"Create repository"**
7. **Copy the repository URL** (like: `https://github.com/YOUR-USERNAME/anniversary-website.git`)

---

## Step 2: Terminal Commands

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
# 1. Navigate to your project folder
cd /home/julius/Desktop/Anniversary/parents-anniversary

# 2. Initialize git repository
git init

# 3. Add all your files
git add .

# 4. Make your first commit
git commit -m "Initial anniversary website upload"

# 5. Add the GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/anniversary-website.git

# 6. Set the main branch
git branch -M main

# 7. Push your code to GitHub
git push -u origin main
```

---

## Step 3: If You Get Authentication Errors

**Option A: Use Personal Access Token**
```bash
# Instead of your password, use your GitHub token
git remote set-url origin https://YOUR-USERNAME:YOUR-TOKEN@github.com/YOUR-USERNAME/anniversary-website.git
git push -u origin main
```

**Option B: Use SSH (if you have SSH keys set up)**
```bash
git remote set-url origin git@github.com:YOUR-USERNAME/anniversary-website.git
git push -u origin main
```

---

## Step 4: Create Personal Access Token (If Needed)

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. Click **"Generate new token (classic)"**
3. Select scopes: `repo` (full repository access)
4. Generate and copy the token
5. Use this token instead of your password

---

## Quick Copy-Paste Commands

```bash
# Replace YOUR-USERNAME with your GitHub username
cd /home/julius/Desktop/Anniversary/parents-anniversary
git init
git add .
git commit -m "Initial anniversary website upload"
git remote add origin https://github.com/YOUR-USERNAME/anniversary-website.git
git branch -M main
git push -u origin main
```

---

## ✅ Verification

After pushing, you should see your code on GitHub at:
`https://github.com/YOUR-USERNAME/anniversary-website`

Then you can connect this repository to Netlify for deployment!
