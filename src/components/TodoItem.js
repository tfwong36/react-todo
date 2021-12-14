import { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO_LIST } from "../constants/constants";
import "../styles/TodoItem.css"

function TodoItem(props){
    const dispatch = useDispatch();

    function handleDeleteTodoList(){
        dispatch({type:DELETE_TODO_LIST, payload: props.id})
    }

    return(
        <div className="todoitem box">
            <p className="itemContent">{props.content}</p>
            <button className="button-delete" onClick={handleDeleteTodoList}>Delete</button>
        </div>
    )
}
export default TodoItem;