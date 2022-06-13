import React, { useState } from 'react';
import Header from '../../../components/RetornoLP/HeaderLP';
import './style.css'
import TemplateLpEducacao from './TemplateLpEducacao';

function LpEducacao() {
  const [valorWidth, setValorWidth] = useState(0);

  const titulo = 'LP de Educação'

  const handleValorWidth = (event) => {
    setValorWidth(event.target.value)
    console.log(valorWidth);
  };


  return (
    < section >
      <Header titulo={titulo} />

      <TemplateLpEducacao />
    </section>
  )
}
export default LpEducacao;