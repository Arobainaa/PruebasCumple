import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Home from './pages/home.tsx';
import Header from './components/header/Header';
import WhereMe from './pages/whereami.tsx';
import WhereThey from './pages/wherearethey.tsx';
import NavBar from './components/navbar/NavBar.tsx';
import Oficina from './pages/dondeestoy/oficina.tsx';
import Remoto from './pages/dondeestoy/remoto.tsx';
import Cliente from './pages/dondeestoy/cliente.tsx';
import FueraOficina from './pages/dondeestoy/fueraoficina.tsx';

export default function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);


  return (
    <div className="app-container">
      <div className="app-background" />

      <NavBar open={navOpen} setOpen={setNavOpen} />

      <div className="main-content">
        <Header />

        <div className="pages-container">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mylocation" element={<WhereMe />} />
            <Route path="/theirlocation" element={<WhereThey />} />
            <Route path="/mylocation/oficina" element={<Oficina />} />
            <Route path="/mylocation/remoto" element={<Remoto />} />
            <Route path="/mylocation/cliente" element={<Cliente />} />
            <Route path="/mylocation/fueraoficina" element={<FueraOficina />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
