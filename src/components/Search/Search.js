import './Search.scss'

const Search = ({setSearch}) => {
    return (
        <div className="search">
            <input type='text' onChange={(e)=>setSearch(e.target.value.toLowerCase())}></input>
            <img src='../images/header/search.svg' className='search-icon'/>
         </div>
    )
}

export default Search