import './App.scss'
import SearchResults from './components/Counter/SearchResults/SearchResults'
import EmployeeCards from './components/EmployeeCards/EmployeeCards'
import team from './data/team'

  const App = () => {
  

  return (
      <div>
        
      <h1 className="title">Ticket Tracker</h1>
    
      <div className="tracker-content">
      
      {team.map(member => <EmployeeCards team={member} />)}

      
      </div>
      <SearchResults team={team} />
      </div>
    
  )
}

export default App
