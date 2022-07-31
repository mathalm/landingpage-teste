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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CorpoLandingPage from './CorpoLandingPage';

function LandingPage() {
  const landingPage = useRef({ nome: '', status: 1, identificador: '' });
  const { LandingPageId } = useParams();
  const botoes = ['LandingPage'];
  const [titulo, setTitulo] = useState('');
  const [value, setValue] = React.useState("0");
  const [open, setOpen] = React.useState(false);//mudar aqui para habilitar coleta do nome
  const [identificador, setIdentificador] = useState('');
  const [textoDeAviso, setTextoDeAviso] = React.useState("");
  const [erroTextField, setErroTextField] = React.useState(false);
  const [statusLandingPage, setStatusLandingPage] = useState(false);
  const [todasLandingPages, setTodasLandingPages] = useState([]);
  const [estadoProgresso, setEstadoProgresso] = useState('flex');

  const props = {
    titulo: titulo,
    botoes: botoes,
    value: value,
    statusLandingPage: statusLandingPage,
    identificador: identificador,
    setValue: setValue,
    setOpen: setOpen,
  }
  var teste = {
    error: erroTextField,
    helperText: textoDeAviso
  }
  const handleAtualizarNomeLandingPage = async (novoNome) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "nome": novoNome,
      "status": 1,
      "situacao": 1
    });
    const options = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }
    await fetch(`http://localhost:8080/landingPage/atualizar/${LandingPageId}`, options)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  const handleClose = async () => {
    if (titulo.length <= 3) {
      setTextoDeAviso("Nome deve conter 4 ou mais caracteres.");
      setErroTextField(true);
      return
    }
    handleAtualizarNomeLandingPage(titulo)
    setOpen(false);
    setTextoDeAviso("");
    setErroTextField(false);
  };
  const handleFecharModal = (e) => {
    if (e.key === "Enter") {
      if (titulo.length <= 3) {
        setTextoDeAviso("Nome deve conter 4 ou mais caracteres.");
        setErroTextField(true);
        return
      }
      handleAtualizarNomeLandingPage(titulo)
      setOpen(false);
      setTextoDeAviso("");
      setErroTextField(false);
    }
  }

  useEffect(() => {
    const options = {
      method: 'GET'
    }
    fetch(`http://localhost:8080/landingPage`, options)
      .then(response => response.json())
      .then(results => setTodasLandingPages(results))
      .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    if (todasLandingPages.length === 0) { return }
    const buscarLandingPage = todasLandingPages.filter(
      function (obj) {
        if ("id" in obj && obj.id.toString() === LandingPageId.toString()) {
          return true
        } else {
          return false;
        }
      }
    )
    landingPage.current = buscarLandingPage[0];
    handleSetarInformacoes()
  }, [todasLandingPages]);

  const handleSetarInformacoes = () => {
    setTitulo(landingPage.current.nome);
    setStatusLandingPage(landingPage.current.status);
    setIdentificador(landingPage.current.identificador);
    setTimeout(() => {
      setEstadoProgresso('none')

    }, 1000);
  }

  return (
    <section>
      <TabContext value={value}>
        <Header props={props} />
        <TabPanel value="0" index={0} sx={{ padding: 0 }}>
          <CorpoLandingPage props={props} />
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
            {...teste}
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
      <Box sx={{ position: 'fixed', top: 0, width: '100%', height: '100%', backgroundColor: '#14141434', padding: '0 50px 0 0', display: estadoProgresso, alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </section>
  );
}

export default LandingPage;