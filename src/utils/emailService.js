// src/utils/emailService.js

export const sendEmail = async (formData) => {
  // Construct mailto link
  const subject = encodeURIComponent('New Consultation Request');
  const body = encodeURIComponent(
    `Specialty: ${formData.specialty}\n` +
    `Healthcare Type: ${formData.healthcareType}\n` +
    `Full Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Website: ${formData.website}\n` +
    `Message: ${formData.message}\n` +
    `Agreed to Terms: ${formData.agreeTerms ? 'Yes' : 'No'}`
  );
  const mailtoLink = `mailto:usamatanveer530@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
  return {
    success: true,
    message: 'Your email client should now open. If not, please send your request to usamatanveer530@gmail.com.'
  };
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