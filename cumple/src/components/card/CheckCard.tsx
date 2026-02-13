import { useState, type JSX } from 'react';
import './officeremoteselector.css';

interface CardProps {
  title: string;
  image: string;
  description?: string;
  button: JSX.Element;
}

interface OfficeRemoteSelectorProps {
  left: CardProps;
  right: CardProps;
}

export default function OfficeRemoteSelector({ left, right }: OfficeRemoteSelectorProps) {
  const [active, setActive] = useState<'left' | 'right'>('left');

  return (
    <div className="stacked-selector">
      <div className="cards-wrapper">
        <div
          className={`stacked-card left ${active === 'left' ? 'active' : ''}`}
          onClick={() => setActive('left')}
        >
          <div className="card-home-img">
            <img src={left.image} alt={left.title} className="card-home-image" />
          </div>
          <h3 className="card-home-title">{left.title}</h3>
          {left.description && <p className="card-home-description">{left.description}</p>}
          {active === 'left' ? left.button : <span className="disabled-button">{left.button}</span>}
        </div>

        <div
          className={`stacked-card right ${active === 'right' ? 'active' : ''}`}
          onClick={() => setActive('right')}
        >
          <div className="card-home-img">
            <img src={right.image} alt={right.title} className="card-home-image" />
          </div>
          <h3 className="card-home-title">{right.title}</h3>
          {right.description && <p className="card-home-description">{right.description}</p>}
          {active === 'right' ? right.button : <span className="disabled-button">{right.button}</span>}
        </div>
      </div>

      <div className="selector-buttons">
        <div
          className={`selector-dot ${active === 'left' ? 'active' : ''}`}
          onClick={() => setActive('left')}
        />
        <div
          className={`selector-dot ${active === 'right' ? 'active' : ''}`}
          onClick={() => setActive('right')}
        />
      </div>
    </div>
  );
}
