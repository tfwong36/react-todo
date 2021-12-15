import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoDone } from "../apis/todos";
import { DELETE_TODO_LIST, TOGGLE_ITEM } from "../constants/constants";
import "../styles/TodoItem.css"

function TodoItem(props){
    const dispatch = useDispatch();
    function handleDeleteTodoList(event){
        event.stopPropagation();
        deleteTodo(props.id).then((response) => {
            dispatch({type:DELETE_TODO_LIST, payload: props.id});
            console.log("Deleted");
            console.log(response);
        })
    }

    function handleToggleDone(){
        toggleTodoDone(props.id, props.status).then((response) => {
            dispatch({type:TOGGLE_ITEM, payload: props.id});
            console.log("Toggled");
            console.log(response);
        })
    }
    return(
        <div className={props.status? "todoitem box done":"todoitem box"} onClick={handleToggleDone}>
            <p className="itemContent">{props.content} <button className="button-delete" onClick={handleDeleteTodoList}>X</button></p>
        </div>
    )
}
export default TodoItem;