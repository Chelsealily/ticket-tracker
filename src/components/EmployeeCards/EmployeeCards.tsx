import team from "../../data/team";;
import "./EmployeeCards.scss"
import React from 'react'


const EmployeeCards = () => {
  return team.map((employee) => (
    <div>
        <div className="card-content">
          <h1 className="card-content__name">{employee.name}</h1>
          <h2 className="card-content__id">ID: {employee.id}</h2>
          <h2 className="card-content__role">{employee.role}</h2>
        </div>
        </div>
  ))
}

export default EmployeeCards
