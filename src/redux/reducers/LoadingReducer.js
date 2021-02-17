import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";

const initialState = {
    isLoading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADING: {
            state.isLoading = true;
            return { ...state };
        } break;
        case HIDE_LOADING: {
            state.isLoading = false;
            return { ...state };
        } break;
    }
    return { ...state };
}