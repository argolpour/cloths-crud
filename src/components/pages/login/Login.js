import {styles} from './styles'
import loginImage from '../../../images/loginImage.jpg'
import { useState, useContext, useEffect } from 'react';
import CustomerContext from './../../contexts/customer/CutomerContext';
import { useNavigate ,useLocation} from 'react-router-dom';
const Login = () => {
    const classes=styles()
    const navigate=useNavigate()
    const search=useLocation().search;
    const productId=new URLSearchParams(search).get('productid')

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const {getCustomers,customers}=useContext(CustomerContext)

      useEffect(() => {
      getCustomers()
      // eslint-disable-next-line 
    }, [])

    const loginHandler=(e)=>{
       
        if(userName && password){
            const customer=customers.find(customer=>customer.username===userName && customer.password===password)
            if (customer!==undefined){
             navigate(`/customer/${customer.id}?name=${customer.firstname}_${customer.lastname}&productid=${productId}`)
            }else {
              setError("username or password is wrong")
            }
        }
        e.preventDefault()
      
    }
    return (
        <div className={classes.wrapper} >
            <img src={loginImage} alt="login"/>
            <div className={classes.loginWrapper}>
                <h2>Log In</h2>
                {error && <li className={classes.error}>{error}</li>}
            <form className="form-group" onSubmit={(e)=>{loginHandler(e)}}>
            <label htmlFor="username">User Name:</label>
            <input type="text" className="form-control" id="username" autoComplete="off" value={userName} onChange={(e)=>(setUserName(e.target.value))} onKeyUp={()=>{setError('')}} placeholder="user name..."/>
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e)=>(setPassword(e.target.value))}  onKeyUp={()=>{setError('')}}  placeholder="user name..."/>
            <button type="submit" className="btn btn-dark btn-block">Login</button>
            </form>
 
            </div>
        </div>
    )
}

export default Login
