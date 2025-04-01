import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={40} />, level: 90 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" size={40} />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={40} />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" size={40} />, level: 90 },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={40} />, level: 85 },
    { name: 'Git', icon: <FaGitAlt className="text-orange-700" size={40} />, level: 75 },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me ✨
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Who I Am 🧑‍💻
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate frontend developer crafting modern, responsive, and user-friendly web applications. 🚀 Specializing in React.js ecosystem, I bring ideas to life with clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My coding journey began in college, and I've been hooked ever since! 📚 I thrive on continuous learning and staying ahead of web trends. There's nothing I love more than solving complex problems with elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not immersed in code, you'll find me: 🌄 Hiking in nature, 📖 Reading tech blogs, or 🧪 Experimenting with new frameworks. I'm always excited to collaborate on innovative projects that push boundaries!
            </p>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              My Tech Stack ⚡
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div 
                    className="mb-2"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {skill.name}
                  </span>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;