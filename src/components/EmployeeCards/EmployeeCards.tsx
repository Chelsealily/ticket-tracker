import team from "../../data/team";;
import "./EmployeeCards.scss"
//import React from 'react'
import Counter from "../Counter/Counter";


const EmployeeCards = () => {
  return team.map((card) => (
    
        <section className="card-content">
          <div className="card-content__info">
          <h2>{card.name}</h2>
          <h3> 📎 {card.role}</h3>
          </div>
          <Counter />
        </section>
        
  ))
}

export default EmployeeCards
