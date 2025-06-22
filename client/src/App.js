import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import HomePage from './views/HomePage';
import NotFoundPage from './views/NotFoundPage/index'
import CategoryPage from './views/CategoryPage';
import CategoryProductsPage from './views/CategoryProductsPage';
import ProductsListPage from './views/ProductsPage';
import ProductsSalesPage from './views/ProductsSalesPage';
import ProductItemPage from './views/ProductItemPage';
import CartPage from './views/CartPage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<CategoryPage/>}/> 
        <Route path='/categories' element={<CategoryPage/>}/> 
        <Route path='/category/:id' element={<CategoryProductsPage/>}/>
        <Route path='/products/all' element={<ProductsListPage/>}/>
        <Route path='/products/:id' element={<ProductItemPage/>}/>
        <Route path='/products/sales' element={<ProductsSalesPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
