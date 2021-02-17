import React from 'react'
import LoadingComponent from '../../components/GlobalSetting/LoadingComponent/LoadingComponent'

export default function PageNotFound(props) {
    return (
        <div className="container text-center">
            <LoadingComponent/>
            <div style={{ fontSize: 200 }}>404</div>
            <div style={{ fontSize: 30 }}>Không tìm thấy trang</div>
        </div>
    )
}
