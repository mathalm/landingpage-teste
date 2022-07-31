import React, { useEffect, useState } from 'react';
import './styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import listagemLandingPagesApi from '../../../listagemLandingPage.json'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { RiPencilFill } from 'react-icons/ri'
import { HiDuplicate } from 'react-icons/hi'
import { AiFillDatabase, AiOutlineSearch } from 'react-icons/ai'
import { RiFilter3Line } from 'react-icons/ri'
import { MdViewQuilt } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ExcluirLandingPage from '../../../Utils/ExcluirLandingPage';
import arraySort from 'array-sort'
import { useNavigate } from "react-router-dom";

function DashLandingExistentes() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [valorFiltro, setvalorFiltro] = useState('');
  const [landingPages, setLandingPages] = useState([]);
  // const [landingPagesInical, setLandingPagesInicial] = useState([]);
  const [idLandingPage, setIdLandingPage] = useState();
  const [colunaOrdenada, setColunaOrdenada] = useState('dataDeCriacao');
  const navigate = useNavigate();

  const props = {
    landingPages: landingPages,
    setLandingPages: setLandingPages,
    idLandingPage: idLandingPage,
    setAnchorEl: setAnchorEl
    // setLandingPagesInicial:setLandingPagesInicial
  }

  const open = Boolean(anchorEl);
  const handleClick = (id, event) => {
    setAnchorEl(event.currentTarget);
    setIdLandingPage(id);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const options = {
      method: 'GET'
    }
    fetch(`http://localhost:8080/landingPage`, options)
      .then(response => response.json())
      .then(results => setLandingPages(results))
      .catch(error => console.log(error))

    console.log(landingPages);

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
      setLandingPages(filtroListagemLandingPage);
    } else {
      // setLandingPages(listagemLandingPagesApi);
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
        <MenuItem className="menu-item-acoes-landing-page" onClick={() => navigate(`/LandingPage/${idLandingPage}`)}>
          <MdViewQuilt size={24} /> <span className='span-menu-item-acoes-landing-page'>Ver</span>
        </MenuItem>
        <MenuItem className="menu-item-acoes-landing-page">
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
  const handleOrdernarColuna = (nomeDaColuna) => {
    setColunaOrdenada(nomeDaColuna);
    if (nomeDaColuna !== colunaOrdenada) {
      switch (nomeDaColuna) {
        case 'nome':
          console.log('aqui boa');
          setLandingPages(arraySort(landingPages, 'nome'))
          break;
        case 'status':
          console.log('aqui boa status');
          setLandingPages(arraySort(landingPages, 'status'))
          break;
        case 'dataDeCriacao':
          console.log('aqui boa data');
          setLandingPages(arraySort(landingPages, 'dataDeCriacao'))
          break;
        case 'leads':
          console.log('aqui boa leads');
          setLandingPages(arraySort(landingPages, 'leads'))
          break;
        default:
          break;
      }
    } else {

      switch (nomeDaColuna) {
        case 'nome':
          console.log('aqui ruim');
          setLandingPages(arraySort(landingPages, 'nome', { reverse: true }))
          break;
        case 'status':
          console.log('aqui ruim status');
          setLandingPages(arraySort(landingPages, 'status', { reverse: true }))
          break;
        case 'dataDeCriacao':
          console.log('aqui ruim data');
          setLandingPages(arraySort(landingPages, 'dataDeCriacao', { reverse: true }))
          break;
        case 'leads':
          console.log('aqui ruim leads');
          setLandingPages(arraySort(landingPages, 'leads', { reverse: true }))
          break;
        default:
          break;
      }
    }
  };

  const handleConfigurarHora = (data) =>{
    var novaData = new Date(data);
    var dia = novaData.getDay() > 9 ? novaData.getDay() : '0'+ novaData.getDay();
    var mes = novaData.getMonth()> 9 ? novaData.getMonth() : '0'+ novaData.getMonth();
    var hora = novaData.getHours() > 9 ? novaData.getHours() : '0'+ novaData.getHours();
    var minuto = novaData.getMinutes() > 9 ? novaData.getMinutes() : '0'+ novaData.getMinutes();
    var dataConfigurada = `${dia}/${mes}/${novaData.getFullYear()} ${hora}:${minuto}`
    return dataConfigurada

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
            sx={{ fontSize: "10px", margin: '0 5px' }}
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
              <TableCell align="left" onClick={() => { handleOrdernarColuna('nome') }}>Nome <RiArrowUpDownFill /></TableCell>
              <TableCell align="center" onClick={() => { handleOrdernarColuna('status') }}>Status <RiArrowUpDownFill /></TableCell>
              <TableCell align="center" onClick={() => { handleOrdernarColuna('leads') }}>Leads convertidos <RiArrowUpDownFill /></TableCell>
              <TableCell align="center" onClick={() => { handleOrdernarColuna('dataDeCriacao') }}>Data de criação <RiArrowUpDownFill /></TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {landingPages.map((landingPage, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="left">{landingPage.nome}</TableCell>
                  <TableCell align="center">{landingPage.ativo ? "Ativado" : "Desativado"}</TableCell>
                  <TableCell align="center">{landingPage.quantidadeDeLeadsConvertidos}</TableCell>
                  <TableCell align="center">{handleConfigurarHora(landingPage.createdAt)}</TableCell>
                  <TableCell align="left">
                    <div className='acoes-tabela-usuario'>
                      <BiDotsVerticalRounded size={25} onClick={(e) => handleClick(landingPage.id, e)} className="botao-acoes-landing-page" />
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