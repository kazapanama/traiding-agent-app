import { useState, useEffect } from "react";

import {db} from '../firebase'
import { collection, getDocs} from 'firebase/firestore'
// doc,




export default function useFetchOrders() {
    const productsCollectionRef = collection(db,'orders')
    const [orders, setOrders] = useState([])
   

    useEffect(() => {
        const getOrders = async () =>{
          const data = await getDocs(productsCollectionRef)
          const db = await data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
           setOrders(db)
           
        }

        getOrders()
        console.log(orders)
      },[])
      return {orders}
}