import React from "react";
import "./Todos.css";
import EachTodo from "./EachTodo";

function Todos({ TodoArray, setTodoArray, Todo }) {
  return (
    <div className="box">
      {TodoArray.map((item) => (
        <EachTodo
          title={item.text}
          setTodoArray={setTodoArray}
          Todo={Todo}
          TodoArray={TodoArray}
          key={item.id}
          item={item}
        />
      ))}
      
    </div>
  );
}

export default Todos;
