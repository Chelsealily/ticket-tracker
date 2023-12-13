import "./Search.scss"
import { FormEventHandler } from "react";

type SearchProps = {
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
  };

const Search = ({searchTerm, handleInput}: SearchProps) => {
    
  return (
    <section className="search-bar">
    <input type="text" placeholder="🔎 Search by Name.."
        value={searchTerm}
        onInput={handleInput}/>
     </section>
  )
}

export default Search