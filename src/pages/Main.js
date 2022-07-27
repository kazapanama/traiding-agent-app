import Coffee from "../components/Coffee/Coffee";

import { useState, useEffect } from "react";

import {db} from '../firebase'
import { collection, doc, onSnapshot} from 'firebase/firestore'



const Main = () => {

    const [products, setProducts] = useState({})
   

    const productsCollectionRef = collection(db,'products')


    useEffect(() => {
        const getProducts = async () =>{
          
          await onSnapshot(productsCollectionRef,(data)=>{setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))})
          
        }
    
        getProducts()
      },[])




    return ( 
        <>
            <h1>main page </h1>
            < Coffee products={products}/>
        </>
        
     );
}
 
export default Main;