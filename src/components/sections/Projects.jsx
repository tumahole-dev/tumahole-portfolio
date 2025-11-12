import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-lime-500 to-amber-200 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
            <p className="text-gray-400 mb-4">
              Scalable cloud infrastructure management with real-time monitoring
              and automated scaling.
            </p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                 <span
                    key={key}
                    className=" cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
              ))}  
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors my-4">View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">AI Analystics Dashboard</h3>
            <p className="text-gray-400 mb-4">
              Scalable cloud infrastructure management with real-time monitoring
              and automated scaling.
            </p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                 <span
                    key={key}
                    className=" cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
              ))}  
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors my-4">View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
            <p className="text-gray-400 mb-4">
              Scalable cloud infrastructure management with real-time monitoring
              and automated scaling.
            </p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                 <span
                    key={key}
                    className=" cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
              ))}  
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors my-4">View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
            <p className="text-gray-400 mb-4">
              Scalable cloud infrastructure management with real-time monitoring
              and automated scaling.
            </p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                 <span
                    key={key}
                    className=" cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
              ))}  
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors my-4">View Project →</a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
