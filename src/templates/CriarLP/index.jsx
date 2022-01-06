import React from 'react';
import './style.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Header from '../../components/RetornoLP/HeaderLP';
import { useNavigate } from 'react-router-dom';

function CriarLP() {
  const titulo = 'Escolha o template que você deseja'
  const navigate = useNavigate();
  return (
    <section className='sectionCriarLP'>
      <Header titulo={titulo}/>
      <div className='div-engloba-outras-div'>
        <div className='div-template-global'>
          <p>Crie sua LP</p>
          <AiOutlinePlus size={23}/>
        </div>
        <div className='div-template-global educacao' onClick={() => navigate('/LpEducacao')}>
          <p>Educação</p>
        </div>
        <div className='div-template-global evento'>
          <p>Evento com vídeo</p>
        </div>
        <div className='div-template-global pet'>
          <p>Pet Shop</p>
        </div>
      </div>
      <div className='div-engloba-outras-div'>
        <div className='div-template-global curso'>
          <p>Cursos</p>
        </div>
        <div className='div-template-global imobiliaria'>
          <p>Imobiliária</p>
        </div>
        <div className='div-template-global visita'>
          <p>Agende uma visita</p>
        </div>
        <div className='div-template-global vendas'>
          <p>Vendas</p>
        </div>
      </div>

    </section>
  )
}
export default CriarLP;