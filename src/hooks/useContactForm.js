import { useState } from 'react';
import { sendContactEmail } from '@/utils/emailService';

export const useContactForm = (initialData = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    projectType: '',
    message: '',
    newsletter: false,
    ...initialData
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e, onSuccess) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        projectType: '',
        message: '',
        newsletter: false,
      });
      if (onSuccess) onSuccess();
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      projectType: '',
      message: '',
      newsletter: false,
    });
    setSubmitStatus(null);
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
};