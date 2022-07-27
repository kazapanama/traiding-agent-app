import './Coffee.scss'

const Coffee = ({products}) => {
    
    
    return(
        <div className="wrapper">
            <h2>coffee</h2>
            <div className='items'>

        {console.log(products)}
           
           {products[0] && products.map(item=>{
           
           return(
           
           <>
           
            <div className='one-item' >
                    <img src={item.main_image} className='item-image'/>
                    <h3>{item.name}</h3>
                <span>{item.weight} {item.measure_unit}</span>
                <span>{item.in_set}</span>
                <span>{item.price}грн</span>
                </div>
           </>
           
           
           
           )})}
      


           




                
            </div>
        </div>
        
    )
}

export default Coffee