
import { useContext ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import categoryContext from './../../../contexts/categoryContext/CategoryContext';

const CategoryDB = () => {
   
    const {getCategories,categories,deleteCategory}=useContext(categoryContext)
    useEffect(() => {
        getCategories()      
                // eslint-disable-next-line
    }, [])
   
     const removehandler=(id)=>{
        deleteCategory(id)
        getCategories()
    }
   
 
    return (
        <div className="product-wrapper">
            <div className="actions ">
            <Link to="/admin" className="btn btn-primary ">Back</Link>
            <Link to="/create-category" className="btn btn-primary ">Create</Link>
           
            </div>
           
            <ul className="list-group">
            {categories.map(category=><li className="list-group-item d-flex" key={category.id}>{category.name}<Link className="ml-auto" to={`/edit-category/${category.id}`}><i className="far fa-edit  mr-3"></i></Link> <i className="far fa-trash-alt" onClick={()=>{removehandler(category.id)}}></i></li>)}
            </ul>
        </div>
    )
}


export default CategoryDB
