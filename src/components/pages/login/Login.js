import {styles} from './styles'
import loginImage from '../../../images/loginImage.jpg'
import { useState, useContext, useEffect } from 'react';
import CustomerContext from './../../contexts/customer/CutomerContext';
import userContext from './../../contexts/userContext/UserContext';
import { useNavigate ,useLocation} from 'react-router-dom';

const Login = () => {
    const classes=styles()
    const navigate=useNavigate()
    const search=useLocation().search;
    const productId=new URLSearchParams(search).get('productid')
    const isAdmin=new URLSearchParams(search).get('isAdmin')


    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const {getCustomers,customers}=useContext(CustomerContext)
    const {getUsers,users}=useContext(userContext)


      useEffect(() => {
      getCustomers()
      getUsers()
      // eslint-disable-next-line 
    }, [])

    const loginHandler=(e)=>{
             
        if(userName && password){
            if (isAdmin){
                const admin=users.find(user=>user.username===userName && user.password===password)
                if (admin!==undefined){
                 navigate(`/admin`)
                }else {
                  setError("username or password is wrong")
                }     
            }else {
                const customer=customers.find(customer=>customer.username===userName && customer.password===password)
            if (customer!==undefined){
             navigate(`/customer/${customer.id}?name=${customer.firstname}_${customer.lastname}&productid=${productId}`)
            }else {
              setError("username or password is wrong")
            } 
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
            <p className="d-flex justify-content-space"><strong>Admin: username:<span className="color-red"> admin</span></strong> <strong className="ml-auto">password:<span className="color-red">  123</span></strong></p>
            <p className="d-flex justify-content-space"><strong>customer: username:<span className="color-yellow">  ss</span></strong> <strong className="ml-auto">password:<span className="color-yellow"> 123</span></strong></p>
            </form>
 
            </div>
        </div>
    )
}

export default Login
