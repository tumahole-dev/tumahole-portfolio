import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-lime-500 to-amber-200 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Diploma in Information Technology graduate who's a passionate
              developer with expertise in building scalable web applications and
              creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className=" cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full text-sm hover:bg-lime-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📖 Education & Certification</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Diploma in Information Technology</strong> - Vaal University of Technology
                  (2024)
                </li>
                <li>
                  Relevant Coursework: Information Systems, Programming Logic, Web Development, Software Development
                </li>
                <li><strong>Certifications:</strong> Microsoft DP-900 Azure Data Fundamentals, Cisco CCNAv7 Introduction to Networks, IBM Data Science 101 & Tools</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Intern: IT Helpdesk Support <br />
                    Gauteng Department of Economic Development <br />
                    (01/Jul/2025 - Present) 
                  </h4> <br />
                  <p>
                   <li>Provide technical support to end-users </li>
                   <li>Conducting system administration </li>
                   <li>Conducting routine maintenance on computer systems</li>
                   <li>Activating and managing software licences for end-users </li>
                   <li>Document and escalate complex issues to senior IT staff for resolution</li>
                   <li>Optimise efficiencies and inputting on the ticket tracking system</li>
                   <li>Enhanced user support by creating guides and FAQs, </li>
                   <li>Setting up the projector and sound system for large in-person meetings</li>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🧠 Skills & Abilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Proficient in Microsoft Office Suite
                </li>
                <li>
                  <strong>Operating Systems:</strong> Windows, Linux (basic)
                </li>
                <li>
                  <strong>Software Support:</strong> Installation, configuration, and troubleshooting of common applications
                </li>
                <li>
                  <strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, React.js
                </li>
                <strong>Version Control:</strong> Git, GitHub
                <li>
                  <strong>Networking Basics: </strong>IP configuration, LAN setup, basic troubleshooting
                </li>
                <li>
                  <strong>Hardware Support:</strong> PC assembly, peripheral setup, basic diagnostics
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🈯 Communication & Leadership</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Proficient in the following languages - English, Sepedi and Setswana. Excellent verbal and written communication. A good presenter and able to collaborate across various work streams.
                </li>
                <li>
                  Creative, adaptable and solution orientated.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
