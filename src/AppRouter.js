import './App.css';
//react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LocationList from './pages/LocationList';
import Navbar from './component/Navbar';

function AppRouter() {
  
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/location-list' element= {<LocationList />} />
          <Route path='*' element= {<NotFound />} />
        </Routes>
    </>
  );
}

export default AppRouter;
