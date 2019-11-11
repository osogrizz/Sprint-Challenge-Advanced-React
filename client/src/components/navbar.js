import React from 'react'
import styled from 'styled-components'

import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode')

  const toggleMode = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  };

  return (
    <NavContainer>
      <h1>Player List</h1>
      
      <div className="dark-mode_toggle">
        <div 
          className={darkMode ? 'toggle toggled' : 'toggle'}
          onClick={toggleMode}
        />
      </div>
      
    </NavContainer>
  )
}

export default Navbar


const NavContainer = styled.nav`


.dark-mode {
  color: #fff;
  background-color: #313843;

  .navbar {
    background-color: #1F2022;
    border: none;
  }
}

  .dark-mode__toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
  }

  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }

  .toggled {
    left: 18px;
  }

`