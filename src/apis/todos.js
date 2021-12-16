import todoAPI from "./api";

export const getTodos = () => {
    return todoAPI.get("/todos");
}

export const postTodo = (item) => {
    return todoAPI.post("/todos", item);
}

export const deleteTodo = (id) => {
    console.log('delete');
    console.log(id);
    return todoAPI.delete("/todos/" + id);
}

export const udpateTodo = (id, changedData) => {
    console.log('put');
    console.log(id);
    console.log(changedData);
    return todoAPI.put("/todos/" + id, changedData);
}