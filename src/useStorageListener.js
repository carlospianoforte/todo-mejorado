import React from 'react'

function useStorageListener(sincronize){
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODO_V1') {
                console.log('Hubo cambios')
                setStorageChange(true)
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false)
        };

        return{
            show: storageChange,
            toggleShow,
        }
 
    
}

export default useStorageListener
