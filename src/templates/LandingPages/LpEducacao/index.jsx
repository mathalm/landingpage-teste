import React, { useState } from 'react';
import Header from '../../../components/RetornoLP/HeaderLP';
import './style.css'

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
      <div className='div-teste' style={styles} >
        teste
      </div>
      <input type="number" placeholder='Numero' onChange={handleValorWidth} />
    </section>
  )
}
export default LpEducacao;