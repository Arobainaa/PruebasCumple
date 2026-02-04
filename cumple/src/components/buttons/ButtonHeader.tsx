import './css/headerbutton.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function ButtonHeader({ to, children }: ButtonProps) {
  return (
    <Link to={to} className="button-header">
      <span>{children}</span>
    </Link>
  );
}
