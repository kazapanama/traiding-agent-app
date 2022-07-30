import './ListOfItems.scss'
import { useShoppingCart } from '../../context/ShoppingCardContext';


const ListOfItems = ({openList,setOpenList}) => {
    

const {cartItems} = useShoppingCart();

    
    return ( 
        <div className={openList ? 'ListOfItems active' : 'ListOfItems'}>
            <div className="wrapper">
                <img src="./images/header/x.png" alt="x icon" onClick={()=>setOpenList(false)}/>
                
                
                <div className="links">
                    {cartItems.map((item,i)=>{
                       return (
                       <div key={i}>
                            <h3>id:{item.id}</h3>
                            <h3>quantity:{item.quantity}</h3>
                            <br />
                       </div>
                       )
                    })}
                    {console.log(cartItems)}
                </div>
                



            </div>
        </div>
     );
}
 
export default ListOfItems;