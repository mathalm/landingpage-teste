import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import construcaosite from "../../images/construcaoSite.svg"
import Header from '../../Utils/HeaderLP';
import './style.css';

function RetornoLP() {
  const navigate = useNavigate();
  const existsLP = false;
  const titulo = ['RetornoLP']
  const botoes = ['RetornoLP']
  const [value, setValue] = React.useState("0");
  const props = {
    titulo: titulo,
    botoes: botoes,
    setValue: setValue,
    value: value
  }
  return (
    <main>
      <Header props={props} />
      <section className='retornoLp'>
        {!!existsLP ? (
          null
        ) : (
          <div className='div-existFalse'>
            <img className='imageLP' src={construcaosite} alt='imageLP'></img>
            <h3>Crie a sua LP e prospecte leads de forma fácil e rápida</h3>
            <Button className='buttonExists' variant="contained" onClick={() => navigate("/CriarLP")}>Criar Landing Page</Button>
          </div>
        )}
      </section>
    </main>
  );
}
export default RetornoLP;