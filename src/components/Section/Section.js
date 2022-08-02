import './Section.scss'
import OneItem from '../OneItem/OneItem'

const Section = ({products,category}) => {
    
    
    return(
        
        <div className="wrapper">
            <div className="category-heading-background">
                <h2 className='category-heading'>{category}</h2>
            </div>
            
            <div className='items' id={category}>

           {products[0] && products.filter(item=>item.category === category).map(item=>{
           
           return(
           <OneItem item={item} key={item.id}/>
)})}
           
            </div>
        </div>
        
    )
}

export default Section