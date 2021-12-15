import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import "../styles/TodoList.css"
import { useEffect } from "react"
import { getTodos } from "../apis/todos";
import { useDispatch } from "react-redux";
import { BUILD_TODOLIST } from "../constants/constants";

function TodoList(){
    const dispatch = useDispatch();

    useEffect(()=>{
        getTodos().then((response) => {
            dispatch({type:BUILD_TODOLIST, payload: response.data});
        })
    });
    return(
        <div>
            <div className="TodoList">
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </div>
        </div>
    )
}
export default TodoList;