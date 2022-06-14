import React from 'react';
import './style.css'
import { Button } from '@material-ui/core';
import { GrLinkNext } from 'react-icons/gr';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function Header({ titulo, dadosConfiguracaoLandingPage }) {

  const handleEnviarInformacoesLandingPage = () =>{
    console.log('teste');
    console.log(dadosConfiguracaoLandingPage);
  }

  return (
    <header className='header-LP'>
      <div className='div-titulo'>
        <h2>{titulo}</h2>
      </div>
      <div className='div-barra'>
        <div className='divButtom'>
          <Button className="buttonHeader" variant="text" color="inherit" >
            Templates
          </Button>
        </div>
        <div className='div-botao-proximo'>
          <Tooltip title="Próximo" placement="bottom" arrow onClick={handleEnviarInformacoesLandingPage}>
            <IconButton >
              <GrLinkNext />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
export default Header;