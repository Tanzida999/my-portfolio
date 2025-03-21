import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Tanzida Nowshin</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate <span className="text-blue-300">Web Developer</span> and{" "}
          <span className="text-blue-300">Software Engineer</span>, crafting
          beautiful and efficient digital experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-white transition"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
