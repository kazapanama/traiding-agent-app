import { useGetDb } from "../context/DbContext";
import { useState} from "react";
import './pagesStyles/EditItems.scss'
import {Link} from 'react-router-dom'

import {db} from '../firebase'
import {doc,deleteDoc} from 'firebase/firestore'

import Search from "../components/Search/Search";

const EditItems = () => {
    
    const {products} = useGetDb();
    const [search,setSearch] = useState('');

    

   
    const deleteItem = async(id) => {
        const itemDoc = doc(db,'products',id)
        await deleteDoc(itemDoc)
      }



    return ( 
        <div className="wrapper">
            <Search setSearch={setSearch} />
        
            <div>
                {products[0]  && products.filter(product=> product.name.toLowerCase().includes(search))
                .map(item=> {

                return(
                    <div key={item.id} className='edit-one-item'>
                        <div>
                            <img src={item.main_image} alt={item.name} className='edit-image'/>
                            <h3>{item.name}</h3>
                        </div>
                        
                        <div className="edit-buttons">
                            <Link to={item.id} className='edit-btn-edit'> EDIT</Link >
                            <button onClick={()=>deleteItem(item.id)} className='edit-btn-delete'>X</button>
                        </div>
                    
                    </div>
                )

}  
            )}
            
            </div>



           
        
        
        </div>
     );
}
 
export default EditItems;