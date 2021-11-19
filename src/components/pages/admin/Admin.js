import { Link } from "react-router-dom";
import './Admin.css'

const Admin = () => {
    return (
        // <div className="container my-5">
        //    <Link to="/create-product">Create Product</Link>
        // </div>
        <div className="links-wrapper">
            <Link to="/admin/product"><button className="btn btn-primary btn-block">Product  Dashbord</button></Link>
            <Link to="/admin/category"><button className="btn btn-primary btn-block">Category  Dashbord</button></Link>
            <Link to="/admin/user"> <button className="btn btn-primary btn-block">Users  Dashbord</button></Link>
        </div>
    )
}

export default Admin
