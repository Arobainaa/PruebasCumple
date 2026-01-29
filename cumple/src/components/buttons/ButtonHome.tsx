import './homebutton.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function ButtonHeader({ to, children }: ButtonProps) {
  return (
    <Link to={to} className="button2">
      <span>{children}</span>
    </Link>
  );
}
