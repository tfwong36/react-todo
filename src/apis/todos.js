import todoAPI from "./api";

export const getTodos = () => {
    return todoAPI.get("/todos");
}

export const postTodo = (item) => {
    return todoAPI.post("/todos", item);
}

export const deleteTodo = (id) => {
    return todoAPI.delete("/todos/" + id);
}
// PUT二合一
export const toggleTodoDone = (id, done) => {
    return todoAPI.put("/todos/" + id, {"done":!done});
}

export const udpateTodoContent = (id, content) => {
    return todoAPI.put("/todos/" + id, {"content":content});
}