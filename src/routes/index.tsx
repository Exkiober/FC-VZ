import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Define all routes
const routes = [
    { path: '/', element: <LandingPage/> },
    { path: '/test-typewriter', element: <Test_TypeWriter/> },
    { path: '/test-navbar', element: <Test_Navbar/> },
    { path: '/test-accordion', element: <Test_Accordion/> },
    { path: '/test-button', element: <Test_Button/> },
    { path: '/test-calendar', element: <Test_Calendar/> },
];

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default AppRoutes;


import LandingPage from '../pages/LandingPage';
import Test_TypeWriter from '../pages/test_TypeWriter';
import Test_Navbar from '../pages/test_Navbar';
import Test_Accordion from '../pages/test_Accordion';
import Test_Button from '../pages/test_Button';
import Test_Calendar from '../pages/test_Calendar';