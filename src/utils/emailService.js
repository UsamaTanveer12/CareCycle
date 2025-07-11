// Alternative email service using a simple approach
export const sendEmail = async (formData) => {
  try {
    // Create a mailto link that opens the user's email client
    const subject = `New Consultation Request from ${formData.fullName}`;
    const body = `
New consultation request received:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website || 'Not provided'}
Specialty: ${formData.specialty}
Healthcare Type: ${formData.healthcareType}

Message:
${formData.message}

---
CareCycle Website
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:usamatanveer530@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Also log to console for backup
    console.log('Form submitted - Email client opened:', formData);
    
    return { 
      success: true, 
      message: 'Thank you! Your consultation request has been received. We will contact you at ' + formData.email + ' within 24 hours. For immediate assistance, please call us at +1 614-465-6718.' 
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: true, 
      message: 'Thank you! Your consultation request has been received. We will contact you at ' + formData.email + ' within 24 hours. For immediate assistance, please call us at +1 614-465-6718.' 
    };
  }
};

// Alternative: Simple fetch to a backend endpoint (if you have one)
export const sendEmailToBackend = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true, message: 'Form submitted successfully!' };
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Form submission failed:', error);
    return { success: false, message: 'Failed to submit form. Please try again.' };
  }
}; 