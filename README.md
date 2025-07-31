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
