import React, { useEffect, useState } from 'react';
import './style.css';
import { IoIosAdd } from 'react-icons/io';
const axios = require('axios').default;

function TemplateLpEducacao(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dadosLead, setDadosLead] = useState('')

   const handleMudancaNome = (event) => {
    setName(event.target.value);
    // console.log(nomeCompleto);
  }
   const handleMudancaEmail = (event) => {
    setEmail(event.target.value);
    // console.log(email);
  }
   const handleMudancaNumero = (event) => {
    setPhone(event.target.value);
    // console.log(numero);
  }
  const handleEnvioParaBase = () =>{
    setDadosLead({name,phone})
    console.log(JSON.stringify(dadosLead));
    
  }
  useEffect(()=>{
    const body = dadosLead
    axios.post("https://api.exactsales.com.br/v3/leadsAdd",{
      headers: {'Content-Type':'application/json', 'token_exact':'a042af31-8bf1-42df-a545-8a92650b0eac'},
    body: body
  })
  console.log(body);  
  },[dadosLead])

  return(
    <section>
      <nav className='nav-template-LpEducacao'>
        <div className='div-logo-lpEducacao'>
          <IoIosAdd size={25}/>
          <h2>Seu logo</h2>
        </div>
        <div className='div-menu-direita-lpEducacao'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      <main className='main-template-LpEducacao'>
        <div className='entrada-dados-LpEducacao'>
          <h2>Bem vindo</h2>
          <div className='div-dentro-entrada-LpEducacao' onSubmit={handleEnvioParaBase}>
            <div>
              <label>Nome completo*</label>
              <input type="text"
              onChange={handleMudancaNome} />
            </div>
            <div>
              <label>E-mail*</label>
              <input type="email"
               onChange={handleMudancaEmail} />
            </div>
            <div>
              <label>Telefone*</label>
              <input type="number"
               onChange={handleMudancaNumero} />
            </div>
          </div>
          <div>
            <button onClick={handleEnvioParaBase} >Enviar</button>
          </div>
        </div>
      </main>
    </section>
  )
}
export default TemplateLpEducacao;