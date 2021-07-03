import React from 'react'
import './EachTodo.css'
import DoneIcon from '@material-ui/icons/Done';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
function EachTodo({title  ,item,TodoArray ,setTodoArray}) {
    const deletehandler=()=>{
        setTodoArray(TodoArray.filter((elem)=> elem.id !== item.id))}

    const completehandler=()=>{
        setTodoArray(TodoArray.map(ToDo =>{
            if(ToDo.id === item.id){
                return {
                    ...ToDo , completed: !ToDo.completed
                }
            };
            return ToDo;
            }
            )

        )
    }        
    
    return (
    

        
        <div className='each__todo'>
                
                <li className={`todo  ${item.completed ? "completed" : "" }`}>{title}</li>
                <button onClick={completehandler} className={`${item.completed ?"checked" : "completed"}`} >
                    {item.completed ?
                        <SettingsBackupRestoreIcon />: <DoneIcon />}
                       
                    
                    </button>
                <button onClick={deletehandler} className="trash">< DeleteForeverIcon /></button>
                
        
        </div>
    )
}

export default EachTodo
