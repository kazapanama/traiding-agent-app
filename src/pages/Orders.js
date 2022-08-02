import './pagesStyles/Orders.scss'

import useFetchOrders from '../hooks/useFetchOrders'
import  {useGetDb}  from '../context/DbContext';


const Orders = () => {

    const {products} = useGetDb()
    const {orders} = useFetchOrders();

    return ( 
        <div className="wrapper">
           
           <div className='all-orders'>

           {orders && orders.map(order=>{
           return(
            <div className={order.isDone ? 'one-order order-done' : 'one-order order-pending'}>
                <h1>{order.destanation}</h1>
                {order.order.map(pos=>{
                    const item = products.find(i=>i.id===pos.id)
                    return(
                        <div className='order-info'>
                        <img src={item.main_image} alt={item.name} className='order-img'/>
                            <span className='order-info-name'>{item.name}</span>
                            <span className='order-info-quantity'>x{pos.quantity}</span>
                            <span>{item.price*pos.quantity}грн</span>
                            
                        </div>
                        
                    )
                })}

            </div>
           ) 
        })}


           </div>
        

           
            {console.log(products)}
        </div>
        
     );
}
 
export default Orders;