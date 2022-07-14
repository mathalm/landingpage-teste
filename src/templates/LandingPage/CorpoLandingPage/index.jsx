import React from 'react';
import './styles.css';
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles.css";
import useBuscarLeadsParaGrafico from '../../../Utils/BuscarLeads/index'

Chart.register(...registerables);

function CorpoLandingPage() {
  // const teste = useBuscarLeadsParaGrafico(`https://api.exactsales.com.br/v3/Leads?&filter=origem eq ${teste}`) bug
  const teste = useBuscarLeadsParaGrafico(`https://api.exactsales.com.br/v3/Leads`)
  console.log(teste);
  
  

  return ( 
    <main className='corpo-landing-page-main'>
      <div className='div-metricas'>
        <div className='div-card-metrica-landing-page'>
          <span>Visitantes</span>
          <span className='valor-card-metrica'>52</span>
        </div>
        <div className='div-card-metrica-landing-page'>
          <span>Filtro 1</span>
          <span className='valor-card-metrica'>40</span>
        </div>
        <div className='div-card-metrica-landing-page'>
          <span>Filtro 2</span>
          <span className='valor-card-metrica'>36</span>
        </div>
        <div className='div-card-metrica-landing-page'>
          <span>Qualificados</span>
          <span className='valor-card-metrica'>24</span>
        </div>
        <div className='div-card-metrica-landing-page'>
          <span>Descartados</span>
          <span className='valor-card-metrica'>6</span>
        </div>

      </div>
      <div className='div-principal-landing-page'>
        <div className='div-grafico-linha'>
        <Line
          data={{
            labels: [1,2,3,4,5,6,7,8,9],
            datasets: [
              {
                label: "Conversões",
                data: [1,30,20,40,68,54,60],
                backgroundColor: [
                  "rgba(99, 109, 255, 0.7)",
                ],
                borderWidth: 3,
              }
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Entrada de leads por dia',
              },
            },
          }}
        />
        </div>
        <div className='div-grafico-linha'>
        <Bar
          data={{
            labels: [1,2,3,4,5,6,7,8,9],
            datasets: [
              {
                label: "Conversões",
                data: [30,15,20,50,38,44,60],
                backgroundColor: [
                  "rgba(238, 148, 31, 0.781)",
                ],
                borderWidth: 0,
              }
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Entrada de leads por mês',
              },
            },
          }}
        />
        </div>
      </div>
    </main>
   );
}

export default CorpoLandingPage;