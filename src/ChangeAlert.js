import React from 'react'
import useStorageListener from './useStorageListener';
import "./styles/ChangeAlert.css";


function ChangeAlert({sincronize}) {
    const {show, toggleShow} = useStorageListener(sincronize);
    if(show) {
        return (

            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Realizaste cambios</p>
                    <p>¿Quieres Actualizar?</p>
                    <button
                        className= "TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Yes!
                    </button>
                </div>
            </div>
 
        )
    }else {
        return null;
    }
}


export { ChangeAlert };