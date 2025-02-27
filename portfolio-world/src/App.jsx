import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import AboutSection from './components/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return <Home />
      case 'projects': return <Projects />
      case 'skills': return <Skills />
      case 'about': return <AboutSection/>
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="hidden md:block">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <div className="md:hidden fixed bottom-0 left-0 right-0">
        <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default App
