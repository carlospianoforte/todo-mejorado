import React from "react";
import { useTodos } from "./useTodos";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import todo from "./images/todo.png"
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import "./styles/App.css"
import TodoHeader from "./TodoHeader";
import { ChangeAlert } from "./ChangeAlert";

import "./styles/App.css"

function App() {
  const {
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return(

    <>
  
      <img className="App-image" src={todo} alt="logo" />
    
    <TodoHeader loading={loading}//pasa loading a los dos hijos
>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> 

    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}

      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={
        (searchText) => <p>No hay resultados para {searchText}</p>
      }
    >
{/*        render={todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        completeTodo={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />

      )} */} 

      {todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        completeTodo={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />

      )}

    </TodoList>

    

      {!!openModal&&(
            <Modal>
                <TodoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
      )}

    <CreateTodoButton
      setOpenModal={setOpenModal} 
    />
    
    <ChangeAlert
      sincronize={sincronizeTodos}
    />
    
    </>


  );
}

export default App;
