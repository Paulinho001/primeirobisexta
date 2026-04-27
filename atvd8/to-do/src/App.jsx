import { useState } from 'react'
import './App.css'

function App() {
  // Estado da lista de tarefas
  const [tarefas, setTarefas] = useState([
    { id: Date.now(), text: 'Aprender React Hooks' }
  ])

  // Estado do input controlado
  const [inputValue, setInputValue] = useState('')

  // Adicionar tarefa
  const adicionarTarefa = (e) => {
    e.preventDefault()
    const texto = inputValue.trim()
    if (!texto) return

    const novaTarefa = { id: Date.now(), text: texto }
    setTarefas([...tarefas, novaTarefa]) // atualização imutável
    setInputValue('')
  }

  // Remover tarefa
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id)) // atualização imutável
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-accent" />
          <h1 className="titulo">
            <span className="titulo-num">/{tarefas.length.toString().padStart(2, '0')}</span>
            <span>To-Do</span>
          </h1>
          <p className="subtitulo">suas tarefas, seu ritmo.</p>
        </header>

        <form className="form" onSubmit={adicionarTarefa}>
          <input
            className="input"
            type="text"
            placeholder="Nova tarefa..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn-add" type="submit">
            <span>+</span>
          </button>
        </form>

        <ul className="lista">
          {tarefas.length === 0 && (
            <li className="vazia">Nenhuma tarefa ainda. Adicione uma acima!</li>
          )}
          {tarefas.map((tarefa, index) => (
            <li className="item" key={tarefa.id}>
              <span className="item-index">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="item-texto">{tarefa.text}</span>
              <button
                className="btn-remover"
                onClick={() => removerTarefa(tarefa.id)}
                title="Remover tarefa"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        <footer className="footer">
          {tarefas.length > 0
            ? `${tarefas.length} tarefa${tarefas.length > 1 ? 's' : ''} na lista`
            : 'lista limpa ✓'}
        </footer>
      </div>
    </div>
  )
}

export default App
