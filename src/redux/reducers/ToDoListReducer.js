import { SET_TASKLIST_API } from "../constants/ToDoListConst";

const initialState = {
    taskList: [
        // {taskName: "task 1", status: false},
        // {taskName: "task 2", status: false},
        // {taskName: "task 3", status: true},        
        // {taskName: "task 4", status: true},        
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKLIST_API: {
            state.taskList = action.taskList;
        }; break;
    }
    return { ...state };
}
