import { useState } from  "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO_LIST } from "../constants/constants";
import "../styles/TodoGenerator.css"
import { v4 as uuidv4 } from 'uuid';

function TodoGenerator(){
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function addItem(){
        if (content.length > 0)
            dispatch({type:UPDATE_TODO_LIST, payload:{"content": content, "ID":uuidv4(),"done": false}})
    }

    return(
        <div>
            <input className="input-style" type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="input a new todo item here"></input>
            <button className="button-style" onClick={addItem}>add</button>
        </div>
    )
}
export default TodoGenerator;