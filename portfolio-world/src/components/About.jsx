import React from "react";
import { motion } from "framer-motion";
import { Code, Award, Server, Database, Cloud, Book } from "lucide-react";

const AboutSection = () => {

  const contactHandel=()=>{
    window.location.href = "/contact";

  }



  return (
    <div className="bg-gray-900 text-white relative overflow-hidden">
      <div className="relative pt-24 pb-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Software Engineer & Web Developer
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable, efficient solutions that drive technological innovation. Expertise in full-stack development, SaaS technologies, and Agile Methodology.
          </p>
          <a 
            href="/Jagjeet_resume.pdf" 
            className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="relative px-8 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-8">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-blue-500" />,
                title: "Web Development",
                skills: ["React", "Node.js", "JavaScript", "Django","HTML","CSS"]
              },
              {
                icon: <Cloud className="w-8 h-8 text-green-500" />,
                title: "Languages & Framworks",
                skills: ["Java", "python", "Javascript", "React", "Django", "TailwindCss", "Bootstrap"]
              },
              {
                icon: <Database className="w-8 h-8 text-purple-500" />,
                title: "Databases & Tools",
                skills: [ "MongoDB", "SQL", "Git", "Postman", "Docker"]
              }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <ul className="text-gray-400 space-y-1">
                  {skill.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 mb-8 text-center">
            Professional Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-500" />,
                title: "Full Stack Web-Developer",
                organization: "Zidio-Development",
                year: "Aug-2024 To Oct-2024"
              },
              {
                icon: <Book className="w-12 h-12 text-green-500" />,
                title: "MongoDB Certified Developer",
                organization: "MongoDB Career Path",
                year: "Aug-2024 to Oct-2023"
              },
              {
                icon: <Server className="w-12 h-12 text-red-500" />,
                title: "Infosys Certified Software Engineer",
                organization: "Iinfosys Spring Boot Training",
                year:"july-2023 to Dec-2023"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-500">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative px-8 py-16 bg-gradient-to-r from-blue-800 to-green-800 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Open to collaboration, interesting projects, and new opportunities.
        </p>
        <a 
          href="/contact" 
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90"
          onClick={contactHandel}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default AboutSection;

