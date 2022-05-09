import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new" className="sign-in">
        Sign In
      </Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button sign-button">
        Sign Up
      </Link>
    </li>,
  ]

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ]

  return (
    <div>
      <div className="top-bar nav nav-container">
        <div className="top-bar-left nav">
          <ul className="menu nav">
            <li>
              <Link to="/" className="home">
                Every Day is a Holiday
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right nav">
          <ul className="menu nav">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default TopBar
