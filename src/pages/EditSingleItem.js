import './pagesStyles/EditSingleItem.scss'

import { useEffect,useState } from 'react'
import { useGetDb } from '../context/DbContext'
import PreviewItem from '../components/PreviewItem/PreviewItem'
import {useParams} from 'react-router-dom'
import {db} from '../firebase'
import {updateDoc,doc} from 'firebase/firestore'

const EditSingleItem = () => {
    
    const{id} = useParams()
    const [singleItem,setSingleItem] = useState({})
    const {products} = useGetDb()

    // const [img,setImg] = useState('');
    // const [imgURL,setImgURL] = useState('')
    

useEffect(()=>{
    if (products[1]){
        const filtered = products.filter(item=>item.id === id)[0]
        setSingleItem(filtered)
        console.log(singleItem)
    }
    
},[products])

// useEffect(()=>{
//     const uploadFile=()=>{

//         const fileName = new Date().getTime() + img.name
        
//         const storageRef = ref(storage,`${anItem.category}/${fileName}`)

//         const uploadTask = uploadBytesResumable(storageRef, img);

//         // Register three observers:
//         // 1. 'state_changed' observer, called any time the state changes
//         // 2. Error observer, called on failure
//         // 3. Completion observer, called on successful completion
//         uploadTask.on('state_changed', 
//         (snapshot) => {
//             // Observe state change events such as progress, pause, and resume
//             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//             switch (snapshot.state) {
//             case 'paused':
//                 console.log('Upload is paused');
//                 break;
//             case 'running':
//                 console.log('Upload is running');
//                 break;
//             default:
//                 break;
//             }
//         }, 
//         (error) => {
//             // Handle unsuccessful uploads
//         }, 
//         () => {
//             // Handle successful uploads on complete
//             // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 setImgURL(downloadURL)
//             });
//         }
//         );

//     }
//    img && uploadFile()
//   },[img])


const editItem = async(id,singleItem,e) => {
    e.preventDefault()
    
    let result = {
        name:singleItem.name,
        weight:singleItem.weight,
        measure_unit:singleItem.measure_unit,
        category:singleItem.category,
        price:singleItem.price,
        in_set: singleItem.in_set
    }

    const itemDoc = doc(db,'products',id)
    await updateDoc(itemDoc,result)
    
  }



    return ( 
        <div id='edit-single'>
            <h1>EDIT SINGLE ITEM {id}</h1>
            <div className="wrapper">
                
                
            <div className="form-part">
            <label>Назва:</label>
                <input value={singleItem.name} 
                onChange={(e)=>setSingleItem({...singleItem,name:e.target.value})}>
                </input>
                <br/>

                <label>Вага:</label>
                <input value={singleItem.weight} 
                onChange={(e)=>setSingleItem({...singleItem,weight:e.target.value})}>
                </input>
                <br/>

                <label>Од. вим.:</label>
                <input value={singleItem.measure_unit} 
                onChange={(e)=>setSingleItem({...singleItem,measure_unit:e.target.value})}>
                </input>
                <br/>

                <label>В ящику:</label>
                <input value={singleItem.in_set} 
                onChange={(e)=>setSingleItem({...singleItem,in_set:e.target.value})}>
                </input>
                <br/>

                <select onChange={(e)=>setSingleItem({...singleItem,category:e.target.value})}> 
                    <option value="Кава" >Кава</option>
                    <option value="Солодощі" >Солодощі</option>
                    <option value="Консервація | Макарони" >Консервація | Макарони</option>
                    <option value="М'ясні вироби" >М'ясні вироби</option>
                    <option value="Сир" >Сир</option>
                    <option value="change">Інша</option>
                    </select>
                <br />

                <label>Категорія:</label>
                <input value={singleItem.category} 
                onChange={(e)=>setSingleItem({...singleItem,category:e.target.value})}>
                </input>
                <br/>

                <label>Ціна:</label>
                <input value={singleItem.price} 
                onChange={(e)=>setSingleItem({...singleItem,price:e.target.value})}>
                </input>
                <br/>


                {/* <label>img:</label>
                <input type="file"  
                onChange={(e)=>setImg(e.target.files[0])}/>
                <br /> */}

                <button className='submit-btn'
                onClick={(e)=>editItem(id,singleItem,e)}>Змінити</button>

                
            </div>
                
            <PreviewItem imgURL={singleItem.main_image} item={singleItem}/>
            

             </div>
        </div>
        
     );
}
 
export default EditSingleItem;