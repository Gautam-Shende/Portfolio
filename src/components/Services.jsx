
import React from "react";
import { services } from "./constant"; // Make sure the import path is correct
import { 
  FaCode, 
  FaPalette, 
  FaMobileAlt, 
  FaServer, 
  FaSearch, 
  FaTachometerAlt 
} from "react-icons/fa";

const Services = () => {
  // Map icon names to actual components
  const iconComponents = {
    FaCode: FaCode,
    FaPalette: FaPalette,
    FaMobileAlt: FaMobileAlt,
    FaServer: FaServer,
    FaSearch: FaSearch,
    FaTachometerAlt: FaTachometerAlt
  };

  const getIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent size={40} className="text-primary" /> : null;
  };

  return (
    <section id="services" className="section bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-dark-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">{getIcon(service.icon)}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;