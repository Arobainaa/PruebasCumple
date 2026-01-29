import ButtonHeader from '../buttons/ButtonNav';
import './Nav.css'

export default function NavBar() {

  return (
    <nav className="nav-base">
      
      <div className="nav-left">
        <ButtonHeader to="/home">Home</ButtonHeader>
      </div>

      <div className="nav-right">
        <ButtonHeader to="/mylocation">Dónde Estoy</ButtonHeader>
        <ButtonHeader to="/theirlocation">Dónde Están</ButtonHeader>
      </div>

    </nav>
  );
}
