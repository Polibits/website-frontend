import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import InitialPage from './pages/initialPage';
import Competitions from './pages/competitions';
import Practice from './pages/practice';
import Historic from './pages/historic';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/competicoes" element={<Competitions/>}/>
        <Route path="/pratique" element={<Practice/>}/>
        <Route path="/historico" element={<Historic/>}/>
        <Route path="/sobrenos" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
