import './AdminChoose.scss'

import {Link} from 'react-router-dom'

const AdminChoose = () => {
    return ( 

        <div id='admin-choose'>
            <h1>ADMIN PAGE</h1>
            <div className="wrapper">
                
                <Link to='/admin/create' className='choose-link'>Cerate Item</Link>
               
                <Link to='/admin/orders' className='choose-link'>Show orders</Link>
                
                <Link to='/admin/edit' className='choose-link'>Edit items</Link>
            </div>
        </div>
        
     );
}
 
export default AdminChoose;