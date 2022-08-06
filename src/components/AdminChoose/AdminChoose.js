import './AdminChoose.scss'

import {Link} from 'react-router-dom'

const AdminChoose = () => {
    return ( 

        <div id='admin-choose'>
           
            <div className="wrapper">
                <Link to='/admin/create' className='choose-link'>Додати товар</Link>
                
                <Link to='/admin/edit' className='choose-link'>Редагувати товар</Link>
               
                <Link to='/admin/orders' className='choose-link'>Показати замовлення</Link>
                
            </div>
        </div>
        
     );
}
 
export default AdminChoose;