import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

import React from 'react';
import './Contato.css'; // Importa o CSS aqui

function Contato() { 
  return ( 
    <div className="contato-container"> 
      <h1>ENTRE EM CONTATO!</h1> 
      <p>e-mail: ana_fernandes160@estudante.sesisenai.org.br</p> 
    </div> 
  ); 
} 

export default Contato;

import React from 'react';
import './Home.css'; // Importa o CSS aqui

function Home() {
  return (
    <div className="home-container">
      <h1>Olá, eu sou Ana Luiza F.</h1>
      <p>Sou estudante de Desenvolvimento de Sistemas...</p>
      <p>Bem-vindo ao meu portfólio!</p>
    </div>
  );
}

export default Home;

import React from 'react';
import './Projetos.css'; // Importa o CSS aqui

function Projetos() {
    return (
        <div className="projetos-container">
            <h1>Meus Projetos!</h1>
            
            <div className="projeto-card">
                <h2>Lista de Tarefas</h2>
                <p>Aplicação para organização de tarefas.</p>
                <p className="projeto-tech">Tecnologias: React e JavaScript.</p>
            </div>

            <div className="projeto-card">
                <h2>EduVerse</h2>
                <p><strong>Descrição:</strong> Uma plataforma educacional gamificada em realidade virtual voltada para o ensino de história e ciências. Os alunos podem visitar laboratórios virtuais ou reconstruções históricas, tornando o aprendizado imersivo e interativo.</p>
                <p className="projeto-tech">Tecnologias: Unity 3D (motor gráfico), C# (programação), Blender (modelagem 3D) e WebRTC (para interações multijogador em tempo real).</p>
            </div>

            <div className="projeto-card">
                <h2>GaragemNacional: O Acervo do Rock Independente</h2>
                <p><strong>Descrição:</strong> Uma plataforma web colaborativa que funciona como um arquivo digital e vitrine para bandas de rock nacional independente (do passado e do presente). O site permite que artistas independentes cadastrem suas biografias, discografias completas, letras de música e links de streaming. Usuários podem favoritar bandas, criar playlists, consultar uma agenda unificada de shows independentes por região e resgatar a história de bandas de garagem que nunca chegaram às grandes gravadoras.</p>
                <p className="projeto-tech">Tecnologias: Nuxt.js, Node.js, PostgreSQL e AWS S3.</p>
            </div>
        </div>
    );
}

export default Projetos;

import React from 'react';
import './Sobre.css'; // Importa o CSS aqui

function Sobre() {
  return (
    <div className="sobre-container">
      <h1>Sobre Mim</h1>
      <p><strong>NOME:</strong> Ana Luiza Fernandes.</p>
      <p><strong>CURSO:</strong> Desenvolvimento de Sistemas.</p>
      <p><strong>INTERESSES:</strong> Desenvolvimento Web...</p>
      <p><strong>TECNOLOGIAS:</strong> JS...</p>
      <p><strong>APRENDER:</strong> Desenvolvimento de Jogos...</p>
    </div>
  );
}

export default Sobre;
