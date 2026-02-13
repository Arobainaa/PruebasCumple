import type { ReactNode } from 'react';
import './style.css';

interface CardHomeProps {
  title: string;
  description?: string;
  image?: string;
  select?: () => void;
  children?: ReactNode;
}

export default function CardHome({
  title,
  description,
  image,
  select,
  children,
}: CardHomeProps) {
  return (
    <div className="card-home">
      <div className="card-home-img">
        {image ? (
          <img src={image} alt={title} className="card-home-image" />
        ) : (
          <div className="img-placeholder"></div>
        )}
      </div>

      <div className="card-home-content">
        <h5 className="card-home-title">{title}</h5>
        <p className="card-home-description">{description}</p>
      </div>

      <div className="card-home-actions">
        {children ? (
          children
        ) : (
          <button onClick={select} className="card-btn">
            Seleccionar
          </button>
        )}
      </div>
    </div>
  );
}
