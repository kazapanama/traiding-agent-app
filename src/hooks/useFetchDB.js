import { useState, useEffect } from "react";

import {db} from '../firebase'
import { collection, getDocs} from 'firebase/firestore'
// doc,




export default function useFetchDB() {
    const productsCollectionRef = collection(db,'products')
    const [products, setProducts] = useState({})
    const [categories,setCategories] = useState([])
    const [reload,setReload] = useState(false)
    

    useEffect(() => {
        const getProducts = async () =>{

          

          const data = await getDocs(productsCollectionRef)
          const db =  data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
           setProducts(db)
           setCategories(db.reduce((arr,item)=>{
            if (!arr.includes(item.category)){
              arr.push(item.category)
            }
            
            return arr
           }
           ,[]))
           
        }
        getProducts()
        console.log('fetching db')
        
      },[reload])
      return {products,categories,reload,setReload}
}