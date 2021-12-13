import { useState } from  "react";
import "../styles/TodoGenerator.css"

function TodoGenerator(props){
    const [content, setContent] = useState(0);
    function addItem(){
        props.updateTodoList(content)
        setContent("")
    }
    return(
        <div>
            <input className="input-style" type="text" value={content} onChange={e => setContent(e.target.value)}></input>
            <button className="button-style" onClick={addItem}>add</button>
        </div>
    )
}
export default TodoGenerator;