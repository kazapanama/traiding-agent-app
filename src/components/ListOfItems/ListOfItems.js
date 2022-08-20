import './ListOfItems.scss'
import { useState,useEffect } from 'react';
import {db} from '../../firebase'
import { collection, addDoc} from 'firebase/firestore'

import { useShoppingCart } from '../../context/ShoppingCardContext';
import CartItem from '../CartItem/CartItem'
import { useGetDb } from '../../context/DbContext';

const ListOfItems = ({openList,setOpenList}) => {
    
const [total,setTotal] = useState(0)
const [where,setWhere] = useState('')

const {cartItems,setCartItems} = useShoppingCart();
const {products} = useGetDb()

useEffect(()=>{
    setTotal(cartItems.reduce((total,current)=>{
        const item = products.find(i=>i.id===current.id)
        return total + (item?.price || 0) * current.quantity
        },0))
        
},[cartItems])

const submitCart = async(e) => {
    e.preventDefault()
    const usesrsCollectionRef = collection(db,'orders')
    await addDoc(usesrsCollectionRef,{order:cartItems,total,destanation:where,isDone:false,date:Date.now()})
    let space = '%0A'
    let result = `Додано нове замовлення${space} за адрессою:${where}${space}` 
    result += cartItems.map(itemo=>{
        const item = products.find(i=>i.id===itemo.id)
        return `${space}${item.name} x ${itemo.quantity}\n`
    })
    result += `${space}Сумма замовлення: ${total}грн`
    console.log(result)
    fetch(`https://api.telegram.org/bot5526411852:AAH99NHMHVIYUuxFvlV9cO6ExM7Z6SSwFXs/sendMessage?chat_id=335863280&text=${result}`)


    // setCartItems([])
    // setWhere('')
    alert('Замовлення додано')
}

    
    return ( 
        <div className={openList ? 'ListOfItems active' : 'ListOfItems'}>
            <div className="wrapper">
                <img src="../images/header/x.png" alt="x icon" onClick={()=>{
                    setOpenList(false)
                    document.body.style.overflow=''}}/>
              
                
            
                <div className='Cart-items'>
                    {cartItems.map(item=>{
                    return <CartItem key={item.id} id={item.id} quantity={item.quantity}/>
                    }) }
                </div>
               
               <div>
                    <h1>Всього: {total} грн</h1>
               </div>
                    <div className='list-submit'>
                        <div>
                            <label>Адреса доставки:</label>
                            <input type='text' value={where} onChange={(e)=>{setWhere(e.target.value)}}/>
                        </div>
                        <button onClick={submitCart} type='submit'>Відправити</button>
                    </div>
             
                
                    

            </div>
        </div>
     );
}
 
export default ListOfItems;