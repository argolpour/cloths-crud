import '../product/productDB.css'
import userContext from './../../../contexts/userContext/UserContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
const UserDB = () => {
    const {getUsers,users}=useContext(userContext)
    useEffect(() => {
        getUsers()
    }, [])
    console.log(users);
    return (
        <div className="product-wrapper">
        <div className="actions ">
        <Link to="/admin" className="btn btn-primary ">Back</Link>
        <Link to="/create-user" className="btn btn-primary ">Create</Link>
       
        </div>
       
        <ul className="list-group">
            {users.map(user=><li  className="list-group-item d-flex" key={user.id}>{`${user.name.firstname} ${user.name.lastname}`}<Link className="ml-auto" to="edit-user"><i className="far fa-edit  mr-3"></i></Link><i className="far fa-trash-alt" ></i></li>)}
        </ul>
    </div>
    )
}

export default UserDB
