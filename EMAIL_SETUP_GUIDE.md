# Email Setup Guide for CareCycle Forms

## Overview
Your forms are now configured to send emails when users submit them. Here's how to set it up:

## Option 1: EmailJS (Recommended - No Backend Required)

### Step 1: Sign up for EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

### Step 2: Create an Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Consultation Request from {{from_name}}

Hello,

You have received a new consultation request:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Website: {{website}}

**Practice Information:**
- Specialty: {{specialty}}
- Healthcare Type: {{healthcare_type}}

**Message:**
{{message}}

---
This email was sent from your CareCycle website contact form.
```

4. Note down your **Template ID**

### Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key (User ID)**

### Step 5: Update Your Code
Open `src/utils/emailService.js` and replace the placeholder values:

```javascript
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';
const USER_ID = 'your_user_id_here';
```

## Option 2: Backend API (If you have a server)

If you prefer to use a backend server, you can:

1. Create a simple Node.js/Express server
2. Use a service like SendGrid, Mailgun, or AWS SES
3. Update the `sendEmailToBackend` function in `emailService.js`

## Testing

1. Start your development server: `npm run dev`
2. Fill out any form on your website
3. Submit the form
4. Check your email inbox

## Troubleshooting

### Common Issues:
1. **"Failed to send email"** - Check your EmailJS credentials
2. **"Service not found"** - Verify your Service ID
3. **"Template not found"** - Verify your Template ID
4. **"User ID invalid"** - Check your User ID

### Debug Steps:
1. Open browser console (F12)
2. Look for error messages
3. Check EmailJS dashboard for delivery status

## Security Notes

- EmailJS credentials are visible in frontend code (this is normal for EmailJS)
- For production, consider rate limiting and spam protection
- EmailJS free tier allows 200 emails/month

## Support

If you need help:
1. Check EmailJS documentation
2. Review browser console for errors
3. Test with a simple email first

## Next Steps

Once email is working:
1. Customize the email template
2. Add email notifications for different form types
3. Consider adding email validation
4. Set up email tracking (optional) 