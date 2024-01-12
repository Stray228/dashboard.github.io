import { tableHeader, usersData } from "../constans"
import { Pagination } from "./Pagination"

export const Table = () => {
  return (
    <div className='table'>
      <table class="table__users-list">
        <caption>
          <div className="table__header">
            <div className="table__header-info">
              <h3>All Customers</h3>
              <p>Active Members</p>
            </div>
            <input className="table__header-search" type="text" placeholder='Search' />
          </div>
        </caption>
        <thead>
          <tr class="table__users-header">
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index} className="table__users-item">
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>{user.country}</td>
              <td className={`table__users-${user.status === 'Active' ? 'active' : 'inactive'}`}>
                <div>{user.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
