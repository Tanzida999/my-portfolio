import project1 from "../../src/images/project-1.png";
import project2 from "../../src/images/project-2.jpg";

const About = () => {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-purple-500">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-white/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            I am a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovative web solutions
            and branding. My journey in tech started with a curiosity about how
            things work, which led me to pursue web development. I am also a
            blockchain enthusiast. I am working on a research paper based on
            blockchain.
          </p>
          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-purple-200/50">
              const skills = [<br />
              &nbsp;'Javascript',
              <br />
              &nbsp;'React',
              <br />
              &nbsp;'Node.js',
              <br />
              &nbsp;'MongoDb',
              <br />
              &nbsp;'Express.js',
              <br />
              &nbsp;'Python',
              <br />
              &nbsp;'Solidity',
              <br />]
            </code>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise spans both front-end and back-end
            development, allowing me to create seamless, end-to-end solutions. I
            also design logos, business cards, banners, and websites.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg overflow-hidden ">
            <img
              src={project1}
              className="w-full h-[300px] object-cover rounded-lg"
              alt="Project 1"
            />
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I'm proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development
            and branding.
          </p>
          <div className="border border-white/20 text-center rounded-lg p-3">
            <h4 className="text-purple-500 font-medium mb-2">Frontend</h4>
            <ul className="text-white/50 space-y-1 text-sm">
              <li>React/Next.js</li>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="border text-center border-white/20 rounded-lg p-3 mt-4">
            <h4 className="text-purple-500 font-medium mb-2">Backend</h4>
            <ul className="text-white/50 space-y-1 text-sm">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Front-end
              </label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Back-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Database</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
          <p className="text-white/50">
            I believe in writing clean, maintainable code and try to follow best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </div>
        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg overflow-hidden ">
            <img
              src={project2}
              className="w-full h-[200px] object-cover rounded-lg"
              alt="Project 2"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
          <p className="text-white/50">
            My goal is to continue growing as a developer and a software
            Engineer, tackling challenging projects and contributing to the tech
            cpommunity. I'm always excited to learn new technologies and push
            the boundaries pf what's possible in web development and software
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
