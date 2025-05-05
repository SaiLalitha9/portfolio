const Home = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills using React and Tailwind CSS.",
      link: "https://your-portfolio-link.com",
      previewImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "E-commerce App",
      description: "A full-stack MERN e-commerce platform with user authentication and product management.",
      link: "#",
      previewImg: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Task Manager",
      description: "A simple tasks that are based on basic html and introduction to tailwind kind of projects.",
      link: "https://sailalitha9.github.io",
      previewImg: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
    },
  ];

  return (
    <div className="w-full relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hi, I'm <span className="text-blue-400">Sai Lalitha Kilaru</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-gray-300 mb-8">
          A passionate <span className="text-white font-semibold">Software Developer</span> focused on building modern web applications and crafting elegant user experiences.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Get in Touch
          </a>
          <a
            href="/projects"
            className="border border-blue-400 hover:bg-blue-900/30 text-blue-400 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            View Projects
          </a>
          <p>Scroll to know more!!</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/70 hover:bg-gray-800/90 border border-gray-700 rounded-xl p-6 transition duration-300 group">
                <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src={project.previewImg} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.title.includes('MERN') ? (
                    ['React', 'Node', 'MongoDB'].map((tech) => (
                      <span key={tech} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))
                  ) : project.title.includes('Portfolio') ? (
                    ['React', 'Tailwind'].map((tech) => (
                      <span key={tech} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      HTML/CSS
                    </span>
                  )}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition"
                >
                  View Project <span>→</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-block border border-blue-400 hover:bg-blue-900/30 text-blue-400 font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

       {/* About Section */}
       <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                I'm a full-stack developer specializing in JavaScript technologies with experience building responsive web applications.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                My journey in web development began in college and has grown into a passion for creating intuitive digital experiences.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Python', 'Git'].map((skill) => (
                <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;