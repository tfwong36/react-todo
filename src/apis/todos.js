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

export const toggleTodoDone = (id, done) => {
    return todoAPI.put("/todos/" + id, {"done":!done});
}