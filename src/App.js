import React, { useEffect } from 'react';

import './App.css';

import TextSubmit from './components/TextSubmit';
import Tarefas from './components/Tarefas';

const App = () => {
  const [tarefa, setTarefa] = React.useState('');
  const [tarefas, setTarefas] = React.useState(['Comprar tomate', 'Ir ao treino de futebol', 'Jogar minecraft']);

  // useEffect(() => {
  //   console.log(localStorage.getItem('memory'));
  //   setTarefas(localStorage.getItem('memory'));
  // }, []);
  // localStorage.setItem('memory', tarefas);

  function btnClick() {
    if (!tarefas.includes(tarefa)) {
      if (tarefa.length >= 1) {
        setTarefas([...tarefas, tarefa]);
      }
    }
  }

  return (
    <div className="center">
      <div className="container">
        <TextSubmit setTarefas={setTarefas} tarefas={tarefas} setTarefa={setTarefa} tarefa={tarefa} btnClick={btnClick} />
        <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
      </div>
    </div>
  )
};

export default App;