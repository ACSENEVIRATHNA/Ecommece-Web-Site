import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Wish from './Pages/Wish';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wish/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/singup" element={<Signup/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
