import Section from "../components/Section/Section";
import {useGetDb} from '../context/DbContext'






const Main = () => {
    

     const {products,categories} = useGetDb()

    return ( 

        <div className="wrapper">
          <h1>main page </h1>
             

          {categories.map((item,i)=>< Section products={products} category={categories[i]} key={i}/>)}
        </div>

     );
}
 
export default Main;