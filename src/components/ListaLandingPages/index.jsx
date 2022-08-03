import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import construcaosite from "../../images/construcaoSite.svg"
import Header from '../../Utils/HeaderLP';
import './style.css';
import DashLandingExistentes from './DashLandingExistentes';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LandingPages() {
  const navigate = useNavigate();
  const [existeLP, setExisteLp] = useState([]); 
  const titulo = ['Landing Pages'];
  const botoes = ['Landing Pages'];
  const [value, setValue] = React.useState("0");
  const [estadoProgresso, setEstadoProgresso] = useState('flex');
  const props = {
    titulo: titulo,
    botoes: botoes,
    setValue: setValue,
    value: value
  }

  useEffect(() =>{
    const options = {
      method: 'GET'
    }

    fetch('http://localhost:8080/landingPage', options)
    .then(response => response.json())
    .then(results => setExisteLp(results))
    .catch(error => console.log(error))
  },[])

  return (
    <main>
      <Header props={props} />
      <section className='retornoLp'>
        {existeLP ? (
          <div className='div-existe-true'>
            <DashLandingExistentes setEstadoProgresso={setEstadoProgresso} />
          </div>
        ) : (
          <div className='div-existFalse'>
            <img className='imageLP' src={construcaosite} alt='imageLP'></img>
            <h3>Crie a sua LP e prospecte leads de forma fácil e rápida</h3>
            <Button className='buttonExists' variant="contained" onClick={() => navigate("/CriarLP")}>Criar Landing Page</Button>
          </div>
        )}
      </section>
      <Box sx={{ position: 'fixed',zIndex: 10000, top: 0, width: '100%', height: '100%', backgroundColor: '#14141434', padding: '0 50px 0 0', display: estadoProgresso, alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </main>
  );
}
export default LandingPages;