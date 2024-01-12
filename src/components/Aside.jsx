import React from "react";
import { arrow, arrowLite, customers, customersLite, dashboard, dashboardLite, help, helpLite, income, incomeLite, logo, product, productLite, promote, promoteLite } from "../assets/img"
import { User } from "./user";

const listItem = [
  {
    icon: dashboard,
    iconActive: dashboardLite,
    title: 'Dashboard',
  },
  {
    icon: product,
    iconActive: productLite,
    title: 'Product',
  },
  {
    icon: customers,
    iconActive: customersLite,
    title: 'Customers',
    status: true,
  },
  {
    icon: income,
    iconActive: incomeLite,
    title: 'Income',
  },
  {
    icon: promote,
    iconActive: promoteLite,
    title: 'Promote',
  },
  {
    icon: help,
    iconActive: helpLite,
    title: 'Help',
  },
]

export const Aside = ({ isOpen }) => {
  const [active, setActive] = React.useState({});

  const onChangeItem = (item) => {
    setActive(item);
  }

  React.useEffect(() => {
    setActive(listItem[2]);
  }, []);

  return (
    <aside className={`aside ${isOpen ? 'active' : ''}`}>
      <div className="aside__logo">
        <img className="aside__logo-img" src={logo} alt="Logo" />
        <div className="aside__logo-title">
          Dashboard
          <span>v.01</span>
        </div>
      </div>
      <ul className="aside__list">
        {listItem.map((item, i) => (
          <li
            onClick={() => onChangeItem(item)}
            className={`aside__list-item ${active.title === item.title ? 'active' : ''}`}
          >
            <img className='aside__list-img' src={active.title === item.title ? item.iconActive : item.icon} alt="dashboard" />
            <div className='aside__list-title'>
              {item.title}
            </div>
            {(i > 0) && (
              <img className='aside__list-arrow' src={active.title === item.title ? arrowLite : arrow} alt="arrow" />
            )}
          </li>
        ))}
      </ul>
      <User />
    </aside>
  )
}
