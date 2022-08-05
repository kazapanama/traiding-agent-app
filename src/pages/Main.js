import Section from "../components/Section/Section";
import {useGetDb} from '../context/DbContext'
import Search from "../components/Search/Search";
import {useState} from 'react'






const Main = () => {
    

     const {products,categories} = useGetDb()
     const [search,setSearch] = useState('')

    return ( 

        <div className="wrapper">
         <Search setSearch={setSearch}/>
          

          {categories.map((item,i)=>< Section products={products.filter(product=> product.name.toLowerCase().includes(search))} 
          category={categories[i]} key={i}/>)}
        </div>

     );
}
 
export default Main;