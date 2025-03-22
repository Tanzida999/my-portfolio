import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import banner3 from "../../src/images/banner3.png";
import banner2 from "../../src/images/banner2.png";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white bg-[linear-gradient(to_bottom,#000,+071E18_35%,#208A65_67%,#35FB8E_85%)]">
      {/* Banner Image */}
      <div className=" absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30container ml-40">
        <div className="container w-[1200px] h-[500px] ml-20">
          {/* <img
            src={banner3}
            alt="Banner Image"
            className="w-full h-full object-cover rounded-lg shadow-lg p-40"
          /> */}
        </div>
      </div>

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
