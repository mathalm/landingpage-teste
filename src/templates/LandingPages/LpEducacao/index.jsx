import React, { useState } from 'react';
import Header from '../../../components/RetornoLP/HeaderLP';
import './style.css'
import TemplateLpEducacao from './TemplateLpEducacao';

function LpEducacao() {
  const titulo = 'LP de Educação'

  const [dadosConfiguracaoLandingPage, setDadosConfiguracaoLandingPage] = useState({})

  return (
    < section >
      <Header titulo={titulo} dadosConfiguracaoLandingPage={dadosConfiguracaoLandingPage} />

      <TemplateLpEducacao setDadosConfiguracaoLandingPage={setDadosConfiguracaoLandingPage} />
    </section>
  )
}
export default LpEducacao;