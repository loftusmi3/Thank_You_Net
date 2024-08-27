

const Search = () => {
  return (
    <form className = 'searchForm' onSubmit = {(e) => e.preventDefault()}>
        <label htmlFor="search" hidden>Search</label>
        <input
            id = "search"
            type ="text"
            role = "searchbox"
            placeholder= "Search"
            /* value = {search}    search was a prop passed that was the state of what someone typed into the search bar*/
            /* onChange = {(e) => setSearch(e.target.value)} */
        />
    </form>
  )
}

export default Search