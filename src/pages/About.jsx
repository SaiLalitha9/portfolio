const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
      <p className="text-lg text-gray-300 mb-6">
        Hello! I'm <span className="text-white font-semibold">Sai Lalitha Kilaru</span>, a software developer with a passion for building modern, responsive web applications.
        I enjoy solving problems, learning new technologies, and creating intuitive digital experiences.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        I have experience with the MERN stack (MongoDB, Express, React, Node.js), and I’m constantly exploring new tools and frameworks to grow my skills.
        Currently, I'm focused on building scalable frontend interfaces and working on real-world projects.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-blue-300">Skills</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-200">
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
};

export default About;
