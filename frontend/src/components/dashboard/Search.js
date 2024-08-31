
const Search = ({search, setSearch, onSubmit}) => {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className = 'searchForm' onSubmit = {onSubmit}>
        <label htmlFor="search" hidden>Search</label>
        <input
            id = "search"
            type ="text"
            role = "searchbox"
            placeholder= "Search"
            value = {search}
            onChange = {handleChange}
        />
    </form>
  )
}

export default Search