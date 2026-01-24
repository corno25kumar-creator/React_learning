import React from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'


function MainCustomeHook() {
   
  return (
    <div className="min-h-screen bg-gray-100 flex gap-6 justify-center items-center">
      <First/>
      <Second/>
      <Third/>
    </div>
  )
}

export default MainCustomeHook
