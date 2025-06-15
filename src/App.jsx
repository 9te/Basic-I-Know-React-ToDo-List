import { useEffect, useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewToDoForm"
import { ToDoList } from "./ToDoList"

export default function App(){
  const [ToDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(ToDos))
  }, [ToDos])

  function addToDo(title){
    setToDos((currentToDos) => {
      return [
          ...currentToDos,
          { id: crypto.randomUUID(), title: title, completed: false}
      ]
    })
  }
  
  function toggleToDo(id, completed){
    
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteToDo(id){
    setToDos(currentToDos =>{
      return currentToDos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <NewToDoForm onSubmit={addToDo}/>
      <h2 className="header">Todo List</h2>
      <ToDoList ToDos={ToDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>
  )
} 
