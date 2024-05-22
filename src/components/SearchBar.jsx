export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Pesquisar"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
