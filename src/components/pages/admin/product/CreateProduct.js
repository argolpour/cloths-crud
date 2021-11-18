
import { useContext, useState ,useEffect} from "react"
import { useNavigate,useParams } from "react-router-dom";
import productContext from './../../../contexts/productContext/productContext';
import CategoryContext from './../../../contexts/categoryContext/CategoryContext';


export const CreateProduct = ({title ,isEdit}) => {
    const {createproduct,getProducts,products,Updateproduct}=useContext(productContext);
    const {getCategories,categories}=useContext(CategoryContext)
    const {id}=useParams()
    const navigate=useNavigate();
    const [values, setValues] = useState({
        title:'',
        description:'',
        category:'',
        image:'',
        price:''
    })
    const onChangeHandler=(e)=>{
        setValues({...values,[e.target.name]:e.target.value}) 
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if (values.title && values.description&& values.image && values.title && values.category) {
          if (isEdit){
             Updateproduct(values,id)          
          }
          else {
             createproduct(values);            
          }          
            getProducts()
            navigate("/admin/product");        

        }
    }
    const dismissHandler=()=>{
        navigate("/admin/product")
    }
    useEffect(() => {
     if (isEdit) {
      
      const product=products.find(product=>product.id===+id);
      setValues({...product})
      
     }
     // eslint-disable-next-line
    }, [isEdit])
    useEffect(() => {
      getCategories()
      // eslint-disable-next-line
    }, [])
   
    return (
        
        <div className="wrapper">
            <h2>{title}</h2>
            <hr/>
         <form onSubmit={(e)=>onSubmitHandler(e)}>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Product Title" name="title" value={values.title} onChange={onChangeHandler}/>
 
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" aria-describedby="emailHelp" placeholder="Product Description"  name="description" value={values.description} onChange={onChangeHandler}/>
 
  </div>
  {/* <div className="form-group">
    <label htmlFor="category">Category</label>
    <input type="text" className="form-control" id="category" aria-describedby="emailHelp" placeholder="Product Category"  name="category" value={values.category} onChange={onChangeHandler}/>
 
  </div> */}
  <label className="mr-sm-2" htmlFor="category">Category</label>
  <select className="custom-select" id="category"  value={values.category} onChange={onChangeHandler} name="category">
  <option defaultValue >select the category</option>
   {categories?.map(category=> <option value={category.name} key={category.id} >{category.name}</option>)}
</select>
  <div className="form-group">
    <label htmlFor="image">Image Link</label>
    <input type="text" className="form-control" id="image" aria-describedby="emailHelp" placeholder="Product image"  name="image" value={values.image} onChange={onChangeHandler}/>
 
  </div>
  <div className="form-group">
    <label htmlFor="price">Price </label>
    <input type="text" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Product price"  name="price" value={values.price} onChange={onChangeHandler}/>
 
  </div>
  
 <div className="d-flex">
  <button type="submit" className="btn btn-success">{isEdit?'Update':'create'}</button>
  <button type="button" className="btn btn-danger ml-auto" onClick={dismissHandler}>Cancel</button>
  </div>
</form>
        </div>
    )
}
