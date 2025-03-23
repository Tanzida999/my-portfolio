import project1 from "../../src/images/project-1.png";
const About = () => {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bol mb-8">
        About <span className="text-emerald-300">Me</span>
      </h2>
      <div className="grid grid-cols-1 mb:grid-cols-3 gap-8">
        <div className="border border-white/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            I am a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovation web solutions
            and branding. My journey in tech started with a curiosity about how
            things work, which led me to pursue in web deveopment. I am also a
            blockchain enthusiast. I am working on a research paper based on
            blockchain.
          </p>
          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-emerald-200/50">
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
            modern technologies. My Expertise spans both front-end and back-end
            development, allowing me to create seamless, end-to-end solutions. I
            also design logo, business card, banner, also websites.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
