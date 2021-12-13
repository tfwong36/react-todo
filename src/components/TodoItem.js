import { useState } from "react";

function TodoItem(props){
    const [itemContent, setItemContent] = useState(0);

    return(
        <div className="todoitem">
            <p>{props.content}</p>
        </div>
    )
}
export default TodoItem;