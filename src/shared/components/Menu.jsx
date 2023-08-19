import React from 'react'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <br/>
        <NavLink to="/quiz">Quiz</NavLink>
        <br/>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <br/>
    </div>
  )
}
