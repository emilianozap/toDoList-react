import { useState } from "react";

export function Task(props) {
  const { task, editTask, onDelete } = props;

  const [edit, setEdit] = useState(false);

  const [taskComplete, setTaskComplete ] = useState(false)




  function EditOn() {
    const [valor, setValor] = useState(task.task);

    function handleChange (e){
        const text = e.target.value
        setValor(text)
    } 

    function handleClick (e) {
        e.preventDefault()
        

        editTask(
            {
            id: task.id,
            task: valor,
            complete: false
        })
        
        setEdit(false)
    }
    

    return (
      <>
        <input type="text" onChange={handleChange} value={valor} />

        <button className="btn" onClick={handleClick}  >guardar</button>

        <button className="btn btnDelete" onClick={()=>onDelete(task.id)}>borrar</button> 
      </>
    );
  }

  function EditOff() {
    return (
      <>
        <span className={taskComplete ? "allTask spamSubrayado" : "allTask"} onClick={()=> setTaskComplete(!taskComplete)}>{task.task}</span>

        <button className="btn btnEdit" onClick={() => setEdit(true)}>actualizar</button>

        <button className="btn btnDelete" onClick={()=>onDelete(task.id)}>borrar</button> 
      </>
    );
  }

  return (
    <>
      <div className="containerTask" id={task.id}>
        {
            edit
            ? <EditOn />
            : <EditOff/>
        }
      </div>
    </>
  );
}
