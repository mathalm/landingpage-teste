import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom'
import Secundary from '../Secundary';
import InitialPage from '../InitialPage';

export default function Mainroutes(){
    return(
        <Routes>
            <Route path="/Dashboard" element={<InitialPage/>}/>
            <Route path="/Agenda" element={<Secundary/>} />
            <Route path="/Leads" element={<Secundary/>} />
            <Route path="/Searching" element={<Secundary/>} />
            <Route path="/Atividades" element={<Secundary/>} />
            <Route path="/CadenciaDeEmails" element={<Secundary/>} />
            <Route path="/BusinessAnalytics" element={<Secundary/>} />
            <Route path="/Pontuacao" element={<Secundary/>} />
            <Route path="/Telefonia" element={<Secundary/>} />
            <Route path="/Workflow" element={<Secundary/>} />
            <Route path="/Configuracoes" element={<Secundary/>} />
        </Routes>
    )
}
