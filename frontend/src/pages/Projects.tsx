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
    git: "#",
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
    git: "#",
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
    <div className="text-white py-24 md:py-64" id="portfolio">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
