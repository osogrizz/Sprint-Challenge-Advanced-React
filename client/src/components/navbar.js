import React from 'react'

import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode')

  const toggleMode = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  };

  return (
    <nav>
      <h1>Player List</h1>

      <div className="dark-mode_toggle">
        <div 
          className={darkMode ? 'toggle toggled' : 'toggle'}
          onClick={toggleMode}
        />
      </div>
      
    </nav>
  )
}

export default Navbar
