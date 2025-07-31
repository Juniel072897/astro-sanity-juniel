# Astro + Sanity GitHub Setup Guide

## Step 1: Initialize Local Git
```bash
cd ~/Downloads/astro-sanity-juniel
git init
git add .
git commit -m "Initial commit of Astro + Sanity project"


Step 2: Create GitHub Repository
Repository name: astro-sanity-juniel

Set visibility: Public or Private

Don't initialize with README

Click "Create repository"

Step 3: Link Local to GitHub Remote

git remote add origin https://github.com/YOUR_USERNAME/astro-sanity-juniel.git
git branch -M main
git push -u origin main

Step 4: Add .gitignore (optional)
Create .gitignore with:
node_modules/
dist/
.build/
.env
.env.local
.sanity/


Then commit:
git add .gitignore
git commit -m "Add .gitignore"
git push


5. Save the file and commit it:
```bash
git add README.md
git commit -m "Add setup notes to README"
git push




---

## 🚀 Developer Setup Guide

This project is a monorepo containing:

- `astro/` – Frontend project using Astro
- `sanity/` – Headless CMS powered by Sanity

### ✅ 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/astro-sanity-juniel.git
cd astro-sanity-juniel


✅ 2. Install Dependencies


cd astro
npm install

cd ../sanity
npm install

✅ 3. Environment Setup
Set up any required .env files. Ask the team if you need keys.
✅ 4. Run Locally

cd astro
npm run dev

# In another terminal
cd sanity
npm run dev



Note :Astro runs at http://localhost:4321
Sanity Studio runs at http://localhost:3333




> Tip: If you’re in **Nano**, press `Ctrl + O`, then `Enter` to save, and `Ctrl + X` to exit.

---

### 4. Commit and Push

Once you've saved the file, run these in your terminal:

```bash
git add README.md
git commit -m "Add developer setup guide"
git push


