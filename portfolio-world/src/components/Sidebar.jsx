import { motion } from 'framer-motion'

const menuItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'projects', label: 'Projects', icon: '🎯' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'contact', label: 'Contact', icon: '📧' }
]

export default function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <div className="h-screen w-64 bg-gray-800 p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500 transform hover:scale-105 transition-transform">
          <img 
            src="/src/assets/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-200 bg-clip-text text-transparent">
          jagjeet jaiswal
        </h2>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`w-full px-4 py-2 rounded-lg flex items-center space-x-3 transition-all
                  ${currentPage === item.id 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-gray-700 text-gray-300'}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <motion.div
                    className="w-1 h-full bg-purple-300 absolute right-0"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <div className="flex justify-center space-x-4">
          {/* Social Links */}
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}