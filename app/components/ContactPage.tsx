// app/components/ContactPage.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '', // ← honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwWNXQcjhbVum97bBHcrHuN8fQaZr4LM6YYAm7peYkKofyUqefUcx3ocSC14E7pUxBa/exec',
         {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          website: formData.website, // honeypot
        }).toString(),
      });

      // Because of no-cors, we can't read response — but it still works!
      alert('Thank you! We’ll contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '', website: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">Get in touch with our team for a free consultation</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              {/* 🕵️‍♂️ Honeypot spam trap — invisible to humans */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />

              <button type="submit" className="btn-primary w-full py-3 font-medium">
                Submit Request
              </button>
            </form>
          </div>

          {/* Info Card */}
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Office Address</h4>
                 <p className="text-gray-300">
  <a 
    href="https://maps.app.goo.gl/CYd3KAcXeZU6v6kA7" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors underline"
  >
    Office No . 15 , 3rd floor , Mall 9 , G-9 Markaz<br />
    Islamabad -Pakistan
  </a>
</p>
          
    </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493a1 1 0 01-.502.95c-.48.29-.987.515-1.505.674A7 7 0 003 14a7 7 0 007 7h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 00-.502-.95l-1.498-4.493a1 1 0 00-.502-.95c-.48-.29-.987-.515-1.505-.674A7 7 0 0010 14a7 7 0 007 7m0 0a7 7 0 007-7m0 7a7 7 0 00-7-7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <p className="text-gray-300">(+92) 344-8552914</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v2H5v-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email Address</h4>
                  <p className="text-gray-300">gnniaziadv@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Office Hours</h4>
                  <p className="text-gray-300">
                    Monday-Friday: 9AM–7PM<br />
                    Sat: 10AM–2PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;