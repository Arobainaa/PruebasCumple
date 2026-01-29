import './goback.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function ButtonBack({ to, children }: ButtonProps) {
  return (
    <Link to={to} className="button3">
      <span>{children}</span>
    </Link>
  );
}
