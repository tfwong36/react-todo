import { DELETE_TODO_LIST, TOGGLE_ITEM, UPDATE_TODO_LIST} from "../constants/constants";
const initState = { todoList: []};
const counterReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]};
        case DELETE_TODO_LIST:
            return {...state, todoList: state.todoList.filter(c=>c.ID!==action.payload)};
        case TOGGLE_ITEM:
            return {...state, todoList: state.todoList.map(function(obj) {
                                                            if (obj.ID === action.payload)
                                                                obj.done = !obj.done;
                                                            return obj;
                                                        })};
        default: 
            return state;
    }
};
export default counterReducer;