



import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce web (React + Firebase)",
          description: [
  "Modern E-Commerce website built with React for fast and dynamic UI.",
  "Responsive design – works smoothly across all devices.",
  "User authentication (Register, Login, Logout) using Firebase Auth.",
  "Admin Panel – Add, update, and manage products & user details easily.",
  "Add to Cart, Update Cart, and Checkout functionality.",
  "Secure login with email/password and Google authentication.",
  "Handle future features like orders, payments, and wishlists.",
],  
      githubLink: "https://github.com/AnkitPatidar8/CARROT-",
      liveDemoLink: "https://ankitpatidar8.github.io/CARROT-/",
      videoSrc: "./videos/projectfirst.mp4",
    },
    {
      title: "My Portfolio Website",
      description: [
        "Dynamic and responsive portfolio built with MERN stack.",
        "Fully Dynamic & Responsive – Works smoothly on all devices.",
        "Admin Panel – Update content, projects, and details anytime.",
        "Contact Form with Email Notification – Direct mails when someone contacts.",
        "Resume Download – One-click updated resume access.",
        "Live Project Showcase – View live links & GitHub repos.",
        "Self-Add Feature – Add new projects/skills without coding.",
        
      ],
      liveDemoLink: "https://portfolio-admin-demo.vercel.app",
      githubLink: "https://github.com/ankitpatidar/portfolio-admin-panel",
      videoSrc: "./videos/portfoliovideo.mp4",
    },
    {
      title: "Firebase Auth App",
      description: [
  "Modern E-Commerce website built with React for fast and dynamic UI.",
  "Responsive design – works smoothly across all devices.",
  "User authentication (Register, Login, Logout) using Firebase Auth.",
  "Admin Panel – Add, update, and manage products & user details easily.",
  "Add to Cart, Update Cart, and Checkout functionality.",
  "Secure login with email/password and Google authentication.",
  "Scalable architecture to handle future features like orders, payments, and wishlists.",
],

      liveDemoLink: "https://your-firebase-app.vercel.app",
      githubLink: "https://github.com/ankitpatidar/firebase-auth-app",
      videoSrc: "./videos/projectfirst.mp4",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-neutral-900 pt-24 px-4 sm:px-6 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-5xl text-neutral-500 border-b border-teal-500 inline-block font-bold mb-6">
          My Projects
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 px-4">
          My Projects showcase a collection of work highlighting creativity,
          problem-solving, and technical skills. Each project reflects
          dedication, innovation, and practical application, demonstrating
          growth and the ability to deliver efficient solutions across different
          domains.
        </p>

        <div className="grid gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl shadow-lg overflow-hidden border border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Video */}
              <div className="w-full md:w-1/2 p-4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={project.videoSrc}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-neutral-400">
                    {project.title}
                  </h3>

                  {/* Description as bullet points */}
                  <ul className="list-disc list-inside mt-3 text-gray-400 text-sm sm:text-base space-y-2 text-left">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm sm:text-base font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-gray-800 hover:opacity-90 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm sm:text-base font-semibold bg-gradient-to-r from-yellow-500 to-amber-200 text-gray-800 hover:opacity-90 transition"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
