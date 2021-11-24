import React from 'react';

import './TextSubmit.css';

const TextSubmit = ({ setTarefas, tarefas, setTarefa, tarefa, btnClick }) => {

    return (
        <div className="text-submit">
            <input
                className="text textsubmit"
                type="text"
                placeholder="Digite sua tarefa"
                value={tarefa}
                onChange={(e) => { setTarefa(e.target.value) }} />
            <button
                className="submit textsubmit"
                onClick={() => {
                    btnClick();
                    if (!tarefas.includes(tarefa)) {
                        if (tarefa.length >= 1) {
                            setTarefa('');
                        }
                    }
                }}
            >Adicionar</button>
        </div>
    )
};


export default TextSubmit;