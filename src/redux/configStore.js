import { applyMiddleware, combineReducers, createStore } from "redux";

import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import LoadingReducer from "./reducers/LoadingReducer";
import ToDoListReducer from "./reducers/ToDoListReducer";

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    LoadingReducer,
    ToDoListReducer
})

const store = createStore(rootReducer,applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga); // rootSaga là generator function
export default store;