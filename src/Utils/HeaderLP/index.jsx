import React from 'react';
import './style.css'
import { GrLinkNext } from 'react-icons/gr';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BsPencil } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillFileAdd, AiTwotoneEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Header({ props }) {

  const titulo = props.titulo 
  const statusLandingPage = props.statusLandingPage
  const identificador = props.identificador
  const botoes = props.botoes
  const dadosConfiguracaoLandingPage = props.dadosConfiguracaoLandingPage
  const value = props.value
  const setValue = props.setValue
  const setOpen = props.setOpen
  const navigate = useNavigate();

  const handleEnviarInformacoesLandingPage = () => {
    console.log(dadosConfiguracaoLandingPage);
  }
  var urlAtual = window.location.href;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRenderizarBotoes = () => {
    return (
      botoes.map((botao, index) => {
        return (
          <Tab label={botao} value={index.toString()} key={index} sx={{ fontSize: '13px', fontWeight: '500', padding: "0 24px", height: '56px' }} />
        )
      })
    )
  }
  const handleVerificarUrlParaAdicionarSeta = () => {
    if (urlAtual.search('Layout') > 0) {
      return (
        <Tooltip title="Próximo" placement="bottom" arrow onClick={handleEnviarInformacoesLandingPage}  sx={{ height:'max-content'}}>
          <IconButton >
            <GrLinkNext className='botao-layout-proximo' />
          </IconButton>
        </Tooltip>
      )
    }

  }
  const handleVerificarUrlParaAdicionarBotaoDeCriar = () => {
    if (urlAtual.search('LandingPages') > 0) {
      return (
        <Tooltip title="Criar Landing Page" placement="bottom" arrow  sx={{ height:'max-content'}}>
          <IconButton onClick={() => navigate("/CriarLP")}>
            <AiFillFileAdd className='botao-layout-proximo-editar' color='#070707a6' />
          </IconButton>
        </Tooltip>
      )
    }else if(urlAtual.search('LandingPage/') > 0){
      return (
        <Tooltip title="Editar Landing Page" placement="bottom" arrow  sx={{ height:'max-content'}}>
          <IconButton onClick={() => navigate("/CriarLP")}>
            <AiTwotoneEdit className='botao-layout-proximo-editar' color='#070707a6' />
          </IconButton>
        </Tooltip>
      )
    }

  }
  const handleRetornartitulo = () => {
    if (urlAtual.search('Layout') > 0 ) {
      return (
        <div className='div-titulo-edicao-layout'>
          <div className='div-botao-voltar-layout' onClick={() => window.history.back()}>
            <IoIosArrowBack />
          </div>
          <h2>{titulo}</h2>
          <BsPencil className='BsPencil' fontSize={13} onClick={() => setOpen(true)} />
        </div>
      )
    } else if(urlAtual.search('LandingPage/') > 0){
      return (
        <div>
          <div className='div-titulo-edicao-layout div-titulo-edicao-layout-lp'>
            <div className='div-botao-voltar-layout' onClick={() => window.history.back()}>
              <IoIosArrowBack />
            </div>
            <h2>{titulo}</h2>
            <BsPencil className='BsPencil' fontSize={13} onClick={() => setOpen(true)} />
          </div>
          <div className='div-status-landingpage'>
            <span>{statusLandingPage ? "Ativado" : "Desativado"}</span>
            <span><a href="https://www.chartjs.org/docs/latest/samples/bar/vertical.html" rel="noopener noreferrer" target="_blank">https://www.chartjs.org/docs/latest/samples/bar/vertical.html</a></span>
            <span>{identificador}</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className='div-titulo-edicao-layout'>
          <div className='div-botao-voltar-layout' onClick={() => window.history.back()}>
              <IoIosArrowBack />
            </div>
          <h2>{titulo}</h2>
        </div>
      )
    }
  }


  return (
    <header className={urlAtual.search('LandingPage/') > 0 ? 'header-especifica-landingpage' :'header-LP'}>
      <div className='div-titulo'>
        {handleRetornartitulo()} 
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderColor: 'divider', display: "flex", alignItems:"center", justifyContent: "space-between", paddingRight: "1rem", backgroundColor: "#ffffff", height: '56px' }}  >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="wrapped label tabs example"
          >
            {handleRenderizarBotoes()}
          </Tabs>
          {handleVerificarUrlParaAdicionarSeta()}
          {handleVerificarUrlParaAdicionarBotaoDeCriar()}
        </Box>
      </Box>
    </header>
  )
}
export default Header;