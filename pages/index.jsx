import { useState } from 'react'

export default function ToDo() {
  const [tasks, setTasks] = useState([])

  const addTodo = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    setTasks([...tasks, { name: data.get('task'), finished: false }])
    event.currentTarget.reset()
  }

  const checkTodo = (i) => {
    setTasks(
      tasks.map((t, j) => {
        if (j === i) t.finished = !t.finished
        return t
      })
    )
  }

  const checkItemStyle = {
    textDecoration: 'line-through',
  }

  return (
    <>
      <h1>ToDo</h1>

      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          flex: '0 0 0.2rem',
        }}>
        {tasks.map((t, i) => (
          <div key={i} style={t.finished ? checkItemStyle : {}}>
            <input
              type='checkbox'
              checked={t.finished}
              onChange={() => checkTodo(i)}
            />
            {t.name}
          </div>
        ))}
      </div>

      <form onSubmit={addTodo}>
        <input placeholder='New ToDo' name='task' />
        <button>Add</button>
      </form>
    </>
  )
}
