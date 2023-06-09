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

        <div>
        <button className="btn btnDelete" onClick={handleClick}  >💾</button>

        <button className="btn btnDelete" onClick={()=>onDelete(task.id)}>🗑️</button> 
        </div>
      </>
    );
  }

  function EditOff() {
    return (
      <>
        <span className={taskComplete ? "allTask spamSubrayado" : "allTask"} onClick={()=> setTaskComplete(!taskComplete)}>{task.task}</span>
        <div>
        <button className="btn btnEdit" onClick={() => setEdit(true)}>✏️</button>

        <button className="btn btnDelete" onClick={()=>onDelete(task.id)}>🗑️</button> 
        </div>
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
