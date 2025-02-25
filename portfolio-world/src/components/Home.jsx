import React, { useState } from 'react';
import { 
  Compass, 
  GraduationCap, 
  Code, 
  Coffee, 
  Map, 
  Mountain,
  Heart,
  Award,
  Briefcase,
  X,
  Download,
  ExternalLink,
  ScrollText 
} from 'lucide-react';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const internships = [
    {
      company: "Zidio-Development",
      role: "MERN-Stack Developer Intern",
      duration: "3 months",
      description: "Developed responsive web applications using React and Redux and create RESTful APIs using Node.js",
      certificateUrl: "/api/placeholder/800/600",
      downloadUrl: "#"
    },
    {
      company: "Alpha Intern",
      role: "Full Stack Developer Intern",
      duration: "3 months",
      description: "Built RESTful APIs and implemented user authentication",
      certificateUrl: "/api/placeholder/800/600",
      downloadUrl: "#"
    },
    {
      company: "OctaNet Service Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      duration: "1 months",
      description: "Worked on Frontend with technology like HTML , CSS and JavaScript automation",
      certificateUrl: "/api/placeholder/800/600",
      downloadUrl: "#"
    }
  ];

  const achievements = [
    {
      title: "Hackathon ",
      description: "Internal Hackathon Winner at Maharishi Markandeshwar (Deemed to be University)",
      icon: <Award className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Open Source Contributor",
      description: "Major contributions to popular JavaScript frameworks",
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      title: "Technical Blog Writer",
      description: "Published 2+ technical articles on web development",
      icon: <Code className="w-6 h-6 text-blue-400" />
    }
  ];

  const certifications = [
    {
      name: "MongoDB Certified ",
      issuer: "ICT Academy Learnathon",
      date: "2024",
      icon: <ScrollText className="w-6 h-6 text-green-400" />
    },
    {
      name: "Django Developer Certification",
      issuer: "Infosys",
      date: "2023",
      icon: <Code className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 animate-fade-in">
        <div className="relative w-48 h-42 mx-auto mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            <img src="src/assets/profile.jpg" alt="Profile" className="relative w-48 h-48 rounded-full border-4 border-white object-cover"/>
              <div className="absolute -inset-4 animate-spin-slow">
                <Compass className="absolute top-0 right-0 w-10 h-10 text-purple-400" />
                <Mountain className="absolute bottom-0 left-0 w-10 h-10 text-pink-400" />
              </div>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Jagjeet Jaiswal
          </h1>
          <p className="text-xl text-gray-400">
            Explorer of Code | Adventure Seeker in Tech
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-bold">Educational Quest</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
                  <p className="text-gray-400">Pursuing at Maharishi Markandeshwar (Deemed to be University)</p>
                  <p className="text-purple-400">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-6">
              <Map className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl font-bold">Tech Adventures</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Embarking on a journey through the digital realm, I'm passionate about crafting
              innovative solutions and exploring new technologies. My quest involves mastering
              full-stack development, SaaS technologies, and Agile Methodology.
            </p>
          </div>
        </div>

        {/* Internships Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Adventure Chronicles: Internships
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold">{internship.company}</h3>
                </div>
                <p className="text-gray-400 mb-2">{internship.role}</p>
                <p className="text-sm text-gray-500 mb-4">{internship.duration}</p>
                <p className="text-gray-300 mb-4">{internship.description}</p>
                <button
                  onClick={() => setSelectedCertificate(internship)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <ScrollText className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Quest Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {achievement.icon}
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skill Masteries
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {cert.icon}
                  <div>
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        >
          {selectedCertificate && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{selectedCertificate.company} - Certificate</h3>
              <img
                src={selectedCertificate.certificateUrl}
                alt="Certificate"
                className="w-full rounded-lg"
              />
              <div className="flex justify-end space-x-4">
                <a
                  href={selectedCertificate.downloadUrl}
                  download
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Home;