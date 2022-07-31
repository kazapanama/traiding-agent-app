import './ListOfCategories.scss'

import {useGetDb} from '../../context/DbContext'


const ListOfCategories = ({openCata,setOpenCata}) => {

    const {categories} = useGetDb()



    
    return ( 
        <div className={openCata ? 'ListOfCategories active' : 'ListOfCategories'}>
            <div className="wrapper">
                <img src="./images/header/x.png" alt="x icon" onClick={()=>setOpenCata(false)}/>
                
                
                <div className="links">
                    {categories[0] && categories.map((cata,i)=>{
                    return <a href={`#${cata}`} key={i} onClick={()=>setOpenCata(false)}>{cata}</a>
                    })}
                </div>
                



            </div>
        </div>
     );
}
 
export default ListOfCategories;