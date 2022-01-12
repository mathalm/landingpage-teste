import React from 'react';
import './style.css'
import { Button } from '@material-ui/core'

function Header({titulo}) {
  return (
    <header className='header-LP'>
      <div className='div-titulo'>
        <h2>{titulo}</h2>
      </div>
      <div className='div-barra'>
      <div className='divButtom'><Button className="buttonHeader" variant="text" color="inherit">Templates</Button></div>
      </div>
    </header>
  )
}
export default Header;