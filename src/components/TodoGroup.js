import { useState } from "react";
import { useEffect } from 'react';
import TodoItem from './TodoItem'

function TodoGroup(props){
    console.log(props.todoList);

    return (
        <div>
            {props.todoList.map((item)=><TodoItem content={item}/>)}
        </div>
    )
}
export default TodoGroup;