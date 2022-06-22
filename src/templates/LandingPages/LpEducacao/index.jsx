import React, { useState } from 'react';
import ConfiguracaoLandingPage from '../../../Utils/Configuracao';
import Header from '../../../Utils/HeaderLP';
import TemplateLpEducacao from './TemplateLpEducacao';
import { TabContext, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import './style.css'

function LpEducacao() {
  const titulo = 'Landing Page Ebook'
  const botoes = ['Layout', 'Configuração']
  const [dadosConfiguracaoLandingPage, setDadosConfiguracaoLandingPage] = useState({})
  const [value, setValue] = React.useState("0");
  console.log(value);
  const props = {
    titulo: titulo,
    dadosConfiguracaoLandingPage,
    botoes: botoes,
    setValue: setValue,
    value: value
  }
  return (
    < section >
      <TabContext value={value}>
        <Header props={props} />
        <TabPanel value="0" index={0} sx={{padding:0}}>
          <TemplateLpEducacao setDadosConfiguracaoLandingPage={setDadosConfiguracaoLandingPage} />
        </TabPanel>
        <TabPanel value="1" index={1}>
          <ConfiguracaoLandingPage />
        </TabPanel>
      </TabContext>
    </section >
  )
}
export default LpEducacao;