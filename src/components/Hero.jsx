import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-primary">Gautam Shende</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Frontend Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                I build exceptional digital experiences with modern web technologies. Focused on creating beautiful, responsive, and user-friendly interfaces.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                <a
                  href="#contact"
                  className="btn btn-primary"
                >
                  Contact Me
                </a>
                <a
                  href="/GautamShende.pdf"
                  download
                  className="btn btn-outline flex items-center gap-2"
                >
                  Download CV <FiDownload />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center md:justify-start gap-6"
            >
              <a
                href="https://github.com/Gautam-Shende "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gautam-shende-262803290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/GautamShende_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/gautamshende_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </motion.div>
          </div>

          {/* Image/Animation */}
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  src="https://avatars.githubusercontent.com/u/173543324?v=4"
                  alt="Developer"
                  className="w-3/4 h-3/4 object-cover rounded-full border-8 border-blue-500 shadow-2xl shadow-blue-400"
                  animate={{ y: [0, -30, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

