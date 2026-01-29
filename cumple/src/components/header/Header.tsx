import ButtonHeader from '../buttons/ButtonHeader.tsx';
import './Headerstyle.css'

export default function Header() {

  return (
    <header className="header-base">

      <ButtonHeader to="/mylocation">Dónde Estoy</ButtonHeader>
      <ButtonHeader to="/theirlocation">Dónde Están</ButtonHeader>

    </header>   
  );
}
