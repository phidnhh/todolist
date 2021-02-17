import { call, delay, put, takeLatest } from "redux-saga/effects";
import { toDoListService } from "../../services/ToDoListService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { ADD_TASK_API, DELETE_TASK_API, DONE_TASK_API, GET_TASKLIST_API, REJECT_TASK_API, SET_TASKLIST_API } from "../constants/ToDoListConst";

function* getTaskListApiAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { data, status } = yield call(toDoListService.getTaskApi);
        yield delay(200);

        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy kết quả thành công dùng put (giống dispatch thunk)
            yield put({
                type: SET_TASKLIST_API,
                taskList: data
            });
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error", error);
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionGetTaskApi() {
    yield takeLatest(GET_TASKLIST_API, getTaskListApiAction);
}

function* addTaskListApiAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { newTask } = action;  
        let { data, status } = yield call(() => {
            return toDoListService.addTaskApi(newTask);
        });

        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy kết quả thành công dùng put (giống dispatch thunk)
            yield put({
                type: GET_TASKLIST_API
            });
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error", error);
    }
    yield delay(200);
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionAddTaskApi() {
    yield takeLatest(ADD_TASK_API, addTaskListApiAction);
}

function* deleteTaskListApiAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { taskName } = action;  
        let { data, status } = yield call(() => {
            return toDoListService.deleteTaskApi(taskName);
        });

        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy kết quả thành công dùng put (giống dispatch thunk)
            yield put({
                type: GET_TASKLIST_API
            });
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error", error);
    }
    yield delay(200);
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionDeleteTaskApi() {
    yield takeLatest(DELETE_TASK_API, deleteTaskListApiAction);
}

function* doneTaskListApiAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { taskName } = action;  
        let { data, status } = yield call(() => {
            return toDoListService.doneTaskApi(taskName);
        });

        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy kết quả thành công dùng put (giống dispatch thunk)
            yield put({
                type: GET_TASKLIST_API
            });
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error", error);
    }
    yield delay(200);
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionDoneTaskApi() {
    yield takeLatest(DONE_TASK_API, doneTaskListApiAction);
}

function* rejectTaskListApiAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        let { taskName } = action;  
        let { data, status } = yield call(() => {
            return toDoListService.rejectTaskApi(taskName);
        });

        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy kết quả thành công dùng put (giống dispatch thunk)
            yield put({
                type: GET_TASKLIST_API
            });
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error", error);
    }
    yield delay(200);
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionRejectTaskApi() {
    yield takeLatest(REJECT_TASK_API, rejectTaskListApiAction);
}
