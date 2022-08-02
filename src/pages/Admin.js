import {Link} from 'react-router-dom'

const Admin = () => {
    return ( 
        <div className="wrapper">
            <h1>ADMIN PAGE</h1>
            <Link to='/admin/create'>Cerate Item</Link>
            <br />
            <Link to='/admin/orders'>Show orders</Link>
            <br />
            <Link to='/admin/edit'>Edit items</Link>
        </div>
        
     );
}
 
export default Admin;