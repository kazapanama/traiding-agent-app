import {useState} from 'react'

import '../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Admin = () => {
    
    const [name,setName] = useState('');
    const [weight,setWeight] = useState('');
    
    const [unit,setUnit] = useState('г');
    const [category,setCategory] = useState('Кава');

    
    const [inSet,setInSet] = useState('');
    const [price,setPrice] = useState('');
 
    
    
    const [img,setImg] = useState(null);
    
    const handleSublit = (e) => {
        e.preventDefault()
      }




    return ( 
       
       
     
       
       <div className="wrapper">
            <h1>admin page</h1>
            <div>
                <h2>add new product</h2>
                <form onSubmit={handleSublit}>
                    <label>name:</label>
                    <input type="text" name='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                    <br />

                    <label>weight:</label>
                    <input type="text" name='weight'
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}/>
                    <br />

                    <label>unit:</label>
                    <input type="text" name='unit'
                    value={unit}
                    onChange={(e)=>setUnit(e.target.value)}/>
                    <br />

                    <label>in_set:</label>
                    <input type="text" name='in_set'
                    value={inSet}
                    onChange={(e)=>setInSet(e.target.value)}/>
                    <br />

                    <label>category:</label>
                    <input type="text" name='category' 
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}/>
                    <br />

                    <label>price:</label>
                    <input type="text" name='price'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}/>
                    <br />

                    <label>img:</label>
                    <input type="file"  
                    value={img}
                    onChange={(e)=>setImg(e.target.files[0])}/>
                    <br />

                    <button>submit</button>

                </form>

               

            </div>
        
        </div>
     );
}
 
export default Admin;