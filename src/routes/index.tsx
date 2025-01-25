import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Define all routes
const routes = [
    { path: '/', element: <LandingPage/> },
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