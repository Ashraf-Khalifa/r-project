import React from 'react'
import { NavLink, Link } from "react-router-dom";

export default function Headerhome() {
  return (
    <div>
    <header className="hide-when-mobile">
      <ul className="flex">
        <li className="main-list">
          <NavLink className="main-list" to="/home">
            <img src="logo-no-background.png" width={120} height={50} alt="" />
          </NavLink>
        </li>
      </ul>
      <ul className="flex">
    
        <li className="main-list">
          <Link className="main-link" to="/home">
            Home
          </Link>
        </li>
        <li className="main-list">
          <Link className="main-link" to="/tourist">
            Tourist places
          </Link>
        </li>
       
      </ul>
    </header>
  </div>
  )
}
