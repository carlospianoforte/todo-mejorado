import React from "react";
import "./styles/TodoForm.css"

function TodoForm({addTodo,setOpenModal}){

    const[newTodoValue, setNewTodoValue]=React.useState('')

    const onChange=(event)=>{
        setNewTodoValue( event.target.value)
    }

    const onCancel=()=>{
        setOpenModal(false)

    }
    const onSubmit=(event)=>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)


    }
 

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe aquí tu primer TODO" 
            />

            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"

                >
                    
                    Añadir
                </button>
            </div>

        </form>
    )
}

export {TodoForm}