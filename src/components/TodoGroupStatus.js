import TodoItem from './TodoItem'
import { useSelector } from "react-redux";

function TodoGroupStatus(props){
    const todoList = useSelector(state => state.todoList);
    return (
        <div>
            {todoList.filter(todo=>todo.done===props.status).map((item)=><TodoItem content={item.content} status={item.done} id={item.ID} key={item.ID} />)}
        </div>
    )

}
export default TodoGroupStatus;