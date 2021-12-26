import React from "react";
import "./style.css";
import { MdPhone } from "react-icons/md";
import { FaWhatsapp, FaSearch } from "react-icons/fa";
import menuperfil from "../../images/menu-perfil.png";

function MenuTop() {
  return (
    <nav className="nav-principal">
      <div className="nav-div-buscar-leads">
          <FaSearch size="17" className="FaSearch" />
        <input type="search" name="search" placeholder="Buscar Leads" />
      </div>
      <div className="nav-conjuto-lado-direito">
        <MdPhone size="25px" color="white" className="MdPhone" />
        <FaWhatsapp size="27px" color="white" className="FaWhatsapp" />
        <div className="nav-div-menu-perfil">
          <img src={menuperfil} alt="" />
          <div>
            <h4>Suporte Gerente</h4>
            <h5>Gerente</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default MenuTop;
