import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission if desired
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Contact Header */}
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions or need help? We're here for you. Reach out to our team for
          support, inquiries, or feedback.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Get in Touch Column */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-purple-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">support@cybergear.com</p>
                <p className="text-gray-400">sales@cybergear.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">123 Neon Street, Suite 456</p>
                <p className="text-gray-400">Cyber City, NG 10101</p>
                <p className="text-gray-400">United States</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p className="text-gray-400">Monday-Friday: 9AM - 6PM EST</p>
                <p className="text-gray-400">Saturday: 10AM - 4PM EST</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Send Us a Message Column */}
        <div className="bg-gray-800 rounded-lg p-8 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white"
                placeholder="Message subject"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;