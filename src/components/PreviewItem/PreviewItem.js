import './PreviewItem.scss'



const PreviewItem = ({imgURL}) => {
    return ( 
        

        <div className='one-item' >
                <div className='item-imgage-container'>
                    <img src={imgURL} className='item-image' alt='prev-img'/>
                </div>
                <div className="item-text">
                    <h3>item.name</h3>
                    <span>Вага:  item.weight item.measure_unit</span>
                    <span>item.in_set</span>
                    <span>Ціна:  item.priceгрн</span>
                     <button className='item-button'>Додати в список</button>
                   
                </div>
                
        </div>


     );
}
 
export default PreviewItem;