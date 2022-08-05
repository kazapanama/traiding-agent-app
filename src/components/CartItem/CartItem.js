import './CartItem.scss'
import {useGetDb} from '../../context/DbContext'
import {useShoppingCart} from '../../context/ShoppingCardContext'


const CartItem = ({id,quantity}) => {
    const {products} = useGetDb()

    const {removeFromCart,increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()


    const item = products.find(i=>i.id===id)

  return (
    <div className='cart-item'>
      
      <div className='info'>
         <img src={item.main_image} alt={item.name}/>
        <span>{item.name}</span>
        <span className='quantity'>x{quantity}</span>
        <span className='price'>{item.price * quantity}грн</span>
      </div>
      
      <div>
        
        <button onClick={()=>decreaseCartQuantity(item.id)} className='add'>-1</button>
        <button onClick={()=>increaseCartQuantity(item.id)} className='add'>+1</button>
        <button onClick={()=>removeFromCart(item.id)} className='remove'>x</button>
      </div>
      
    </div>
    
  )
}

export default CartItem