import React, { useState } from 'react';
import Header from '../../../components/RetornoLP/HeaderLP';
import './style.css'
import TemplateLpEducacao from './TemplateLpEducacao';

function LpEducacao() {
  const titulo = 'LP de Educação'

  return (
    < section >
      <Header titulo={titulo} />

      <TemplateLpEducacao />
    </section>
  )
}
export default LpEducacao;