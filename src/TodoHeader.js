import React from 'react'

const TodoHeader = ({children, loading}) => {//recive loading

    return (
        <header>
            {
                React.Children//convierte los componentes hijos en un array
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))//itera por cada elemnto del array
            }
        </header>
    )
}

export default TodoHeader
