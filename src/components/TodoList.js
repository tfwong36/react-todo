import TodoItem from "./TodoItem"
import { useState } from "react";
import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import "../styles/TodoList.css"

function TodoList(){
    const [todoList, setTodoList] = useState([]);
    function updateTodoList(newTodo){
        setTodoList(oldTodoList=>[...oldTodoList, newTodo]);
    }
    return(
        <div className="TodoList">
            <p  className="title">✔️ Todo List ✔️</p>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator updateTodoList={updateTodoList}></TodoGenerator>
        </div>
    )
}
export default TodoList;