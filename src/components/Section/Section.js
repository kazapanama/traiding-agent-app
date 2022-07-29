import './Section.scss'
import OneItem from '../OneItem/OneItem'

const Section = ({products,category}) => {
    
    
    return(
        <div className="wrapper">
            <h2>{category}</h2>
            <div className='items'>

           {products[0] && products.filter(item=>item.category === category).map(item=>{
           
           return(
           <OneItem item={item} key={item.id}/>
)})}
           
            </div>
        </div>
        
    )
}

export default Section