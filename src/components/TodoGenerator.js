import { useState } from  "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO_LIST } from "../constants/constants";
import "../styles/TodoGenerator.css"
import { postTodo } from "../apis/todos";
import { Button, Input } from "antd";

function TodoGenerator(){
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function addItem(){
        if (content.length > 0){
            let data = {"content": content, "done": false};
            postTodo(data).then((response) => {
                dispatch({type:UPDATE_TODO_LIST, payload: response.data})
            })
        }
    }

    return(
        <div>
            <Input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="input a new todo item here"></Input>
            <Button className={content.length > 0? "ant-btn-primary":"ant-btn-background-ghost"} type="primary" size="large" onClick={addItem}>add</Button>
        </div>
    )
}
export default TodoGenerator;