import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SellForm } from './pages/SellForm';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { RobotDetails } from './pages/RobotDetails';

const App = () => {
  return (  
    // basename={process.env.PUBLIC_URL} --> required for gh pages but not for vercel (vercel runs single page applications better) 
    <Router >
      <Routes>
        <Route
          exact 
          path="/"
          element={<Home />}
        />
        <Route 
          exact
          path="/products"
          element={<Products />}
        />
        <Route 
          exact 
          path="/sell" 
          element={<SellForm />} 
        />
        <Route
          exact
          path="/products/:id"
          element={<RobotDetails />}
        />
      </Routes>
    </Router>
  )
}

export default App;