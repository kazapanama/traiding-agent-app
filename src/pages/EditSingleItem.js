import { useEffect,useState } from 'react'
import { useGetDb } from '../context/DbContext'

import {useParams} from 'react-router-dom'
import {db} from '../firebase'
import {getDoc,doc,collection} from 'firebase/firestore'

const EditSingleItem = () => {
    
    const [singleItem,setSingleItem] = useState({})
    const {products} = useGetDb()
    const{id} = useParams()
    

useEffect(()=>{
    const filtered = products.filter(item=>item.id === id)[0]
    setSingleItem(filtered)
},[])




    return ( 
        <div className="wrapper">
            <h1>EDIT SINGLE ITEM {id}</h1>
            {console.log(singleItem)}
           
            <label>name:</label>
            <input value={singleItem.name} 
            onChange={(e)=>setSingleItem({...singleItem,name:e.target.value})}>
            </input>

            <label>weight:</label>
            <input value={singleItem.weight} 
            onChange={(e)=>setSingleItem({...singleItem,weight:e.target.value})}>
            </input>

            <label>unit:</label>
            <input value={singleItem.measure_unit} 
            onChange={(e)=>setSingleItem({...singleItem,measure_unit:e.target.value})}>
            </input>

            <label>in_set:</label>
            <input value={singleItem.in_set} 
            onChange={(e)=>setSingleItem({...singleItem,in_set:e.target.value})}>
            </input>

            <label>price:</label>
            <input value={singleItem.name} 
            onChange={(e)=>setSingleItem({...singleItem,price:e.target.value})}>
            </input>

            <label>category:</label>
            <input value={singleItem.category} 
            onChange={(e)=>setSingleItem({...singleItem,category:e.target.value})}>
            </input>

        </div>
     );
}
 
export default EditSingleItem;