import './styles.css'

import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function ButtonNav({ to, children }: ButtonProps) {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
}
