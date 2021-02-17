import React from 'react'
import styleLoading from "./LoadingComponent.module.css";
import loading from "../../../assets/imgLoading/loading.gif";
import { useSelector } from 'react-redux';

export default function LoadingComponent() {
    const {isLoading} = useSelector(state => state.LoadingReducer);
    if(isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={loading} />
            </div>
        )
    } else {
        return "";
    }
}
