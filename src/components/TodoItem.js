import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DELETE_TODO_LIST, TOGGLE_ITEM } from "../constants/constants";
import "../styles/TodoItem.css"

function TodoItem(props){
    const dispatch = useDispatch();
    function handleDeleteTodoList(){
        dispatch({type:DELETE_TODO_LIST, payload: props.id})
    }

    function handleToggleDone(){
        dispatch({type:TOGGLE_ITEM, payload: props.id})
    }
    return(
        <div className={props.status? "todoitem box done":"todoitem box"}onClick={handleToggleDone}>
            <p className="itemContent">{props.content} <button className="button-delete" onClick={handleDeleteTodoList}>X</button></p>
            
        </div>
    )
}
export default TodoItem;