import userContext from './UserContext';
import { useReducer } from 'react';
import { GET_USER, DELETE_USER } from './../Types';
import UserReducer from './UserReducer'
const UserState = ({children}) => {
    const initialState={
        users:[]
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    //.........get Users..........
    const getUsers=async()=>{
        const response=await fetch('http://localhost:5000/users')
        const data=await response.json();
       
        dispatch({type:GET_USER,payload:data})
    }
        //.........create Users..........
        const createUser=async(values)=>{
            const response=await fetch('http://localhost:5000/users',{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-type":"Application/json"
                }
            })
            return response;
        }

        //...............delete user.......
        const deleteUser=async(id)=> {
        const response=await fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        dispatch({type: DELETE_USER,payload:id})
        return response;
        }
         //...............delete user.......
         const updateUser=async(values,id)=>{
             const response=fetch(`http://localhost:5000/users/${id}`,{
                 method:"PUT",
                 body:JSON.stringify(values),
                 headers:{
                     "Content-type":"Application/json"
                 }
             })
             return response;
         }

    return (
       <userContext.Provider value={{...state,getUsers,createUser,deleteUser,updateUser}}>
           {children}
       </userContext.Provider>
    )
}

export default UserState
