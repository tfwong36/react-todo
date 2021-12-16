import { CloseSquareTwoTone, EditTwoTone } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, udpateTodo } from "../apis/todos";
import { DELETE_TODO_LIST, UDPATE_ITEM } from "../constants/constants";
import "../styles/TodoItem.css"
import TextArea from "antd/lib/input/TextArea";
import Modal from "antd/lib/modal/Modal";

function TodoItem(props){
    const [isModalVisible, setModalVisible] = useState(false);
    const [modifiedContent, setmodifiedContent] = useState("");
    const dispatch = useDispatch();
    function handleDeleteTodoList(event){
        event.stopPropagation();
        deleteTodo(props.id).then((response) => {
            dispatch({type:DELETE_TODO_LIST, payload: response.data.ID});
        })
    }

    function handleToggleDone(){
        console.log('hiiiii');
        console.log(props.id);
        udpateTodo(props.id, {"done":!props.status}).then((response) => {
            dispatch({type:UDPATE_ITEM, payload: response.data});
        })
    }

    function displayModal(event){
        event.stopPropagation();
        setmodifiedContent(props.content);
        setModalVisible({isModalVisible: true});
    }
    
    const handleOk = () => {
        udpateTodo(props.id, {"content": modifiedContent}).then((response) => {
            dispatch({type:UDPATE_ITEM, payload: response.data});
        })
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return(
        <div>
            <Modal id={"mymodal"} title="Modify Todo Item Content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <TextArea value={modifiedContent} onChange={e => setmodifiedContent(e.target.value)}></TextArea>
            </Modal>
            <div className={props.status? "todoitem box done":"todoitem box"} onClick={handleToggleDone}>
                <p className="itemContent">{props.content} 
                    <EditTwoTone className="button-delete" onClick={displayModal}/>
                    <CloseSquareTwoTone className="button-delete" onClick={handleDeleteTodoList} />
                </p>
            </div>
        </div>
    )
}

export default TodoItem;