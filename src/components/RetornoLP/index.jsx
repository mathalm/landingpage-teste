import React from 'react';
import './style.css';
import imglp from "../../images/imgLP.png"
import { useNavigate } from "react-router-dom";
import LandingPages from '../../templates/LandingPages';
import Header from './HeaderLP';

function RetornoLP() {
  const navigate = useNavigate();
  const existsLP = false;
  const titulo = 'Landing Page'
  return (
    <main>
      <Header titulo={titulo}/>
      <section className='retornoLp'>
        {!!existsLP ? (
          <LandingPages />
        ) : (
          <div className='div-existFalse'>
            <img className='imageLP' src={imglp} alt='imageLP'></img>
            <h3>Crie a sua LP e prospecte leads de forma fácil e rápida</h3>
            <button className='buttonExists' onClick={() => navigate("/CriarLP")}>Criar Landing Page</button>
          </div>
        )}
      </section>
    </main>
  );
}
export default RetornoLP;