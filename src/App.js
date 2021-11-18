import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Admin from './components/pages/admin/Admin';
import Home from './components/pages/Home/Home';
import Header from './components/UI/header/Header'
import ProductState from './components/contexts/productContext/ProductState';
import { CreateProduct } from './components/pages/admin/product/CreateProduct';
import ProductDB from './components/pages/admin/product/ProductDB';
import CategoryState from './components/contexts/categoryContext/CategoryState';
import CategoryDB from './components/pages/admin/catrgory/CategoryDB';
import CreateCategory from './components/pages/admin/catrgory/CreateCategory';

function App() {
  return (
<>
<Router>
  <CategoryState>
  <ProductState>
<Header/>
  <Routes>
      <Route path="/" element={<Home/>}>
    </Route>
    <Route path="/admin" element={<Admin/>}>
    </Route>
    <Route path="/admin/product" element={<ProductDB/>}>
    </Route>
    <Route path="/create-product" element={<CreateProduct title="Create product"/>}>
    </Route>
    <Route path="/edit-product/:id" element={<CreateProduct title="Update product" isEdit/>}>
    </Route>
    <Route path="/admin/category" element={<CategoryDB/>}>
    </Route>
    <Route path="/create-category" element={<CreateCategory title="Create Category"/>}>
    </Route>
    <Route path="/edit-category/:id" element={<CreateCategory title="Update Category" isEdit/>}>
    </Route>
  </Routes>
  </ProductState>
  </CategoryState>
</Router>
</>
  );
}

export default App;
