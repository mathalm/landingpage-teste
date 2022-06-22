import React from 'react';
import Header from '../../Utils/HeaderLP';
import './style.css'

function Secundary(){
    const titulo='Qualquer coisa'
    return(
        <div >
            <Header titulo={titulo}/>
            <div className='div-Agenda'>
                <h1>Página secundaria criada por mim</h1>
            </div>
        </div>
    )
}
export default Secundary;