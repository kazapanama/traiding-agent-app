import './OneItem.scss'

const oneItem = ({item}) => {
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
                    <button className='item-button'>Add to list</button>
                </div>
                
        </div>


     );
}
 
export default oneItem;