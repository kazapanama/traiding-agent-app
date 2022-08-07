import './pagesStyles/AddItem.scss'
import '../components/OneItem/OneItem'
import {useState,useEffect} from 'react'

import {storage, db} from '../firebase'

import { collection, addDoc} from 'firebase/firestore'
// , updateDoc, doc, deleteDoc, onSnapshot

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import PreviewItem from '../components/PreviewItem/PreviewItem'

import { useGetDb } from '../context/DbContext'




const AddItem = () => {
    

    const [anItem,setAnItem] = useState({
        name:'',
        weight:0,

        unit:'г',
        category:'Кава',

        inSet:'',
        price:0,


    })
    
    const {reload,setReload} = useGetDb()
    const [img,setImg] = useState('');
    const [imgURL,setImgURL] = useState('')
    
    const usesrsCollectionRef = collection(db,'products')

    const resetForm = async() => {
        setAnItem({
            name:'',
            weight:0,
    
            unit:'г',
            category:'Кава',
    
            inSet:'',
            price:0,
    
    
        })
        setImg('')
        setImgURL('')
      }


    const handleSublit = async (e) => {
        e.preventDefault()

        let result = {
            name:anItem.name,
            weight:anItem.weight,
            measure_unit:anItem.unit,
            category:anItem.category,
            main_image:imgURL,
            price:anItem.price,
            in_set: anItem.inSet
        }

        await addDoc(usesrsCollectionRef,result)
        await resetForm()
         setReload(!reload)
      }

      

      useEffect(()=>{
        const uploadFile=()=>{

            const fileName = new Date().getTime() + img.name
            
            const storageRef = ref(storage,`${anItem.category}/${fileName}`)

            const uploadTask = uploadBytesResumable(storageRef, img);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgURL(downloadURL)
                });
            }
            );

        }
       img && uploadFile()
      },[img])



      

    return ( 
       
        <div id="add-item">
            <h1>Додати новий товар</h1>
            <div className="wrapper">
           
           

            <div className='form-part'>
                
            

                    <div className='form-one-input'>
                        <label>Назва:</label>
                        <input type="text" name='name'
                        value={anItem.name}
                        onChange={(e)=>setAnItem({...anItem,name:e.target.value})}/>
                    </div>
                    
                    <div className='form-one-input'>
                        <label>Вага:</label>
                        <input type="text" name='weight'
                        value={anItem.weight}
                        onChange={(e)=>setAnItem({...anItem,weight:+e.target.value})}/>
                    </div>
                    
                    <div className='form-one-input'>
                        <label>Од. вим.:</label>
                        <input type="text" name='unit'
                        value={anItem.unit}
                        onChange={(e)=>setAnItem({...anItem,unit:e.target.value})}/>
                    </div>
                    
                    <div className='form-one-input'>
                        <label>В ящику:</label>
                        <input type="text" name='in_set'
                        value={anItem.inSet}
                        onChange={(e)=>setAnItem({...anItem,inSet:e.target.value})}/>
                    </div>
                    
               

                    <div className='form-one-input'>
                        <label>Категорія:</label>

                        <select onChange={(e)=>setAnItem({...anItem,category:e.target.value})}> 
                            <option value="Кава" >Кава</option>
                            <option value="Солодощі" >Солодощі</option>
                            <option value="Консервація | Макарони" >Консервація | Макарони</option>
                            <option value="М'ясні вироби" >М'ясні вироби</option>
                            <option value="Сир" >Сир</option>
                            <option value="change">Інша</option>
                        </select>

                        <input type="text" name='category' 
                            value={anItem.category}
                            onChange={(e)=>setAnItem({...anItem,category:e.target.value})}/>

                    </div>

                    <div className='form-one-input'>
                        <label>Ціна:</label>
                        <input type="text" name='price'
                        value={anItem.price}
                        onChange={(e)=>setAnItem({...anItem,price:+e.target.value})}/>
                    </div>

                    <div className='form-one-input'>
                        <label>Картинка:</label>
                        <input type="file"
                        placeholder='asd' 
                        onChange={(e)=>setImg(e.target.files[0])}/>
                    </div>


                    <button className='submit-btn' onClick={handleSublit}>Додати</button>

                

               

            </div>





            <PreviewItem imgURL={imgURL} item={anItem}/>


            </div>
        </div>
       
     );
}
 
export default AddItem;