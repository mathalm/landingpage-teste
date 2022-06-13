import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { BsPlusCircleFill } from 'react-icons/bs'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './style.css';

function TemplateLpEducacao() {

  const [image, setImage] = useState();
  const [definirSrcImage, setDefinirSrcImage] = useState(true);
  const [camposPersonalizados, setCamposPersonalizados] = useState([]);
  const [camposSelecionados, setCamposSelecionados] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/son");
    headers.append("token_exact", "f930e289-4dbb-4f73-bd27-f733d1d7d958");
    const options = {
      method: 'GET',
      headers: headers,
    }
    fetch('https://api.exactsales.com.br/v3/fields', options)
      .then(response => response.json())
      .then(results => setCamposPersonalizados(results.value))
      .catch(error => console.log(error))
  }, []);

  const handleRetornarCamposPersonalizadosDisponíveis = () => {
    return (
      camposPersonalizados.map((campo, index) => {
        return (
          <div key={campo.id}>
            <Checkbox checked={camposSelecionados.includes(campo.name) ? true : false} inputProps={{ 'aria-label': 'controlled' }} onChange={() => { handleMudarValorCheck(campo.name) }} />
            {campo.name} {campo.id}
          </div>
        )
      })
    )
  }
  const handleMudarValorCheck = (campo) => {
    if (camposSelecionados.includes(campo)) {
      const index = camposSelecionados.indexOf(campo);
      console.log(index);
      const teste = camposSelecionados.splice(index, 1)
      console.log(teste);
      setCamposSelecionados([...camposSelecionados])
      return
    } else {
      console.log(campo);
      setCamposSelecionados([...camposSelecionados, campo])
    }
  }

  const handleCamposPersonalizadosEscolhidos = () => {
    return (
      camposSelecionados.map((campo, index) => {
        return (
          <div key={index} className='div-engloba-div-input'>
            <div >
              <label htmlFor='outlined-basic name' >{campo}:</label>
              <TextField id="outlined-basic name" variant="outlined" color='primary' sx={{ background: '#F0F0F0', borderRadius: '3px' }} size="small" />
            </div>
          </div>)
      })
    )
  }

  const handleInputImg = (event) => {
    setDefinirSrcImage(false)
    console.log(definirSrcImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  return (
    <section className='main-template-LpEducacao'>
      <div className='div-lp-educacao'>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} onChange={handleInputImg} />
          <Button variant="contained" component="span" sx={image ? { display: 'none' } : { display: 'block' }} >
            Adicionar logo
          </Button>
          {image ?
            <img src={image} alt="foto Inicial" className='img-logo-empresa' />
            : null
          }
        </label>
      </div>
      <div className='div-cabecalho-lp-educacao'>
        <div className='div-cabecalho-lp-educacao-apresentacao'>
          <div>
            <textarea defaultValue={"[EBook]"} className='textarea-titulo'></textarea>
            <h4>Como estudar para a faculdade dos sonhos?</h4>
          </div>
          <p>Você está a um passo de viajar, realizar seu sonho de infância, mas ainda tem dificuldades em guardar dinheiro para a tão sonhada trip. Esse EBook foi feito para você!</p>
        </div>
        <div className='div-cabecalho-lp-educacao-entrada-dados'>
          <div className='div-textarea'>
            <textarea defaultValue={'Preencha o formulário para receber novidades! 🤩'}></textarea>
          </div>
          <div className='div-engloba-textfield'>
            <div className='div-engloba-div-input'>
              <div>
                <label htmlFor='outlined-basic name' >Nome:</label>
                <TextField id="outlined-basic name" variant="outlined" color='primary' sx={{ background: '#F0F0F0', borderRadius: '3px' }} size="small" />
              </div>
            </div>
            <div className='div-engloba-div-input'>
              <div>
                <label htmlFor='outlined-basic email'>E-mail:</label>
                <TextField id="outlined-basic email" variant="outlined" color='primary' sx={{ background: '#F0F0F0', borderRadius: '3px' }} size="small" />
              </div>
            </div>
            <div className='div-engloba-div-input'>
              <div>
                <label htmlFor='outlined-basic telefone'>Telefone:</label>
                <TextField id="outlined-basic telefone" variant="outlined" color='primary' sx={{ background: '#F0F0F0', borderRadius: '3px' }} size="small" />
              </div>
            </div>
            {handleCamposPersonalizadosEscolhidos()}
            <div className='div-botao-adicionar-campo'>
              <Tooltip title="Adicionar campos personalizados" placement="right" arrow>
                <IconButton onClick={handleClickOpen}>
                  <BsPlusCircleFill className='BsPlusCircleFill' />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className='div-checkbox-consentimento'>
            <Checkbox />
            <p>Ao informar meus dados, eu concordo com a Política de Privacidade.</p>
          </div>
          <div>
            <Button variant="contained" component="span">
              Receber novidades
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>Escolher campo personalizado</DialogTitle>
        <DialogContent>
          {handleRetornarCamposPersonalizadosDisponíveis()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Pronto</Button>
        </DialogActions>
      </Dialog>
    </section>
  )
}
export default TemplateLpEducacao;