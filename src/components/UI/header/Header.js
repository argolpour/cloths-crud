import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <div className="login">
                {/* <button className="btn btn-primary">Login</button> */}
            </div>
            <nav className="nav">
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/login?isAdmin=true"> <li>Admin</li></Link>
            
                </ul>
            </nav>
        </header>
    )
}

export default Header
