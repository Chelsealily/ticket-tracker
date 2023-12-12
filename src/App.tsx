//import { useState } from 'react'
import './App.scss'
import EmployeeCards from './components/EmployeeCards/EmployeeCards'


function App() {


  return (
      <div>
      <div className="tracker-content">
        <h1 className="tracker-content__title">Ticket Tracker</h1>
        <EmployeeCards/>
      </div>
      </div>
    
  )
}

export default App
