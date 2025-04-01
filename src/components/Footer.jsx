import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} gautamshende144@gmail.com. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Gautam-Shende"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gautam-shende-262803290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/GautamShende_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/gautamshende_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaInstagram  size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer