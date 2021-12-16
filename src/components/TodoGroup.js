import TodoItem from './TodoItem'
import { useSelector } from "react-redux";

function TodoGroup(){
    const todoList = useSelector(state => state.todoList)

    return (
        <div>
            {todoList.map((item)=><TodoItem content={item.content} status={item.done} id={item.id} key={item.id} />)}
        </div>
    )
}
export default TodoGroup;