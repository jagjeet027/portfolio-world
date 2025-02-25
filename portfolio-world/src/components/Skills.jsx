import React, { useState, useEffect } from 'react';
import { 
  Code, Database, Server, 
  Zap, Target, Workflow, Shield, Globe, 
  Terminal, Brain, Book, Settings, 
  Compass, Mountain, Map, Trophy,
  Star, Sparkles
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [skillProgress, setSkillProgress] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle responsive layout
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animate skill levels
    const timer = setTimeout(() => {
      const newProgress = {};
      Object.keys(skillCategories).forEach(category => {
        skillCategories[category].skills.forEach(skillGroup => {
          skillGroup.items.forEach(item => {
            newProgress[item.name] = item.level;
          });
        });
      });
      setSkillProgress(newProgress);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeCategory]);

  const skillCategories = {
    technical: {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Quests',
      description: 'Mastered weapons in the digital arsenal',
      skills: [
        {
          name: 'Programming Languages',
          icon: <Terminal className="w-6 h-6 text-purple-400" />,
          items: [
            { name: 'JavaScript', level: 90, badge: '⚔️ Master' },
            { name: 'Python', level: 85, badge: '🏹 Expert' },
            { name: 'Java', level: 75, badge: '🛡️ Advanced' }
          ]
        },
        {
          name: 'Web Technologies',
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          items: [
            { name: 'React', level: 92, badge: '⚡ Master' },
            { name: 'Node.js', level: 88, badge: '🌟 Expert' },
            { name: 'Django', level: 80, badge: '🎯 Advanced' }
          ]
        },
        {
          name: 'Databases',
          icon: <Database className="w-6 h-6 text-green-400" />,
          items: [
            { name: 'MongoDB', level: 85, badge: '📦 Expert' },
            { name: 'MySQL', level: 80, badge: '💾 Advanced' }
          ]
        }
      ]
    },
    professional: {
      icon: <Target className="w-6 h-6" />,
      title: 'Hero Attributes',
      description: 'Essential traits of a digital adventurer',
      skills: [
        {
          name: 'Problem Solving',
          icon: <Brain className="w-6 h-6 text-yellow-400" />,
          items: [
            { name: 'Critical Thinking', level: 95, badge: '🧠 Master' },
            { name: 'Analytical Skills', level: 90, badge: '🎯 Expert' }
          ]
        },
        {
          name: 'Communication',
          icon: <Sparkles className="w-6 h-6 text-pink-400" />,
          items: [
            { name: 'Technical Writing', level: 85,},
            { name: 'Team Collaboration', level: 90, }
          ]
        }
      ]
    },
    methodology: {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Battle Tactics',
      description: 'Strategic approaches to digital conquest',
      skills: [
        {
          name: 'Development Process',
          icon: <Settings className="w-6 h-6 text-orange-400" />,
          items: [
            { name: 'Agile Methodology', level: 88, badge: '⚡ Basics' },
            { name: 'Git Workflow', level: 92, badge: '⚡ Expert' }
          ]
        }
      ]
    }
  };

  return (
    <div className="bg-gray-900 text-white py-8 sm:py-16 px-4 relative overflow-hidden">
      {/* Added classes for mobile padding to prevent overlap */}
      <div className="pt-20 pb-24 md:pt-8 md:pb-8"> 
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" />
          <div className="stars absolute inset-0 opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Mountain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 animate-spin-slow" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Adventure Skillbook
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Forged in the depths of code, tempered by challenges, ready for any digital quest
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all transform hover:scale-105
                  ${activeCategory === key 
                    ? 'bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700'}
                  text-sm sm:text-base
                `}
              >
                {category.icon}
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories[activeCategory].skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  {skillGroup.icon}
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {skillGroup.name}
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="space-y-2">
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <span className="text-gray-300 flex items-center space-x-2 text-sm sm:text-base">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{item.name}</span>
                        </span>
                        <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                          {item.badge}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000"
                          style={{ width: `${skillProgress[item.name] || 0}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              { icon: <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />, value: '5+', label: 'Years of Questing' },
              { icon: <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />, value: '5+', label: 'Missions Completed' },
              { icon: <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-green-400" />, value: '100%', label: 'Quest Success Rate' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-gray-700 transition-all transform hover:scale-105 border border-gray-700 hover:border-green-500"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }

        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .stars {
            background-size: 150px 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;