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
  
const styles = {
    width: 350 + 'px',
    height: valorWidth + 'px',
  }

  return (
    < section >
      <Header titulo={titulo} />
     <div className='div-configuracao-geral'>
       <div className='div-demonstracao-lp'>
         <TemplateLpEducacao/>
       </div>
       <div className='div-configuracao-lp'></div>
     </div>
    </section>
  )
}
export default LpEducacao;