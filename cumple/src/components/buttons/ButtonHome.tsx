import './css/homebutton.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to?: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: string;
}

export default function ButtonHome({ to, children, onClick }: ButtonProps) {
  if (to) {
    return (
      <Link
        to={to}
        className="button-home"
        onClick={onClick}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="button-home"
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}