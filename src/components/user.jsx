import { users } from "../assets/img"

export const User = () => {
  return (
    <div className="aside__user">
      <img className="aside__user-img" src={users} alt="user logo" />
      <div className="aside__user-info">
        <div className="aside__user-title">
          Evano
        </div>
        <div className="aside__user-subtitle">
          Project Manager
        </div>
      </div>
    </div>
  )
}
