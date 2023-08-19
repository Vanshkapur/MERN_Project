import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../modules/quiz/components/Home'
import { LeaderBoard } from '../../modules/quiz/components/LeaderBoard'
import { Quiz } from '../../modules/quiz/components/Quiz'

export const Major = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="leaderboard" element={<LeaderBoard/>}/>
        </Routes>
    </div>
  )
}
