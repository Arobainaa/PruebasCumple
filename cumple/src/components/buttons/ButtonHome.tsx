import './css/homebutton.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function ButtonHome({ to, children }: ButtonProps) {
  return (
    <Link to={to} className="button-home">
      <span>{children}</span>
    </Link>
  );
}
