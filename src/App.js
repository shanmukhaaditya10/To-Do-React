
import './App.css';
import React, {useState} from 'react';
import Inputtodo from './Inputtodo';
import Todos from './Todos';



function App() {
  const [Todo,setTodo] = useState("");
  const [TodoArray , setTodoArray]= useState([]);


  return (
    <div className="App">
      <h1>To-Do Application</h1>
   
      <div><Inputtodo setTodo={setTodo} setTodoArray={setTodoArray} Todo={Todo} TodoArray={TodoArray}/></div>
      <div><Todos TodoArray={TodoArray} setTodoArray={setTodoArray} /></div>
      
     
    </div>
  );
}

export default App;
