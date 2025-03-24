import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import banner3 from "../../src/images/banner3.png";
import banner2 from "../../src/images/banner2.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative overflow-clip min-h-screen flex text-white bg-[linear-gradient(to_bottom,#000,+071E18_35%,#208A65_67%,#35FB8E_85%)]">
      {/* Banner Image */}
      <div className="absolute w-[2600px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#8E44AD)] top-[450px] border-[1px] border-[#8E44AD]/30"></div>

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-blue-400">Tanzida Nowshin</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              A passionate <span className="text-blue-300">Web Developer</span>{" "}
              and <span className="text-blue-300">Software Engineer</span>,
              crafting beautiful and efficient digital experiences.
            </p>
          </motion.div>
        </div>

        <div className="flex gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover"
          ></motion.div>
          <a
            href="https://github.com/Tanzida999?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzida-nowshin-b058b0179/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:nowshinsara999@gmail.com"
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
