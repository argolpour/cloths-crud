import categoryContext from './CategoryContext';
import CategoryReducer from './Categoryreducer';
import { useReducer } from 'react';
import { GET_CATEGORIES,DELETE_CATEGORY } from '../Types';
const CategoryState = ({children}) => {
    const initialState={
        categories:[]
    }
    const [state, dispatch] = useReducer(CategoryReducer, initialState)
    //............Get Categories............
    const getCategories=async()=>{
        const response=await fetch('http://localhost:5000/categories')
        const data= await response.json();
        
        dispatch({type:GET_CATEGORIES,payload:data})
    }
      //............Create Categories............
      const createCategory=async(value)=>{
        const response=await fetch("http://localhost:5000/categories",{
            method:"POST",
            body:JSON.stringify(value),
            headers:{
                "Content-type":"Application/json"
            }
        })
        return response;
    }
          //............detele Categories............
          const deleteCategory=async(id)=>{
            const response=await fetch(`http://localhost:5000/categories/${id}`,{
                method:"DELETE"
            })
            dispatch({type:DELETE_CATEGORY,payload:id})
            return response 
          }
          //............Update Categories............
          const updateCategory=async(value,id)=>{
              const response=fetch(`http://localhost:5000/categories/${id}`,{
                  method:"PUT",
                  body:JSON.stringify(value),
                  headers:{
                      "Content-type":"Application/json"
                  }
              })
              return response
          }

    return (
        <categoryContext.Provider value={{...state,getCategories,createCategory,deleteCategory,updateCategory}}>
            {children}
        </categoryContext.Provider>
    )
}

export default CategoryState
