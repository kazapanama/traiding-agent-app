import './pagesStyles/Orders.scss'

import useFetchOrders from '../hooks/useFetchOrders'
import  {useGetDb}  from '../context/DbContext';

import {db} from '../firebase'
import {updateDoc, doc,deleteDoc} from 'firebase/firestore'


const Orders = () => {

    const {products} = useGetDb()
    const {orders} = useFetchOrders();
    let filtered = orders.sort((a,b)=>a.isDone + b.isDone)
    
    

    const updateOrder = async(id,isDone) => {
        const orderDoc = doc(db,'orders',id)
        const newFields = {isDone:!isDone}
        await updateDoc(orderDoc,newFields)
      }

      const deleteOrder = async(id) => {
        if (window.confirm("Точно видалити? Відновити буде неможливо")) {
            const orderDoc = doc(db,'orders',id)
            await deleteDoc(orderDoc)
        }
        
      }




    return ( 
        <div className="wrapper">
           
           <div className='all-orders'>

           {filtered && filtered.map(order=>{
           return(
            <div className={order.isDone ? 'one-order order-done' : 'one-order order-pending'} key={order.id}>
                <h2>{order.destanation}</h2>
                <h3>сформовано:{(new Date(order.date)).toLocaleDateString()}</h3>
                {order.order.map(pos=>{
                    const item = products.find(i=>i.id===pos.id)
                    return(
                        <div className='order-info' key={pos.id}>
                            <div className='left-part'>
                                 <img src={item.main_image} alt={item.name} className='order-img'/>
                                 <span className='order-info-name'>{item.name}</span>
                            </div>
                            
                            <div className='right-part'>
                                <span className='order-info-quantity'>x{pos.quantity}</span>
                                <span>{item.price*pos.quantity}грн</span>
                             </div>
                            
                            
                        </div>
                        
                    )
                })}
                        <div className='buttons-section'>
                            <button onClick={()=>updateOrder(order.id,order.isDone)} className='update-btn'>Оновити стан</button>
                             <button onClick={()=>deleteOrder(order.id,order.isDone)} className='delete-btn'>Видалити</button>
                        </div>
                        
            </div>
           ) 
        })}


           </div>
        

           
            
        </div>
        
     );
}
 
export default Orders;