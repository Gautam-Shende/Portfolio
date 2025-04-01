import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, socialLinks } from "./constant";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "FaGithub":
        return <FaGithub size={18} />;
      case "FaLinkedin":
        return <FaLinkedin size={18} />;
      case "FaTwitter":
        return <FaTwitter size={18} />;
      case "FaInstagram":
        return <FaInstagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-900/90 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-primary dark:text-primary-400"
        >
          MyPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-800 shadow-lg rounded-b-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
