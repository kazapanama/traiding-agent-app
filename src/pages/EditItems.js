import { useGetDb } from "../context/DbContext";
import { useState } from "react";
import './pagesStyles/EditItems.scss'
import {Link} from 'react-router-dom'

import {db} from '../firebase'
import {doc,deleteDoc} from 'firebase/firestore'

const EditItems = () => {
    
    const {products} = useGetDb()
    const [search,setSearch] = useState('');

     const filtered = products.filter(product=>{
        return product.name.toLowerCase().includes(search)
    })
        
    const deleteItem = async(id) => {
        
        const itemDoc = doc(db,'products',id)
        await deleteDoc(itemDoc)
       
      }




    return ( 
        <div className="wrapper">
            <div className="search-part">
                <label>Search</label>
                <input type='text' onChange={(e)=>setSearch(e.target.value)}></input>
            </div>
        
            <div>
            {products[1] && filtered.map(item=> 
            
            <div key={item.id} className='edit-one-item'>
                <img src={item.main_image} alt={item.name} className='edit-image'/>
                <h3>{item.name}</h3>
                <Link to={item.id}> EDIT</Link>
                <button onClick={()=>deleteItem(item.id)}>DELETE</button>
            </div>
            
            
            
            )}
            
            
            
            
            </div>
        
        
        </div>
     );
}
 
export default EditItems;