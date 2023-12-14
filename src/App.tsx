import './App.scss'
import EmployeeCards from './components/EmployeeCards/EmployeeCards'
import team from './data/team'
import { useState, FormEvent } from 'react'
import Search from './components/Search/Search'


const App = () => {

const [searchTerm, setSearchTerm] = useState("");

const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
}

const filteredName = team.filter(employee =>
employee.name.toLowerCase().includes(searchTerm)
)

  return (
      <div>
      <h1 className="title">Ticket Tracker</h1>
      <div className='search-bar'>
      <Search searchTerm={searchTerm} handleInput={handleInput}/>
      </div>
      <div className="tracker-content">
        
      {filteredName.map((employee) => (
          <EmployeeCards team={employee}/>))}
      </div></div>
    
  )
}

export default App