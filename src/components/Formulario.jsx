export function Formulario(props) {

    const {task, handleSubmit, handleChange} = props


    return(
        <form onSubmit={handleSubmit}>
            <input
            className="inputText"
            placeholder="ingrese su tarea"
            type="text" 
            onChange={handleChange}
            value={task}
            />

            <input
            type="submit"
            className="btn"
            value= "add" 
            onClick={handleSubmit}/>
        </form>
    )
}