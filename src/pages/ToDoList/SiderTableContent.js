import React from 'react'

export default function SiderTableContent() {
  return (
    <div className="sider-content">
      <table className="table my-table w-50">
        <tbody>
          <tr>
            <th>Author:</th>
            <td>Đặng Nhật Phi</td>
          </tr>
          <tr>
            <th>Facebook:</th>
            <td>
              <a href="https://www.facebook.com/phihh/">
                https://www.facebook.com/phihh/
              </a>
            </td>
          </tr>
          <tr>
            <th>Github:</th>
            <td>
              <a href="https://github.com/phidnhh/">
                https://github.com/phidnhh/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="bottom-description">
        <span>" Phải chăng tới giờ ly biệt tình yêu mới biết hết các chiều sâu của nó ! "</span>
        <br />
        <span>" Ever has it been that love knows not its own depth until the hour of separation ! "
      </span>
      </div>
    </div>
  )
}
