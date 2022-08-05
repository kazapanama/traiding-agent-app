import './Search.scss'

const Search = ({setSearch}) => {
    return (
        <div className="search">
            <label>Пошук: </label>
            <input type='text' onChange={(e)=>setSearch(e.target.value)}></input>
         </div>
    )
}

export default Search