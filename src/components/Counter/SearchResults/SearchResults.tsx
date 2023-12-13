import "./SearchResults.scss"
import Team from "../../../types/Teams";
import { useState, FormEvent } from 'react'
import Search from "../../Search/Search";
import EmployeeCards from "../../EmployeeCards/EmployeeCards";

type searchResultsProps = {
    team: Team[]
}

const SearchResults = ({ team }: searchResultsProps) => {

const [searchTerm, setSearchTerm] = useState<string>("");
    
const handleInput = (event: FormEvent<HTMLInputElement>) => {
  const input = event.currentTarget.value.toLowerCase();
  setSearchTerm(input);
};

const member = team.find(member =>
  member.name.toLowerCase().includes(searchTerm)
);


  return (
    <div>
    <Search searchTerm={searchTerm} handleInput={handleInput}/>
    {member && <EmployeeCards team={member}/>}
    </div>
  )
}

export default SearchResults;