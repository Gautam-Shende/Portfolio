import { useState, useRef } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setIsSuccess(false), 3000)
    }, (error) => {
      setError(error.text)
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <section id="contact" className="section bg-white dark:bg-dark-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <FiMail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-medium">Email</h4>
                  <a href="mailto:gautamshende144@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    gautamshende144@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <FiMapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Nagpur, Maharashtra</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <FiPhone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-medium">Phone</h4>
                  <a href="tel:+918459251480" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                    +91 8459251480
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-dark-800 p-8 rounded-xl shadow-md"
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-700"
                  required
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-700"
                  required
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="subject" className="block text-gray-800 dark:text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-700"
                  required
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark-700"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2 w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend />
                </button>

                {isSuccess && (
                  <motion.div 
                    className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {error && (
                  <motion.div 
                    className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {error}
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact