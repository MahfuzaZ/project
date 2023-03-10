import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"

function App() {
  return (
    <Layout>
       <div className="App">
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/products' element={<Products/>}/>
         </Routes>
       </div>
    </Layout>
  );
}

export default App;
