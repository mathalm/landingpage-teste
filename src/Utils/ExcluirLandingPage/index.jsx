import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ExcluirLandingPage({ props }) {
  const idLandingPage = props.idLandingPage
  const landingPages = props.landingPages
  const setLandingPages = props.setLandingPages
  const setAnchorEl = props.setAnchorEl
  const setLandingPagesInicial = props.setLandingPagesInicial

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExcluirLandingPage = () => {

    const landingPageExcluida = landingPages.filter((obj) => {
      if ("id" in obj && obj.id !== idLandingPage) {
        return true
      } else {
        console.log("false");
        return false
      }
    })
    setLandingPages(landingPageExcluida);
    setLandingPagesInicial(landingPageExcluida);
    setAnchorEl(null)
  }

  return (
    <div>
      <div onClick={handleClickOpen}>
        <IoMdTrash size={24} /> <span className='span-menu-item-acoes-landing-page'>Excluir</span>
      </div>
      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Excluir Landing Page"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação excluirá a Landing Page e não será possível recupera-lá.<br/>
            Tem certeza que deseja excluir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleExcluirLandingPage}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}

export default ExcluirLandingPage;