import type { ReactNode } from 'react';
import './flipcard.css';

interface FlipCardProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export default function FlipCard({
  title,
  description,
  image,
  children,
}: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <div className="card-home-img">
            {image ? (
              <img src={image} alt={title} className="card-home-image" />
            ) : (
              <div className="img-placeholder" />
            )}
          </div>

          <div className="card-home-content">
            <h5 className="card-home-title">{title}</h5>
            {description && (
              <p className="card-home-description">{description}</p>
            )}
          </div>

          <div className="card-home-actions">
            {children}
          </div>
        </div>

        <div className="flip-card-back">
          <span>funciona ole</span>
        </div>

      </div>
    </div>
  );
}
