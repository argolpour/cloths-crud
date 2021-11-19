import userContext from './UserContext';
import { useReducer } from 'react';
import { GET_USER } from './../Types';
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
        console.log(data);
        dispatch({type:GET_USER,payload:data})
    }

    return (
       <userContext.Provider value={{...state,getUsers}}>
           {children}
       </userContext.Provider>
    )
}

export default UserState
