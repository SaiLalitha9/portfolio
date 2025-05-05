const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills using React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-stack MERN e-commerce platform with user authentication and product management.",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A simple tasks that are based on basic html and introduction to tailwind kind of projects.",
    link: "https://sailalitha9.github.io",
  },
  {
    title: "MERN",
    description: "A full-stack MERN e-commerce platform with user authentication and product management.",
    link: "#",
  },
  {
    title: "Cancer Detection",
    description: "A python and machine learning based project to predict the cancer in lungs.",
    link: "#",
  },
  {
    title: "MEAN",
    description: "A full-stack MEAN e-commerce platform with user authentication and product management.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
