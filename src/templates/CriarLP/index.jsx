import React from 'react';
import './style.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Header from '../../Utils/HeaderLP';
import { useNavigate } from 'react-router-dom';

function CriarLP() {
  const titulo = ['Escolha o template que você deseja'];
  const botoes = ['Criar'];
  const navigate = useNavigate();
  const [value, setValue] = React.useState("0");
  const props = {
    titulo: titulo,
    botoes: botoes,
    setValue: setValue,
    value: value
  }
  return (
    <section className='sectionCriarLP'>
      <Header props={props}/>
      <div className='div-engloba-outras-div'>
        <div className='div-template-global'>
          <p>Crie sua LP</p>
          <AiOutlinePlus size={23}/>
        </div>
        <div className='div-template-global educacao' onClick={() => navigate('/Layout/Ebook')}>
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