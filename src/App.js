import './App.css';
import Home from './Pages/Home';
import Products from '../src/Components/Products/Products';
import Navbar from '../src/Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product/Product';
function App() {
  return (
    <div className="App">

<Navbar />

      <Routes>
        <Route index path="/home" element={ <Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Content/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
