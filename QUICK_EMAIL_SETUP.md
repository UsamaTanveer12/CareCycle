# Quick Email Setup - Fix the Error

## The Problem
You're seeing "Sorry, there was an error sending your request" because EmailJS is not configured yet.

## Quick Fix (5 minutes)

### Step 1: Sign up for EmailJS
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (it's free)
3. Use your email: `usamatanveer530@gmail.com`
4. Verify your email

### Step 2: Create Email Service
1. Login to EmailJS dashboard
2. Click "Email Services" → "Add New Service"
3. Choose "Gmail" (since you use Gmail)
4. Connect your Gmail account
5. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Name it: "CareCycle Contact Form"
3. Subject: `New Consultation Request from {{from_name}}`
4. Content:
```
Hello,

New consultation request received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Website: {{website}}
Specialty: {{specialty}}
Healthcare Type: {{healthcare_type}}

Message:
{{message}}

---
CareCycle Website
```
5. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get User ID
1. Click "Account" → "API Keys"
2. **Copy the Public Key** (looks like: `user_def456`)

### Step 5: Update Your Code
Open `src/utils/emailService.js` and replace these lines:

```javascript
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const USER_ID = 'YOUR_EMAILJS_USER_ID';
```

With your actual values:
```javascript
const SERVICE_ID = 'service_abc123'; // Your actual Service ID
const TEMPLATE_ID = 'template_xyz789'; // Your actual Template ID
const USER_ID = 'user_def456'; // Your actual User ID
```

### Step 6: Test
1. Save the file
2. Refresh your website
3. Fill out a form and submit
4. Check your email at `usamatanveer530@gmail.com`

## That's it! 🎉

Your forms will now send emails to `usamatanveer530@gmail.com` when users submit them.

## Need Help?
- EmailJS support: https://www.emailjs.com/docs/
- Your credentials are safe to use in frontend code
- Free tier: 200 emails/month 