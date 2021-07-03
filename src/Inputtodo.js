import React from 'react'
import './Input.css';


function Inputtodo({setTodo ,Todo ,TodoArray, setTodoArray}) {
    const getValue=(e)=>{
        
        setTodo(e.target.value);
        
    }
    const setArray = (e) => {
        e.preventDefault();
        if (Todo !== "" ){
        setTodoArray([
            ...TodoArray , {text:Todo , complete:false , id:Math.random()*1000}
        ]);
       setTodo(""); }else {setTodo("")}

        

    }


    return (
        <div className="Inpbtn">
            <form  className="container" action=".">
        <input  value={Todo} onChange={getValue} placeholder="Add your Todo" type="text" className="container__input" />
       
        <button className="Input__button" onClick={setArray} >
        <i class="far fa-plus-square"></i>
        </button>
        </form>
        </div>
    )
}

export default Inputtodo
