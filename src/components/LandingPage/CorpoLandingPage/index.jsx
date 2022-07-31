import React, { useEffect, useState } from 'react';
import './styles.css';
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles.css";
// import useBuscarLeadsParaGrafico from '../../../Hooks/BuscarLeads/index'

Chart.register(...registerables);

function CorpoLandingPage({ props }) {

  const [leads, setLeads] = useState([]);
  const [buscarLeads, setBuscarLeads] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/son");
    headers.append("token_exact", "a042af31-8bf1-42df-a545-8a92650b0eac");
    const options = {
      method: 'GET',
      headers: headers,
    }
    fetch(`https://api.exactsales.com.br/v3/Leads`, options)
        .then(response => response.json())
        .then(results => setBuscarLeads(results.value))
        .catch(error => console.log(error))
    
  }, []);

  useEffect(() => {
    setLeads(buscarLeads.sort((dateA, dateB) => {
      if (dateA.registerDate < dateB.registerDate) {
        return 1;
      } else if (dateA.registerDate > dateB.registerDate) {
        return -1;
      } else {
        return 0;
      }
    }));

  }, [buscarLeads])

  const handleListarListaDeLeads = () => {
    return (
      leads.map((lead, index) => {
        var registro = new Date(lead.registerDate);
        var dia = ("0" + (registro.getDate())).slice(-2);
        var mes = ("0" + (registro.getMonth())).slice(-2);
        var ano = registro.getFullYear();
        var horas = ("0" + (registro.getHours())).slice(-2);
        var minutos = ("0" + (registro.getMinutes())).slice(-2);
        return (
          <div className='div-listando-leads' key={index}>
            <a href={`https://app.exactsales.com.br/spotter/detalhes-lead/${lead.id}`} target="_blank" rel="noopener noreferrer"><span>{lead.lead}</span></a>
            <div>
              <p>Data de entrada: {`${dia}/${mes}/${ano} ${horas}:${minutos}`}</p>
            </div>
          </div>
        )
      })
    )
  }



  return (
    <main className='corpo-landing-page-main'>
      <div className='div-metricas'>
        <div className='div-card-metrica-landing-page'>
          <span>Visitantes</span>
          <span className='valor-card-metrica'>52</span>
        </div>
        <div className='div-card-metrica-landing-page'>
          <span>Convertidos</span>
          <span className='valor-card-metrica'>52</span>
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
        <div className='div-grafico-linha div-card-leads'>
          {handleListarListaDeLeads()}
        </div>
        <div className='div-grafico-linha'>
          <Line
            data={{
              labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
              datasets: [
                {
                  label: "Visitas",
                  data: [25, 50, 39, 22, 38, 59, 46, 51, 45, 21, 34, 39],
                  backgroundColor: [
                    "rgba(238, 148, 31, 0.822)",
                  ],
                  borderWidth: 3,
                },
                {
                  label: "Conversões",
                  data: [20, 45, 29, 19, 33, 49, 36, 51, 29, 18, 27, 31],
                  backgroundColor: [
                    "rgba(31, 34, 238, 0.342)",
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
                  text: 'Desempenho Landing Page',
                },
              },
            }}
          />
        </div>

      </div>
      <div className='div-principal-landing-page'>
        <div className='div-grafico-linha div-grafico-barra '>
          <Bar
            data={{
              labels: ["08:00", "10:00", "13:00", "16:00", "19:00", "21:00"],
              datasets: [
                {
                  label: "Visitas",
                  data: [25, 50, 39, 22, 38, 59, 46, 51, 45],
                  backgroundColor: [
                    "rgba(31, 138, 238, 0.822)",
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
                  text: 'Frequencia por horário',
                },
              },
            }}
          />
        </div>
        <div className='div-grafico-linha div-grafico-barra '>
          <Bar
            data={{
              labels: ["08:00", "10:00", "13:00", "16:00", "19:00", "21:00"],
              datasets: [
                {
                  label: "Visitas",
                  data: [25, 50, 39, 22, 38, 59, 46, 51, 45],
                  backgroundColor: [
                    "rgba(172, 31, 238, 0.527)",
                  ],
                  borderWidth: 3,
                },
                {
                  label: "Visitas",
                  data: [25, 50, 39, 22, 38, 59, 46, 51, 45],
                  backgroundColor: [
                    "rgba(31, 238, 93, 0.822)",
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
                  text: 'Frequencia por horário',
                },
              },
            }}
          />
        </div>
        <div className='div-grafico-linha div-grafico-barra '>
          <Bar
            data={{
              labels: ["08:00", "10:00", "13:00", "16:00", "19:00", "21:00"],
              datasets: [
                {
                  label: "Visitas",
                  data: [25, 50, 39, 22, 38, 59, 46, 51, 45],
                  backgroundColor: [
                    "rgba(245, 115, 132, 0.822)",
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
                  text: 'Frequencia por horário',
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