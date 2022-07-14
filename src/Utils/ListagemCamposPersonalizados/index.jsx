import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { BsPlusCircleFill } from 'react-icons/bs'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function ListagemCamposPersonalizados({ propsCamposPersonalizados }) {
  const [open, setOpen] = useState(false);
  const [camposPersonalizados, setCamposPersonalizados] = useState([]);
  const camposSelecionados = propsCamposPersonalizados.camposSelecionados;
  const setCamposSelecionados = propsCamposPersonalizados.setCamposSelecionados;

  const handleClickOpen = () => {
    setOpen(true);
    handleBuscarCamposPersonalizados();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

  }, []);
  const handleBuscarCamposPersonalizados = () => {
    if(camposPersonalizados.length > 1) {return}
    const headers = new Headers();
    headers.append("Content-Type", "application/son");
    headers.append("token_exact", "a042af31-8bf1-42df-a545-8a92650b0eac");
    const options = {
      method: 'GET',
      headers: headers,
    }
    fetch('https://api.exactsales.com.br/v3/fields', options)
      .then(response => response.json())
      .then(results => setCamposPersonalizados(results.value))
      .catch(error => console.log(error))
  }

  const handleRetornarCamposPersonalizadosDisponíveis = () => {
    return (
      camposPersonalizados.map((campo, index) => {
        return (
          <div key={campo.id}>
            <Checkbox checked={camposSelecionados.includes(campo.name) ? true : false} inputProps={{ 'aria-label': 'controlled' }} onChange={() => { handleMudarValorCheck(campo.name) }} />
            {campo.name}
          </div>
        )
      })
    )
  }
  const handleMudarValorCheck = (campo) => {
    if (camposSelecionados.includes(campo)) {
      const index = camposSelecionados.indexOf(campo);
      camposSelecionados.splice(index, 1);
      setCamposSelecionados([...camposSelecionados]);
      return
    } else {
      setCamposSelecionados([...camposSelecionados, campo]);
    }
  }

  return (
    <div>
      < div className='div-botao-adicionar-campo' >
        <Tooltip title="Adicionar campos personalizados" placement="right" arrow>
          <IconButton onClick={handleClickOpen}>
            <BsPlusCircleFill className='BsPlusCircleFill' />
          </IconButton>
        </Tooltip>
      </div >
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>Escolher campo personalizado</DialogTitle>
        <DialogContent>
          {handleRetornarCamposPersonalizadosDisponíveis()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Pronto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListagemCamposPersonalizados;