import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import project1 from "../../src/images/project-1.png";
import project2 from "../../src/images/project-2.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const portfolioProjects = [
  {
    title: "Ecommerce Digital Products",
    desc: "Lorem",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "https://github.com/Tanzida999/E-Commerce-Websiite",
    src: project1,
    type: "fullstack",
  },
  {
    title: "Interactive E-Learning Platform",
    desc: "Lorem",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "#",
    src: project1,
    type: "Frontend",
  },
  {
    title: "Portfolio Website",
    desc: "Lorem",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "https://github.com/Tanzida999/my-portfolio",
    src: project1,
    type: "Frontend",
  },
  {
    title: "Akino Portfolio Website",
    desc: "Lorem",
    devstack: "HTML, CSS",
    link: "https://tanzida999.github.io/akinoportfolio/",
    git: "https://github.com/Tanzida999/akinoportfolio",
    src: project1,
    type: "Frontend",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white pt-16 md:pt-26 pb-20 md:pb-40" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-purple-500">Projects</span>
        </h2>
        <div className="space-y-8">
          {portfolioProjects.map((portfolioProject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">
                  {portfolioProject.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-purple-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/2- border border-white/10"
                  >
                    {" "}
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={portfolioProject.src}
                        alt={portfolioProject.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">
                          {portfolioProject.desc}
                        </p>
                        <p className="text-purple-300 font-medium mb-2">
                          Stack: {portfolioProject.devstack}
                        </p>
                        <p className="text-purple-400/60 font-medium mb-4 capitalize">
                          Type:{portfolioProject.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={portfolioProject.link}
                            className="text-purple-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={portfolioProject.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
