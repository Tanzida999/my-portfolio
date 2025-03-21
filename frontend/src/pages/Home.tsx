import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const images = [
    "https://images.pexels.com/photos/1193747/pexels-photo-1193747.jpeg", // Image 1
    "https://images.pexels.com/photos/1561947/pexels-photo-1561947.jpeg", // Image 2
    "https://images.pexels.com/photos/3787596/pexels-photo-3787596.jpeg", // Image 3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

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

        {/* Slideshow */}
        <div className="relative mb-6">
          <img
            src={images[currentImage]}
            alt="Slideshow Image"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &#60;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &#62;
          </button>
        </div>

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
