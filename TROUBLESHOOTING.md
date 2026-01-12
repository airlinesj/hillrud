# 🚨 "Repository Not Found" - Troubleshooting Guide

## The Error:
```
remote: Repository not found.
fatal: repository 'https://github.com/airlinesj/anniversary-website.git/' not found
```

## 🔍 Common Causes & Solutions:

### 1. **Repository Doesn't Exist**
**Check:** Did you actually create the repository on GitHub?

**Solution:**
- Go to [GitHub.com](https://github.com) → Sign in
- Click the **"+"** icon → **"New repository"**
- Repository name: `anniversary-website`
- Set to **Public**
- Click **"Create repository"**
- ✅ Copy the repository URL from the green **"Code"** button

### 2. **Wrong Repository URL**
**Check:** Is your URL exactly right?

**Should be:** `https://github.com/airlinesj/anniversary-website.git`
- ✅ Username: `airlinesj` (your GitHub username)
- ✅ Repository name: `anniversary-website` (exact match)
- ✅ Must end with `.git`

**If wrong URL, fix it:**
```bash
git remote remove origin
git remote add origin https://github.com/airlinesj/anniversary-website.git
git push -u origin main
```

### 3. **Authentication Issues**
**Problem:** GitHub can't verify it's really you

**Solution A - Personal Access Token:**
1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. Generate new token (classic)
3. Select `repo` scope
4. Copy the token
5. When prompted for password, paste the token

**Solution B - Check Authentication:**
```bash
# Check if you're logged in to GitHub
git config --global user.name
git config --global user.email

# If empty, set them:
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 4. **Repository Visibility**
**Problem:** Repository might be private

**Solution:**
- Go to your repository on GitHub
- Click **"Settings"** (tab at top)
- Scroll down to **"Danger Zone"**
- Click **"Change visibility"** → **"Make public"**
- Or make sure you're accessing it with correct permissions

### 5. **Case Sensitivity**
**Problem:** Repository name case mismatch

**Check:** Is it exactly `anniversary-website` (lowercase)?
**Solution:** Use exact case from GitHub URL

---

## 🛠️ Quick Fix Commands:

```bash
# 1. Check current remote URL
git remote -v

# 2. Remove incorrect remote
git remote remove origin

# 3. Add correct remote (replace with YOUR username)
git remote add origin https://github.com/airlinesj/anniversary-website.git

# 4. Try pushing again
git push -u origin main
```

---

## ✅ Verification Steps:

1. **Repository exists on GitHub:** `https://github.com/airlinesj/anniversary-website`
2. **You can access it** (should see empty repository)
3. **Authentication works** (GitHub accepts your credentials)
4. **Repository is public** (or you have access if private)

---

## 🎯 Most Likely Solution:

**90% chance:** You need to actually create the repository on GitHub first!

1. Go to GitHub.com
2. Click **"+"** → **"New repository"**  
3. Name it: `anniversary-website`
4. Make it **Public**
5. Click **"Create repository"**
6. Then try the push commands again

Let me know what happens! 🚀
