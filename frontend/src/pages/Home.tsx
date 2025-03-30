import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-[#732D91] rounded-full font-medium hover:bg-[#732D91] transition-colors"
          >
            Contact With Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            View Work
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-1/3 bg-purple-500/10 rounded-full blur-xl"
        ></motion.div>

        {/* Social Icons with motion effects */}
        <motion.div
          className="flex gap-4 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.a
            href="https://github.com/Tanzida999?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tanzida-nowshin-b058b0179/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="mailto:nowshinsara999@gmail.com"
            className="text-gray-400 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={30} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
