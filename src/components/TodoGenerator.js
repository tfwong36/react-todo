import { useState } from  "react";

function TodoGenerator(props){
    const [content, setContent] = useState(0);
    function addItem(){
        props.updateTodoList(content)
        setContent("")
    }
    return(
        <div>
            <input type="text" value={content} onChange={e => setContent(e.target.value)}></input>
            <button onClick={addItem}>add</button>
        </div>
    )
}
export default TodoGenerator;