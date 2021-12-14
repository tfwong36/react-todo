import { useState } from "react";
import "../styles/TodoItem.css"

function TodoItem(props){
    return(
        <div className="todoitem box">
            <p className="itemContent">{props.content}</p>
        </div>
    )
}
export default TodoItem;