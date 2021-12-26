import React from "react";
import "./style.css";

import {
  MdDashboard,
  MdPermContactCalendar,
  MdPeopleAlt,
  MdPersonSearch,
  MdAnalytics,
  MdAttachMoney,
} from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { SiCommonworkflowlanguage } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import logoSpotter from "../../images/logoSpotter.png";

function MenuLeft() {
  const navigate = useNavigate();

  return (
    <>
      <div className="menuLeft">
        <div className="div-lista-ferramentas">
          <div className="nav-div-logo-spotter">
            <img src={logoSpotter} alt="" />
          </div>
          <div className="div-item-menu-left">
            <MdDashboard
              className="dashboard"
              size="25px"
              onClick={() => navigate("/DashBoard")}
            />
          </div>
          <div className="div-item-menu-left">
            <MdPermContactCalendar
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Agenda")}
            />
          </div>
          <div className="div-item-menu-left">
            <MdPeopleAlt
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Leads")}
            />
          </div>
          <div className="div-item-menu-left">
            <MdPersonSearch
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Searching")}
            />
          </div>
          <div className="div-item-menu-left">
            <AiFillBell
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Atividades")}
            />
          </div>
          <div className="div-item-menu-left">
            <IoMdSend
              className="dashboard"
              size="25px"
              onClick={() => navigate("/CadenciaDeEmails")}
            />
          </div>
          <div className="div-item-menu-left">
            <MdAnalytics
              className="dashboard"
              size="25px"
              onClick={() => navigate("/BusinessAnalytics")}
            />
          </div>
          <div className="div-item-menu-left">
            <MdAttachMoney
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Pontuacao")}
            />
          </div>
          <div className="div-item-menu-left">
            <FaPhoneAlt
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Telefonia")}
            />
          </div>
          <div className="div-item-menu-left">
            <SiCommonworkflowlanguage
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Workflow")}
            />
          </div>
          <div className="div-item-menu-left">
            <BsFillGearFill
              className="dashboard"
              size="25px"
              onClick={() => navigate("/Configuracoes")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuLeft;
