import { DELETE_USER, GET_USER } from './../Types';
const UserReducer=(state,action)=>{

    switch (action.type) {
        case GET_USER:
            return ({...state,users:action.payload})
            case DELETE_USER:
                return ({...state,users:state.users.filter(user=>user.id!==action.payload)})
      default:
          return state;
      
    }
}
export default UserReducer