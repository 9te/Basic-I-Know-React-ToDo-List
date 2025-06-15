import { ToDoItem } from "./ToDoItem"

export function ToDoList( { ToDos, toggleToDo, deleteToDo}){
    return (
        <ul className="list">
        {ToDos.length === 0 && "Nothing to do today"}
        {ToDos.map(todo => {
          return(
            <ToDoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
          )
        })}
      </ul>
    )
}