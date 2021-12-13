import TodoItem from "./TodoItem"
import { useState } from "react";
import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"

function TodoList(){
    const [todoList, setTodoList] = useState([]);
    function updateTodoList(newTodo){
        setTodoList(oldTodoList=>[...oldTodoList, newTodo]);
    }
    return(
        <div className="TodoList">
            <p>Todo List</p>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator updateTodoList={updateTodoList}></TodoGenerator>
        </div>
    )
}
export default TodoList;