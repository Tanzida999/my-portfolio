import React, { useEffect } from "react";
import {
  SiFramer,
  AiFigma,
  SiReact,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import { FaLemon } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { UseInView } from "react-intersection-observer";
const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "test-purple-200",
  },
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "test-purple-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "test-purple-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "test-purple-200",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "test-purple-200",
  },
];

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return;
  //   <section
  //     className="py-24 md:py-24 max-w-[1200px] mx-auto text-center"
  //     id="stack"
  //   >
  //     <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
  //     <div className="flex flex-wrap justify-center gap-8" ref={ref}></div>
  //   </section>;
};

export default Stack;
