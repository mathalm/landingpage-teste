import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import ListagemCamposPersonalizados from '../../../../Utils/ListagemCamposPersonalizados';
import './style.css';

function TemplateLpEducacao({setDadosConfiguracaoLandingPage}) {

  const [image, setImage] = useState();
  const [camposSelecionados, setCamposSelecionados] = useState([]);
  const tituloApresentacao = useRef('[Ebook]');
  const subTituloApresentacao = useRef('Como estudar para a faculdade dos sonhos?');
  const paragrafoApresentacao = useRef('Você está a um passo de viajar, realizar seu sonho de infância, mas ainda tem dificuldades em guardar dinheiro para a tão sonhada trip. Esse EBook foi feito para você!');
  const tituloEntradaDados = useRef('Preencha o formulário para receber novidades! 🤩');

  const propsCamposPersonalizados = {
    camposSelecionados:camposSelecionados,
    setCamposSelecionados:setCamposSelecionados
  }

  useEffect(() =>{
    setDadosConfiguracaoLandingPage({
      tituloApresentacao:tituloApresentacao.current,
      tituloEntradaDados:tituloEntradaDados.current,
      camposSelecionados:camposSelecionados,
      subTituloApresentacao:subTituloApresentacao.current,
      paragrafoApresentacao:paragrafoApresentacao.current
    });
    
  },[tituloApresentacao,tituloEntradaDados, camposSelecionados,subTituloApresentacao,paragrafoApresentacao])

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
            <textarea onChange={(e) => {tituloApresentacao.current = e.target.value}}  defaultValue={tituloApresentacao.current} className='textarea-titulo'></textarea>
            <textarea  onChange={(e) => {subTituloApresentacao.current = e.target.value}}  defaultValue={subTituloApresentacao.current} className="subtitulo-apresentacao"></textarea>
          </div>
          <textarea  onChange={(e) => {paragrafoApresentacao.current = e.target.value}}  defaultValue={paragrafoApresentacao.current} className="paragrafo-apresentacao" ></textarea >
        </div>
        <div className='div-cabecalho-lp-educacao-entrada-dados'>
          <div className='div-textarea'>
            <textarea onChange={(e) => {tituloEntradaDados.current = e.target.value}}  defaultValue={tituloEntradaDados.current}></textarea>
          </div>
          <div className='div-engloba-textfield'>
            <div className='div-engloba-div-input'>
              <div>
                <label htmlFor='outlined-basic name'>Nome:</label>
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
            <ListagemCamposPersonalizados propsCamposPersonalizados={propsCamposPersonalizados}/>
          </div>
          <div className='div-checkbox-consentimento'>
            <Checkbox />
            <p>Ao informar meus dados, eu concordo com a Política de Privacidade.</p>
          </div>
          <div>
            <Button variant="contained" component="span" onClick={() =>console.log(tituloApresentacao.current, '+', tituloEntradaDados.current)}>
              Receber novidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TemplateLpEducacao;
