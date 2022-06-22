import React from 'react';
import './style.css'
import { Button } from '@material-ui/core';
import { GrLinkNext } from 'react-icons/gr';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Header({ props }) {

  const titulo = props.titulo
  const botoes = props.botoes
  const dadosConfiguracaoLandingPage = props.dadosConfiguracaoLandingPage
  const value = props.value
  const setValue = props.setValue

  const handleEnviarInformacoesLandingPage = () => {
    console.log('teste');
    console.log(dadosConfiguracaoLandingPage);
  }
  var urlAtual = window.location.href;
  // const handleVerificarUrlParaAdicionarClasseNoBotao = (botao) => {
  //   if (urlAtual.search(botao) > 0) {
  //     return 'divButtom-selecionado'
  //   } else {
  //     return 'divButtom-selecionado noBorder'
  //   }
  // className={handleVerificarUrlParaAdicionarClasseNoBotao(botao)}
  // }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRenderizarBotoes = () => {
    return (
      botoes.map((botao, index) => {
        return (
          <Tab label={botao} value={index.toString()} key={index}  />
        )
      })
    )
  }
  const handleVerificarUrlParaAdicionarSeta = () => {
    if (urlAtual.search('Layout')) {
      return (
        <Tooltip title="Próximo" placement="bottom" arrow onClick={handleEnviarInformacoesLandingPage}>
          <IconButton >
            <GrLinkNext />
          </IconButton>
        </Tooltip>
      )
    }
  }
  return (
    <header className='header-LP'>
      <div className='div-titulo'>
        <h2>{titulo}</h2>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{  borderColor: 'divider' }}  >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor='none'
            aria-label="wrapped label tabs example"
          >
            {handleRenderizarBotoes()}
          </Tabs>
        </Box>
      </Box>
    </header>
  )
}
export default Header;