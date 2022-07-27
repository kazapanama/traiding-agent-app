import {useState,useEffect} from 'react'

import {storage, db} from '../firebase'

import { collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"



const Admin = () => {
    
    const [name,setName] = useState('');
    const [weight,setWeight] = useState('');
    
    const [unit,setUnit] = useState('г');
    const [category,setCategory] = useState('Кава');

    
    const [inSet,setInSet] = useState('');
    const [price,setPrice] = useState('');
 
    
    
    const [img,setImg] = useState('');
    const [imgURL,setImgURL] = useState('')
    
    const usesrsCollectionRef = collection(db,'products')



    const handleSublit = async (e) => {
        e.preventDefault()

        let result = {
            name:name,
            weight:weight,
            measure_unit:unit,
            category:category,
            main_image:imgURL,
            price:price,
            in_set: inSet
        }

        await addDoc(usesrsCollectionRef,result)
      }


      useEffect(()=>{
        const uploadFile=()=>{

            const fileName = new Date().getTime() + img.name
            
            const storageRef = ref(storage,`${category}/${fileName}`)

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
                    
                    onChange={(e)=>setImg(e.target.files[0])}/>
                    <br />

                    <button>submit</button>

                </form>

               {img && <img src={URL.createObjectURL(img)} style={{width:200,aspectRatio:1}}/>}

            </div>
        
        </div>
     );
}
 
export default Admin;