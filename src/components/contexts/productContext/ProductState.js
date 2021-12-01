
import ProductContext from './productContext';
import { Get_PRODUCT,DELETE_PRODUCT,GET_SINGLE_PRODUCT,GET_RECOMMENDED_PRODUCT } from '../Types';
import { useReducer } from 'react';
import productReducer from './productreducer';

const ProductState = ({children}) => {
    const initialState={
        products:[],
        product:{},
        recommendedProduct:[],
        count:0,
        loading:false
    }
   
    const [state, dispatch] = useReducer(productReducer, initialState )

    //.........GET All Products
    const getProducts=async (current)=>{
        try {
            const response=await fetch(`http://localhost:5000/products?_page=${current}&_limit=8`)
            const data=await response.json();
           const Count=response.headers.get('x-total-count');
            dispatch({type:Get_PRODUCT,payload:data,totalCount:Count})
            return Count;
        } catch (error) {
            console.log(error);
        }
       
    }
    //.........grt product By ID.......
    const getProduct=async(id)=>{
        const response=await fetch(`http://localhost:5000/products/${id}`) 
        const data=await response.json();
        dispatch({type:GET_SINGLE_PRODUCT,payload:data})
    }
     //.........grt product By category.......
     const getProductbyCategory=async(category)=>{
        const response=await fetch(`http://localhost:5000/products`) 
        const data=await response.json();
        const result=await data.filter(item=>item.category===category)
        const recommendedProduct=result.slice(0,4);
         dispatch({type:GET_RECOMMENDED_PRODUCT,payload:recommendedProduct})
    }
     //.........Create New Product...........
     const createproduct=async(valuse)=>{
         const response=await fetch("http://localhost:5000/products",{
             method:"POST",
             body:JSON.stringify(valuse),
             headers:{
                 "Content-type":"Application/json"
             }
         })
         return response;
     }
 //.........Delete Product...........
 const deleteProduct=async(id)=>{
     const response=await fetch(`http://localhost:5000/products/${id}`,{
         method:"DELETE"
     })
    dispatch({type:DELETE_PRODUCT,payload:id})
     return response;
 }
    //.........Update  Product...........
    const Updateproduct=async(valuse,id)=>{
        const response=await fetch(`http://localhost:5000/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(valuse),
            headers:{
                "Content-type":"Application/json"
            }
        })
         return response;
    }
    return (
        <ProductContext.Provider value={{...state,getProducts,createproduct,deleteProduct,Updateproduct,getProduct,getProductbyCategory}}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductState
