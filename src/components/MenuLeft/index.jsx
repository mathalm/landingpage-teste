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
import { FaPhoneAlt,  } from "react-icons/fa";
import { SiCommonworkflowlanguage } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
import { RiPagesFill} from "react-icons/ri";

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
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/DashBoard")}
          >
            <MdDashboard className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Dashboard</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Agenda")}
          >
            <MdPermContactCalendar className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Agenda</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Leads")}
          >
            <MdPeopleAlt className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Leads</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Searching")}
          >
            <MdPersonSearch className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Searching</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Atividades")}
          >
            <AiFillBell className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Atividades</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/CadenciaDeEmails")}
          >
            <IoMdSend className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Cadência de E-mails</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/BusinessAnalytics")}
          >
            <MdAnalytics className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Business Analytics</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Pontuacao")}
          >
            <MdAttachMoney className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Pontuação</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Telefonia")}
          >
            <FaPhoneAlt className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Telefonia</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Workflow")}
          >
            <SiCommonworkflowlanguage className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Workflow</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/RetornoLP")}
          >
            <RiPagesFill className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Landing Page</span>
            </div>
          </div>
          <div
            className="div-item-menu-left"
            onClick={() => navigate("/Configuracoes")}
          >
            <BsFillGearFill className="icon-span" size="25px" />
            <div className="div-span-name-menu">
              <span className="icon-span">Configuraçõe</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default MenuLeft;
