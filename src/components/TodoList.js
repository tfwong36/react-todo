import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import "../styles/TodoList.css"

function TodoList(){
    return(
        <div>
            <div class="bg"></div>
            <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
            
            <div className="TodoList">
                <p  className="title">✔️ Todo List ✔️</p>
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </div>
        </div>
    )
}
export default TodoList;