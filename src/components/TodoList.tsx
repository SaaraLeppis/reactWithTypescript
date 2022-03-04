import React from "react";
import './TodoList.css'

interface ToDoListProps {
    items:{
        id: string; 
        text:string
    }[]; 
    onDeleteTodo: (id:string) =>void;  
}

const TodoList: React.FC<ToDoListProps> =(props)=>{
    //const todos =[{ id:'t1', text:'walk 10 km'}]; 
    return (
        <ul>
            {props.items.map((todo)=>(
                <li key={todo.id}><span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button></li>
            ))}
        </ul>
    )
}

export default TodoList; 