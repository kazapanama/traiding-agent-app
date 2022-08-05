import './Header.scss'

import {Link} from 'react-router-dom'
import ListOfCategories from '../ListOfCategories/ListOfCategories'
import ListOfItems from '../ListOfItems/ListOfItems'

const Header = ({openCata,setOpenCata,openList,setOpenList}) => {
    return(
        <>
        <ListOfCategories openCata={openCata} setOpenCata={setOpenCata}/>
        <ListOfItems openList={openList} setOpenList={setOpenList} />
        <header>
            <div className="wrapper">
               <Link to='/'> <h1 className='logo'>Каталог</h1></Link>
                <div className="header-icons">
                <Link to='/admin'><img src='./images/header/admin.svg' alt='list icon' /></Link>
              
                    <img src='./images/header/list.svg' alt='list icon' onClick={()=>{
                        setOpenList(true) 
                        document.body.style.overflow='hidden'}}/>
                    <img src='./images/header/category.svg' alt='category icon' onClick={()=>{
                        setOpenCata(true)
                        document.body.style.overflow='hidden'}}/>
                </div>

                        

            </div>
          
        </header>
        
        </>
        
    )
}

export default Header