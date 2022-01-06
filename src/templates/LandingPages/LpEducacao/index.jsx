import React, { useEffect, useState } from 'react';
import Header from '../../../components/RetornoLP/HeaderLP';
import './style.css'

function LpEducacao() {
  const [valorWidth, setValorWidth] = useState(10);
  const [styles, setStyles] = useState();

  const titulo = 'LP de Educação'

  const handleValorWidth = (event) => {
    setValorWidth({valorWidth: event.target.value})
    console.log(valorWidth);
  };
  
useEffect(()=>{
  setStyles({
    styles: {
      width: valorWidth + 'px',
      height: 200 + 'px',
    }
  }) 
  
}, [valorWidth]);

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