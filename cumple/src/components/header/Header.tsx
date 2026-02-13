import ButtonHeader from '../buttons/ButtonHeader.tsx';
import './Headerstyle.css';
import Logo from '../../assets/img/logoheader.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const [visible, setVisible] = useState(!isHome);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isHome]);

  return (
    <header className="header-base">
      <Link to="/home">
        <img src={Logo} className="header-logo" alt="Logo" />
      </Link>
      {visible && (
        <div className={`header-buttons ${animate ? 'show' : 'hide'}`}>
          <ButtonHeader to="/home/mylocation">Dónde Estoy</ButtonHeader>
          <ButtonHeader to="/home/theirlocation">Dónde Están</ButtonHeader>
        </div>
      )}

      <svg className="wave-border" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,15 C300,0 900,30 1200,15" fill="none" stroke="#c00404" strokeWidth="1.7"/>

        <path d="M0,18 C200,25 800,0 1200,18" fill="none" stroke="#ff0000" strokeWidth="0.8"/>
      </svg>

      
    </header>
  );
}
