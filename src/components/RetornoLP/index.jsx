import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import construcaosite from "../../images/construcaoSite.svg"
import LandingPages from '../../templates/LandingPages';
import Header from './HeaderLP';
import './style.css';

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
            <img className='imageLP' src={construcaosite} alt='imageLP'></img>
            <h3>Crie a sua LP e prospecte leads de forma fácil e rápida</h3>
            <Button className='buttonExists' onClick={() => navigate("/CriarLP")}>Criar Landing Page</Button>
          </div>
        )}
      </section>
    </main>
  );
}
export default RetornoLP;