// import { useState, useEffect } from 'react';

// async function useBuscarLeadsParaGrafico(url) {
//   const [buscarLeads, setBuscarLeads] = useState([]);

//   if (url.lenght > 10) {
//     console.log('Obrigatório o filtro na URL');
//   } else {
//     const headers = new Headers();
//     headers.append("Content-Type", "application/son");
//     headers.append("token_exact", "a042af31-8bf1-42df-a545-8a92650b0eac");
//     const options = {
//       method: 'GET',
//       headers: headers,
//     }
//     await fetch(url, options)
//       .then(response => response.json())
//       .then(results => setBuscarLeads(results.value))
//       .catch(error => console.log(error))
//   }


//   return buscarLeads;
// }
// export default useBuscarLeadsParaGrafico;
