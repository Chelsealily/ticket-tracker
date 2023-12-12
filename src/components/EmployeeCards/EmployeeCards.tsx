import team from "../../data/team";;
import "./EmployeeCards.scss"
//import React from 'react'


const EmployeeCards = () => {
  return team.map((card) => (
    <section className="card">
        <div className="card-content">
          <h2 className="card-content__name">{card.name}</h2>
          <h3 className="card-content__id"># {card.id}</h3>
          <h3 className="card-content__role">{card.role}</h3>
        </div>
        </section>
  ))
}

export default EmployeeCards
