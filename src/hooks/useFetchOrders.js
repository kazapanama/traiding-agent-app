import { useState, useEffect } from "react";

import {db} from '../firebase'
import { collection, getDocs,onSnapshot} from 'firebase/firestore'
// doc,




export default function useFetchOrders() {
    const productsCollectionRef = collection(db,'orders')
    const [orders, setOrders] = useState([])
   

    useEffect(() => {
        const getOrders = async () =>{

          await onSnapshot(productsCollectionRef,(data)=>{setOrders(data.docs.map((doc)=>({...doc.data(),id:doc.id})))})
     


          // const data = await onSnapshot(productsCollectionRef)
          // const db = await data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          //  setOrders(db)
           
        }

        getOrders()
        console.log(orders)
      },[])
      return {orders}
}