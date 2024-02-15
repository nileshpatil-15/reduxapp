// Import necessary dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
function App() {
  return (
    <Router>
        {/* Define your routes */}
        <Navbar/>
        <Routes>
          {/* Define routes for different components */}
       <Route path='/' Component={Dashboard}/>
       <Route path='/products/:productId' Component={SingleProduct}/>
<Route Component={NotFound}/>
        </Routes>
     
    </Router>
  );
}

export default App;
