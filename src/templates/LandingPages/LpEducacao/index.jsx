import React, {  useState } from 'react';
import ConfiguracaoLandingPage from '../../../Utils/Configuracao';
import Header from '../../../Utils/HeaderLP';
import TemplateLpEducacao from './TemplateLpEducacao';
import { TabContext, TabPanel } from '@mui/lab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './style.css'

function LpEducacao() {
  const [titulo, setTitulo]  = useState('')

  const botoes = ['Layout', 'Configuração']
  const [dadosConfiguracaoLandingPage, setDadosConfiguracaoLandingPage] = useState({})
  const [value, setValue] = React.useState("0");
  const [open, setOpen] = React.useState(true);//mudar aqui para habilitar coleta do nome

  const props = {
    titulo: titulo,
    dadosConfiguracaoLandingPage,
    botoes: botoes,
    setValue: setValue,
    value: value,
    setOpen: setOpen
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
  return (
    < section >
      <TabContext value={value}>
        <Header props={props} />
        <TabPanel value="0" index={0} sx={{ padding: 0 }}>
          <TemplateLpEducacao setDadosConfiguracaoLandingPage={setDadosConfiguracaoLandingPage} />
        </TabPanel>
        <TabPanel value="1" index={1}>
          <ConfiguracaoLandingPage />
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
    </section >
  )
}
export default LpEducacao;