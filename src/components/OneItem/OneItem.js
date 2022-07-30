import { useShoppingCart } from '../../context/ShoppingCardContext';
import './OneItem.scss'

const OneItem = ({item}) => {
    
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(item.id)
    return ( 

        <div className='one-item' >
                <div className='item-imgage-container'>
                    <img src={item.main_image} className='item-image' alt={item.name}/>
                </div>
                <div className="item-text">
                    <h3>{item.name}</h3>
                    <span>{item.weight} {item.measure_unit}</span>
                    <span>{item.in_set}</span>
                    <span>{item.price}грн</span>
                    { quantity === 0 && <button className='item-button' onClick={()=>increaseCartQuantity(item.id)}>Add to list</button>}
                   {quantity > 0 && <div className='quantity-buttons'>
                        <div>
                            <button className='quantity-add' onClick={()=>decreaseCartQuantity(item.id)}>-1</button>
                            <span>{quantity}</span>
                            <button className='quantity-add' onClick={()=>increaseCartQuantity(item.id)}>+1</button>
                        </div>
                        <button className='quantity-remove' onClick={()=>removeFromCart(item.id)}>remove item</button>
                    </div>} 
                </div>
                
        </div>


     );
}
 
export default OneItem;