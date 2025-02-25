import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Let's Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-6 h-6 text-purple-500 mr-4" />
                <span>jagjeetjaiswal027@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-6 h-6 text-purple-500 mr-4" />
                <span>+91 8092769596</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-6 h-6 text-purple-500 mr-4" />
                <span>MMDU,Mullana,Ambala ,Haryana</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/jagjeet027/" className="text-purple-500 hover:text-purple-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/jagjeet-jaiswal/" className="text-purple-500 hover:text-purple-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/jaiswal_ja99213" className="text-purple-500 hover:text-purple-400">
                  <Twitter className="w-6 h-6" href='' />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}