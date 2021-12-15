import { useState } from "react";
import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import { useDispatch } from "react-redux";
import "../styles/TodoList.css"
import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";

function TodoList(){
    const [todoList, setTodoList] = useState([]);
    const dispatch = useDispatch();
    function updateTodoList(newTodo){
        dispatch({type:UPDATE_TODO_LIST, payload: newTodo})
    }
    return(
        <div>
            <div class="bg"></div>
            <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
            
            <div className="TodoList">
                <p  className="title">✔️ Todo List ✔️</p>
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </div>
        </div>
    )
}
export default TodoList;