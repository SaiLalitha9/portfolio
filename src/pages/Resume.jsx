const Resume = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">My Resume</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h3 className="font-medium">Bachelor's Degree in Computer Science</h3>
          <p className="text-gray-400">Gitam University, 2018-2022</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-1">
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>Responsive Web Design</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h3 className="font-medium">Web Development Intern</h3>
          <p className="text-gray-400">L&T Mindtree, MERN Developer</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built website components using React</li>
            <li>Fixed bugs in existing code</li>
            <li>Collaborated with team members</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <a 
          href="/path-to-your-resume.pdf" 
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;