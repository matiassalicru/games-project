import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className="app__main">
      <Sidebar/>
        
      <Home/>
    </div>
  )
}
