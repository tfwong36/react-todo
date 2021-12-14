import { useState } from  "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO_LIST } from "../constants/constants";
import "../styles/TodoGenerator.css"

function TodoGenerator(props){
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function addItem(){
        if (content.length > 0)
            dispatch({type:UPDATE_TODO_LIST, payload:content})
    }
      
    return(
        <>
        <div>
            <input className="input-style" id="mytext" type="text" value={content} onChange={e => setContent(e.target.value)}></input>
            <button className="button-style" id="mybtn" onClick={addItem}>add</button>
        </div>
        </>
    )
}
export default TodoGenerator;