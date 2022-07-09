import React, { useEffect, useState } from 'react';
import './styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiArrowUpDownFill } from 'react-icons/ri';
import listagemLandingPagesApi from '../../../listagemLandingPage.json'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiPencilFill } from 'react-icons/ri'
import { HiDuplicate } from 'react-icons/hi'
import { AiFillDatabase, AiOutlineSearch } from 'react-icons/ai'
import { RiFilter3Line } from 'react-icons/ri'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ExcluirLandingPage from '../../../Utils/ExcluirLandingPage';
import { useNavigate } from "react-router-dom";

function DashLandingExistentes() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [valorFiltro, setvalorFiltro] = useState('');
  const [landingPages, setLandingPages] = useState([]);
  const [landingPagesInical, setLandingPagesInicial] = useState([]);
  const [idLandingPage, setIdLandingPage] = useState();
  const navigate = useNavigate();

  const props = {
    landingPages:landingPages,
    setLandingPages:setLandingPages,
    idLandingPage:idLandingPage,
    setAnchorEl:setAnchorEl,
    setLandingPagesInicial:setLandingPagesInicial
  }

  const open = Boolean(anchorEl);
  const handleClick = (id, event) => {
    setAnchorEl(event.currentTarget);
    setIdLandingPage(id)

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setLandingPages(listagemLandingPagesApi);
    setLandingPagesInicial(listagemLandingPagesApi);
  }, [])

  useEffect(() => {
    if (valorFiltro.length > 3) {
      const filtroListagemLandingPage = landingPages.filter((obj) => {
        if ("nome" in obj && obj.nome.toLowerCase().includes(valorFiltro.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
      console.log('Aqui');
      setLandingPages(filtroListagemLandingPage);
    } else {
      console.log('setou');
      setLandingPages(listagemLandingPagesApi);
    }
  }, [valorFiltro])

  const handleAbrirMenuOpcoes = () => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ boxShadow: 'none' }}
      >
        <MenuItem className="menu-item-acoes-landing-page" onClick={()=> navigate("/LandingPages/LandingPage")}>
          <RiPencilFill size={24} /> <span className='span-menu-item-acoes-landing-page'>Editar</span>
        </MenuItem>
        <MenuItem className="menu-item-acoes-landing-page" onClick={handleClose}>
          <HiDuplicate size={24} /> <span className='span-menu-item-acoes-landing-page'>Duplicar</span>
        </MenuItem>
        <MenuItem className="menu-item-acoes-landing-page" onClick={handleClose}>
          <AiFillDatabase size={24} /> <span className='span-menu-item-acoes-landing-page'>Levantamento</span>
        </MenuItem>
        <Divider />
        <MenuItem className="menu-item-acoes-landing-page">
          <ExcluirLandingPage props={props} />
        </MenuItem>
      </Menu>
    )
  }

  return (
    <section className='dash-lp-existentes'>
      <div className='div-buscar-landing-pages'>
        <div className='div-textField-buscar-landing-pages'>
          <AiOutlineSearch size={25} />
          <TextField
            id="standard-search"
            label="Buscar por landing page"
            type="search"
            variant="standard"
            fullWidth
            sx={{ fontSize: "10px" }}
            onChange={(e) => setvalorFiltro(e.target.value)}
          />
        </div>
        <div className='div-filtro-buscar-landing-pages'>
          <RiFilter3Line size={25} />
        </div>
      </div>
      <TableContainer component={Paper} className='table-container' >
        <Table sx={{ minWidth: 200 }} aria-label="a dense table " stickyHeader size='medium'>
          <TableHead>
            <TableRow>
              <TableCell align="left">Nome <RiArrowUpDownFill /></TableCell>
              <TableCell align="center">Status <RiArrowUpDownFill /></TableCell>
              <TableCell align="center">Leads convertidos</TableCell>
              <TableCell align="center">Data de criação <RiArrowUpDownFill /></TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {landingPages.map((landingPage, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="left">{landingPage.nome}</TableCell>
                  <TableCell align="center">{landingPage.ativo ? "Ativado" : "Desativado"}</TableCell>
                  <TableCell align="center">{landingPage.leads}</TableCell>
                  <TableCell align="center">{landingPage.dataDeCriacao}</TableCell>
                  <TableCell align="left">
                    <div className='acoes-tabela-usuario'>
                      <MdKeyboardArrowDown size={25} onClick={(e) => handleClick(landingPage.id, e)} className="botao-acoes-landing-page" />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
            {handleAbrirMenuOpcoes()}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default DashLandingExistentes;