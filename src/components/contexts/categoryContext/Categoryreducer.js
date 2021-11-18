import { GET_CATEGORIES,DELETE_CATEGORY } from './../Types';
const CategoryReducer=(state,action)=>{

    switch (action.type) {
     case GET_CATEGORIES:
         return ({...state,categories:action.payload})
         case DELETE_CATEGORY:
             return ({...state,categories:state.categories.filter(category=>category.id!==action.payload)})
    
        default:
            return state;
    }
}
export default CategoryReducer