import React from 'react';
import './style.css'

function Header({titulo}) {
  return (
    <header className='header-LP'>
      <div className='div-titulo'>
        <h2>{titulo}</h2>
      </div>
      <div className='div-barra'>
       <button className='button-header'>Landing Page</button>
      </div>
    </header>
  )
}
export default Header;