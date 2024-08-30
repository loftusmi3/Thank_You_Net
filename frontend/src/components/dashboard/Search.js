import { useState } from "react"

const Search = ({onSubmit, search, setSearch}) => {

  return (
    <form className = 'searchForm' onSubmit = {(e) => e.preventDefault()}>
        <label htmlFor="search" hidden>Search</label>
        <input
            id = "search"
            type ="text"
            role = "searchbox"
            placeholder= "Search"
            value = {search}
            onChange = {(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search