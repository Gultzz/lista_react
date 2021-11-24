import React from 'react';

import './Tarefa.css';

const Tarefas = ({ tarefas, setTarefas }) => {

    function TarefaDel(tarefa) {
        let tarefasNova = [...tarefas];
        tarefasNova.splice(tarefas.indexOf(tarefa), 1);
        setTarefas(tarefasNova);
    }

    let tarefass = [];

    //?     Metodo 1

    for (let tarefa of tarefas) {
        tarefass = [...tarefass,
        <div className="tarefa">
            <p className="tarefaText">{tarefa}</p>
            <p className="tarefaDel" onClick={() => { TarefaDel(tarefa) }}>X</p>
        </div>
        ];
    }

    //?     Metodo 2
    // for (let i = 0; i < tarefas.length; i++) {
    //     tarefass = [...tarefass,
    //     <div key={i} className="tarefa">
    //         <p className="tarefaText">{tarefas[i]}</p>
    //         <p className="tarefaDel" onClick={() => { TarefaDel(tarefas[i]) }}>X</p>
    //     </div>
    //     ];
    // }

    //?     Metodo 3(não funciona com localstorage)
    // tarefas.forEach((tarefa) => {
    //     tarefass = [...tarefass,
    //     <div className="tarefa">
    //         <p className="tarefaText">{tarefa}</p>
    //         <p className="tarefaDel" onClick={() => { TarefaDel(tarefa) }}>X</p>
    //     </div>
    //     ];
    // });
    return (
        <div className="container2">{tarefass}</div>
    )
};

export default Tarefas;