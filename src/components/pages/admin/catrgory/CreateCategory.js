
import { useState ,useContext,useEffect} from 'react';
import categoryContext from './../../../contexts/categoryContext/CategoryContext';
import { useNavigate,useParams} from 'react-router-dom';
const CreateCategory = ({title,isEdit}) => {
    const [value, setValue] = useState({
        name:''
    })
    const navigate=useNavigate()
    const {id}=useParams();
    const {createCategory,getCategories,categories,updateCategory}=useContext(categoryContext)
    const onChangeValue=(e)=>{
        setValue({...value,[e.target.name]:e.target.value}) 
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(value.name!==""){   
            if (isEdit) {
                updateCategory(value,id)                        
                
            } else {
                createCategory(value)                     
            }   
            getCategories()    
            navigate("/admin/category")    
        }
    }
    useEffect(() => {
       if (isEdit) {
          const category=categories.find(category=>category.id===+id)
          setValue({...category})
       }
       // eslint-disable-next-line 
    }, [isEdit])
    const dismiss=()=>{
        navigate("/admin/category")
    }
    return (
        <div className="wrapper">
        <h2>{title}</h2>
        <hr/>
     <form onSubmit={(e)=>{onSubmitHandler(e)}}>
<div className="form-group">
<label htmlFor="title">Name</label>
<input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Category name" name="name" value={value.name}  onChange={(e)=>onChangeValue(e)}/>
</div>


<div className="d-flex">
<button type="submit" className="btn btn-success">{isEdit?"Update":"Create"}</button>
<button type="button" className="btn btn-danger ml-auto" onClick={dismiss}>Cancel</button>
</div>
</form>
    </div>
    )
}

export default CreateCategory
