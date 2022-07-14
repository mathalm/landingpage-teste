import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabContext, TabPanel } from '@mui/lab';
import Header from '../../Utils/HeaderLP';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import listagemLandingPagesApi from '../../listagemLandingPage.json';
import CorpoLandingPage from './CorpoLandingPage';

function LandingPage() {
  const landingPage = useRef([]);
  const { LandingPageId } = useParams();
  const [titulo, setTitulo] = useState('');
  const [statusLandingPage, setStatusLandingPage] = useState(false);
  const [identificador, setIdentificador] = useState('');
  const botoes = ['LandingPage'];
  const [value, setValue] = React.useState("0");
  const [open, setOpen] = React.useState(false);//mudar aqui para habilitar coleta do nome

  const props = {
    titulo: titulo,
    botoes: botoes,
    value: value,
    statusLandingPage: statusLandingPage,
    identificador: identificador,
    setValue: setValue,
    setOpen: setOpen,
  }

  const handleClose = () => {
    if(titulo.length < 3){
      return
    }
    setOpen(false);
  };
  const handleFecharModal = (e) =>{
    if(e.key === "Enter"){
      setOpen(false);
    }
  }

  useEffect(() => {
    const buscarLandingPage = listagemLandingPagesApi.filter(
      function (obj) {
        if ("id" in obj && obj.id.toString() === LandingPageId.toString()) {
          return true
        } else {
          return false;
        }
      }
    )
    landingPage.current = buscarLandingPage[0];
    console.log('teste');
    handleSetarInformacoes()
  }, [])

  const handleSetarInformacoes = () =>{
    setTitulo(landingPage.current.nome);
    setStatusLandingPage(landingPage.current.ativo);
    setIdentificador(landingPage.current.nome.replace(/ /g, ""));
    
  }

  return (
    <section>
      <TabContext value={value}>
        <Header props={props} />
        <TabPanel value="0" index={0} sx={{ padding: 0 }}>
          <CorpoLandingPage/>
        </TabPanel>
        <TabPanel value="1" index={1} sx={{ padding: 0 }}>
          <p>teste</p>
        </TabPanel>
      </TabContext>
      <Dialog open={open}>
        <DialogTitle>Adicionar nome da Landing page</DialogTitle>
        <DialogContent>
          <DialogContentText>
            O nome será usado para a identificação da sua Landing Page.
          </DialogContentText>
          <TextField
            id="name"
            type="text"
            fullWidth
            variant="standard"
            label="Nome"
            value={titulo}
            maxLength={20}
            onChange={(e) => setTitulo(e.target.value)}
            onKeyDown={(e) => handleFecharModal(e)}
            inputProps={{
              autoComplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default LandingPage;