import { useState } from "react";
import "../styles/TodoItem.css"

function TodoItem(props){
    const [itemContent, setItemContent] = useState(0);

    return(
        <div className="todoitem box">
            <p>{props.content}</p>
        </div>
    )
}
export default TodoItem;