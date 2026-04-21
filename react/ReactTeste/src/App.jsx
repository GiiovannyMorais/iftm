import React from 'react';
import Card from './Card';
import Acesso from './Acesso';

function App() {
  return (
    <>
    <div className='acesso'>
    <Acesso/>
    <div className='container'> 
    <Card titulo= "Plano de Desenvolvimento Institucional"/>
    <Card titulo= "Pesquisa Pública Processos IFTM"/>
    <Card titulo= "Licitações e Contratos"/>
    <Card titulo= "Receitas e Despesas"/>
    <Card titulo= "Dados Abertos"/>
    <Card titulo= "Transparência e prestação de contas"/>
    <Card titulo= "Servidores"/>
    <Card titulo= "Perguntas Frequentes"/>
    </div>
    </div>
    </>
  );
}

export default App; 