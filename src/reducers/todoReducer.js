import { DELETE_TODO_LIST, UPDATE_TODO_LIST} from "../constants/constants";
const initState = { size: 0, todoList: []};
const counterReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]};
        case DELETE_TODO_LIST:
            return {...state, todoList: state.todoList.filter(c=>c.ID!=action.payload)};
        default: 
            return state;
    }
};
export default counterReducer;