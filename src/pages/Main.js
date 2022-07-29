import Section from "../components/Section/Section";

import { useState, useEffect } from "react";

import {db} from '../firebase'
import { collection, getDocs} from 'firebase/firestore' 
// doc,



const Main = () => {
    const productsCollectionRef = collection(db,'products')
    const [products, setProducts] = useState({})
    const [categories,setCategories] = useState([])

    useEffect(() => {
        const getProducts = async () =>{
          const data = await getDocs(productsCollectionRef)
          const db = await data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
           setProducts(db)
           setCategories(db.reduce((arr,item)=>{
            if (!arr.includes(item.category)){
              arr.push(item.category)
            }
            
            return arr
           },[]))
           
        }

        getProducts()
        
      },[])

     

    return ( 

        <div className="wrapper">
          <h1>main page </h1>
             

          {categories.map((item,i)=>< Section products={products} category={categories[i]} key={i}/>)}
        </div>

     );
}
 
export default Main;