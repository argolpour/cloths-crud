import '../product/productDB.css'
import userContext from './../../../contexts/userContext/UserContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
const UserDB = () => {
    const {getUsers,users,deleteUser}=useContext(userContext)
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [])
    const removeHandler=(id)=>{
        deleteUser(id)
    }
    return (
        <div className="product-wrapper">
        <div className="actions ">
        <Link to="/admin" className="btn btn-primary ">Back</Link>
        <Link to="/create-user" className="btn btn-primary ">Create</Link>
       
        </div>
       
        <ul className="list-group">
            {users.map(user=><li  className="list-group-item d-flex" key={user.id}>{`${user.firstname} ${user.lastname}`}<Link className="ml-auto" to={`/edit-user/${user.id}`}><i className="far fa-edit  mr-3"></i></Link><i className="far fa-trash-alt"onClick={()=>removeHandler(user.id)} ></i></li>)}
        </ul>
    </div>
    )
}

export default UserDB
