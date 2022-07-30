import Section from "../components/Section/Section";

import useFetchDB from "../hooks/useFetchDB"; 



const Main = () => {
    

     const {products,categories} = useFetchDB()

    return ( 

        <div className="wrapper">
          <h1>main page </h1>
             

          {categories.map((item,i)=>< Section products={products} category={categories[i]} key={i}/>)}
        </div>

     );
}
 
export default Main;