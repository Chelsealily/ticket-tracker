import "./EmployeeCards.scss"
import Counter from "../Counter/Counter";
import Team from "../../types/Teams";

type employeeCardsProps = {
  team: Team
}


const EmployeeCards = ({team}: employeeCardsProps) => {
  return (
    
        <section className="card-content">
          <div className="card-content__info">
          <h2>{team.name}</h2>
          <h3> 📎 {team.role}</h3>
          </div>
          <Counter />
        </section>
        
  )
}

export default EmployeeCards
