import { Link } from 'react-router-dom';
import './Nav.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type NavBarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function NavBar({ open, setOpen }: NavBarProps) {
  return (
    <>
      <input
        type="checkbox"
        id="side-menu-switch"
        checked={open}
        onChange={() => setOpen(!open)}
        hidden
      />

      <div className="side-menu">
        <nav>
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/mylocation" onClick={() => setOpen(false)}>Dónde Estoy</Link>
          <Link to="/theirlocation" onClick={() => setOpen(false)}>Dónde Están</Link>
        </nav>

        <div className="hover-sidebar">
          <label htmlFor="side-menu-switch">
            {open ? <FaAngleLeft /> : <FaAngleRight />}
          </label>
        </div>
      </div>
    </>
  );
}
