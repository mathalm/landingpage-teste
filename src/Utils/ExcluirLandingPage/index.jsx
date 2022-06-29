import React from 'react';
import { IoMdTrash} from 'react-icons/io'

function ExcluirLandingPage({props}) {
  const idLandingPage = props.idLandingPage
  const landingPages = props.landingPages
  const setLandingPages = props.setLandingPages

  const handleExcluirLandingPage = () =>{
    console.log(idLandingPage, 'teste');
    
    setLandingPages(
      landingPages.filter((obj) =>{
        if("id" in obj && obj.id !== idLandingPage){
          return true
        }else{
          console.log("false");
          return false
        }
      })
    );
  }

  return (
    
      <div onClick={handleExcluirLandingPage}>
        <IoMdTrash size={24} /> <span className='span-menu-item-acoes-landing-page'>Excluir</span>
      </div>
  );
}

export default ExcluirLandingPage;