//import { useState } from 'react'
import './App.scss'
import EmployeeCards from './components/EmployeeCards/EmployeeCards'


function App() {


  return (
      <div>
      <h1 className="title">Ticket Tracker</h1>
      <div className="tracker-content">
       
        <EmployeeCards/>
        
      </div>
      </div>
    
  )
}

export default App
