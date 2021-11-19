import { GET_USER } from './../Types';
const UserReducer=(state,action)=>{

    switch (action.type) {
        case GET_USER:
            return ({...state,users:action.payload})
      default:
          return state;
      
    }
}
export default UserReducer