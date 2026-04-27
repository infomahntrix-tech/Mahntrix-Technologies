// Simple and reliable email service using FormSubmit
export const sendContactEmail = async (formData) => {
  try {
    // REPLACE THIS with your actual Gmail address
    const YOUR_EMAIL = "amanq3944@gmail.com"; // ← CHANGE THIS!
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name || '');
    formDataToSend.append('email', formData.email || '');
    formDataToSend.append('phone', formData.phone || '');
    formDataToSend.append('company', formData.company || '');
    formDataToSend.append('service', formData.service || '');
    formDataToSend.append('budget', formData.budget || '');
    formDataToSend.append('message', formData.message || '');
    formDataToSend.append('_subject', `New Contact: ${formData.name} - ${formData.company || 'Individual'}`);
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_template', 'table');
    
    const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
      method: 'POST',
      body: formDataToSend
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Email sent successfully!');
      return { success: true };
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
};