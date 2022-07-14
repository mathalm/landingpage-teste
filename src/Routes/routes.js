import React from "react";
import { Routes, Route } from "react-router-dom";
import Secundary from "../components/Secundary";
import InitialPage from "../components/InitialPage";
import LandingPages from "../components/LandingPages";
import CriarLP from "../templates/CriarLP";
import LpEducacao from "../templates/LandingPages/LpEducacao";
import LandingPage from "../templates/LandingPage";
export default function Mainroutes() {
  return (
    <Routes>
      {/* Menu left */}
      <Route path="/Dashboard" element={<InitialPage />} />
      <Route path="/Agenda" element={<Secundary />} />
      <Route path="/Leads" element={<Secundary />} />
      <Route path="/Searching" element={<Secundary />} />
      <Route path="/Atividades" element={<Secundary />} />
      <Route path="/CadenciaDeEmails" element={<Secundary />} />
      <Route path="/BusinessAnalytics" element={<Secundary />} />
      <Route path="/Pontuacao" element={<Secundary />} />
      <Route path="/Telefonia" element={<Secundary />} />
      <Route path="/Workflow" element={<Secundary />} />
      <Route path="/Configuracoes" element={<Secundary />} />
      <Route path="/LandingPages" element={<LandingPages />} />
      <Route path="/LandingPage" element={<LandingPage />}>
        <Route path=":LandingPageId" element={<LandingPage />} />
      </Route>
      {/* Button Criar LP */}
      <Route path="/CriarLP" element={<CriarLP />} />
      {/* Rotas das LP's prontas */}
      <Route path="/Layout/Ebook" element={<LpEducacao />} />
      {/* Unica Landing Page */}
    </Routes>
  );
}
