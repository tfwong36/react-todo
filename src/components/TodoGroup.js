import TodoItem from './TodoItem'
import { useSelector } from "react-redux";

function TodoGroup(props){
    const todoList = useSelector(state => state.todoList)

    return (
        <div>
            {todoList.map((item, index)=><TodoItem content={item} key={Date.now()+index} />)}
        </div>
    )
}
export default TodoGroup;