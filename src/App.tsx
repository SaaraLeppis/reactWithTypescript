import React, {useState} from 'react';
import TodoList from './components/TodoList'; 
import NewTodo from './components/NewTodo';
import { Todo } from './components/todo.model';

const App: React.FC=()=> {
 
  //const todos =[{id: 't1', text: 'walk 10 km'}]; 
  //const todos = useState([]); 
  const [todos, setTodos] =useState <Todo []>([]); 
  const todoAddHandler = (text:string )=>{
    console.log(text );
    setTodos((prevTodos)=>[
      ...prevTodos, {id: Math.random().toString(), text: text}]); 
  }
 
  return (
    <div className="App">
      <NewTodo onAddTodo ={todoAddHandler}/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
