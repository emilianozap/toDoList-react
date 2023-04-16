import { useState } from 'react';
import './App.css';
import { Task } from "./components/Task"
import { Formulario } from './components/Formulario';

function App() {

  const [task, setTask,] = useState("")
  const [listTasks, setListTask] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (task === "") {
      alert("su tarea estas vacia")
      return
    }
    if(task.length >=16){
      alert("su tarea debe tener un maximo de 15 caracteres para porder guardar")
      return
    }

    const newTask = {
      id: Date.now(),
      task: task,
      complete: false

    }

    const temp = [newTask, ...listTasks]
    setListTask(temp)

    setTask("")

    console.log(listTasks)
  }

  function handleChange(e) {
    setTask(e.target.value)
    console.log(task);
  }

  function editTask (editobj) {
    const {id, task} = editobj

    if(task.length >=16){
      alert("su tarea debe tener un maximo de 15 caracteres para porder guardar")
      return
    }
    const temp = [...listTasks]
    const element = temp.find(item => item.id === id)
    element.task = task

    setListTask(temp)
  }


function onDelete (id){
  const temp = listTasks.filter(item => item.id !== id)
  setListTask(temp)
  
}


  return (
    <>
      <div className='container'>
        <h1>To-Do List</h1>
        <div className='containerForm'>
          <Formulario
            task={task}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <div className='containerTasks'>
          <h2>
            listado de tareas
          </h2>
          <div className='containerInfoTask'>
            {
              listTasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                  task={task}
                  editTask={editTask}
                  onDelete = {onDelete}
                />
               
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
