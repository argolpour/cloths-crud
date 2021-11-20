import { useState, useContext,useEffect } from 'react';
import userContext from './../../../contexts/userContext/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
const CreateUser = ({title,isEdit}) => {
    const {getUsers,createUser,users,updateUser}=useContext(userContext);
    const navigate=useNavigate();
    const {id}=useParams();
    const [values, setValues] = useState({
         firstname:"",
         lastname:"",
         email:"",
    })
    const onchangeHandler=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const onsubmitHandler=async(e)=>{
       e.preventDefault();
        if (values.firstname!=="" &&values.lastname!==""&&values.email!==""){
               
            if (isEdit) {
              const response=await updateUser(values,id)
              if (response.status===200) {
                navigate("/admin/user")
                getUsers();
            }
            
            }
            else {
                 const response=await createUser(values);
                 if (response.status===201) {
                    navigate("/admin/user")
                    getUsers();
                }
                
            }
        }
    }
    const dismissHandler=()=>{
        navigate("/admin/user")
    }
useEffect(() => {
   if (isEdit) {
       const user=users.find(user=>user.id===+id)
      setValues(user)
   }
   // eslint-disable-next-line 
}, [isEdit])
  
    return (
       
        <div className="wrapper">
            <h2>{title}</h2>
            <hr/>
         <form onSubmit={(e)=>{onsubmitHandler(e)}}>
  <div className="form-group">
    <label htmlFor="firstname">First name</label>
    <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="firstname" name="firstname"  value={values.firstname} onChange={(e)=>{onchangeHandler(e)}}/> 
  </div>
  <div className="form-group">
    <label htmlFor="lastname">Last Name</label>
    <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="lastname" name="lastname" value={values.lastname} onChange={(e)=>{onchangeHandler(e)}}/> 
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="title" aria-describedby="emailHelp" placeholder="email" name="email" value={values.email} onChange={(e)=>{onchangeHandler(e)}}/> 
  </div>
   
 <div className="d-flex">
  <button type="submit" className="btn btn-success">{isEdit?"Update":"Create"}</button>
  <button type="button" className="btn btn-danger ml-auto" onClick={dismissHandler}>Cancel</button>
  </div>
</form>
        </div>
    )
}

export default CreateUser
