import { BUILD_TODOLIST, DELETE_TODO_LIST, UDPATE_ITEM, UPDATE_TODO_LIST} from "../constants/constants";

const initState = { todoList: []};

const counterReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]};
        case DELETE_TODO_LIST:
            return {...state, todoList: state.todoList.filter(todo=>todo.ID!==action.payload)};
        case UDPATE_ITEM:
            return {...state, todoList: state.todoList.map(function(todo) {
                                                            if (todo.ID === action.payload.ID)
                                                                return action.payload;
                                                            return todo;
                                                        })};
        case BUILD_TODOLIST:
            return {...state, todoList:action.payload}
        default: 
            return state;
    }
};

export default counterReducer;