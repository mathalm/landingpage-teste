import { useState, useEffect } from 'react';

function useBuscarLeadsParaGrafico(url) {
  const [buscarLeads, setBuscarLeads] = useState([]);

  useEffect(() => {
    if (url.lenght > 10) {
      console.log('Obrigatório o filtro na URL');
    } else {
      const headers = new Headers();
      headers.append("Content-Type", "application/son");
      headers.append("token_exact", "a042af31-8bf1-42df-a545-8a92650b0eac");
      const options = {
        method: 'GET',
        headers: headers,
      }
      fetch(url, options)
        .then(response => response.json())
        .then(results => setBuscarLeads(results.value))
        .catch(error => console.log(error))
    }
  },[url]);

  return buscarLeads;
}
export default useBuscarLeadsParaGrafico;
