import { useState, type ReactNode } from 'react';
import './slide.css';
import ButtonHome from '../../buttons/ButtonHome';

interface SlideCardProps {
  title: string;
  description?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  overlayMinitext?: string;
  image?: string;
  children?: ReactNode;
  onRegisterName?: (name: string) => void;
}

export default function SlideType1({
  title,
  description,
  overlayTitle,
  overlayMinitext,
  image,
  onRegisterName,
}: SlideCardProps) {

  const [clientName, setClientName] = useState('');

  const handleSubmit = () => {
    if (clientName.trim() !== '') {
      if (onRegisterName) onRegisterName(clientName);
      setClientName('');
    } else {
      alert('Por favor, ingrese un nombre válido.');
    }
  };
  
  return (
    <div className="slide-card" tabIndex={0}>
      <div className="slide-card-content">
        <div className='blur'></div>

        <div  className='wave-container'>
          <div className="wave-track">

            <svg
              className="wave"
              viewBox="0 0 1200 18"
              preserveAspectRatio="none"
            >
            
            <path
              d="M0,5 C300,-17 900,0 1200,0"
              fill="none"
              stroke="#C10016"
              strokeWidth="27"
            />

            <path
              d="M0,15 C300,-8 900,0 1200,4"
              fill="none"
              stroke="#910101"
              strokeWidth="9.2"
            />

            <path
              d="M0,20 C300,-3 1100,10 1200,12"
              fill="none"
              stroke="#5b0101"
              strokeWidth="6.2"
            />
            </svg>

            <svg
              className="wave-overlay"
              viewBox="0 0 1200 18"
              preserveAspectRatio="none"
            >
              <path
                d="M1200,-15 C900,0 300,0 0,-10"
                fill="none"
                stroke="#C10016"
                strokeWidth="27"
              />

              <path
                d="M1200,-1 C900,15 300,10 0,5"
                fill="none"
                stroke="#910101"
                strokeWidth="9.2"
              />

              <path
                d="M1200,5 C900,15 400,18 0,12"
                fill="none"
                stroke="#5b0101"
                strokeWidth="6.2"
              />
            </svg>
          </div>

        </div>
        

        


        <div className='card-home-desc-content'>
          <div className="card-home-img">
            {image ? (
              <img src={image} alt={title} className="card-home-image" />
            ) : (
              <div className="img-placeholder" />
            )}
          </div>
          
          <h5 className="card-home-title">{title}</h5>
          {description && (
            <p className="card-home-description">{description}</p>
          )}
        </div>
        
         <div  className='wave-container'>
          <div className="wave-track">

           <svg
              className="small-wave"
              viewBox="0 0 1200 30"
              preserveAspectRatio="none"
            >
            <path
              d="M0,15 C300,20 900,20 1200,10"
              fill="none"
              stroke="#c00404"
              strokeWidth="1"
            />
            <path
              d="M0,10 C400,23 800,30 1200,15"
              fill="none"
              stroke="#930202"
              strokeWidth="1.5"
            />
            </svg>

            

            <svg
              className="small-wave-overlay"
              viewBox="0 0 1200 30"
              preserveAspectRatio="none"
            >
            <path
              d="M1200,15 C900,30 300,2 0,10"
              fill="none"
              stroke="#c00404"
              strokeWidth="1"
            />
            <path
              d="M1200,10 C800,23 400,2 0,15"
              fill="none"
              stroke="#930202"
              strokeWidth="1.5"
            />
          </svg>
          </div>

        </div>
        
        
      </div>





      <div className="slide-card-overlay">
          
          <div className='slide-card-overlay-content-SECOND'>
            <span className="slide-card-title-SECOND">
              {overlayTitle}
            </span>

            <div className="client-name-input">
              <input 
                type="text" 
                placeholder="Ingrese el nombre del cliente..."
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <ButtonHome onClick={handleSubmit}>Aceptar</ButtonHome>
            </div>

            <p className="slide-card-overlay-minitext-SECOND">
              {overlayMinitext}
            </p>
          </div>
          
      </div>

    </div>
  );
}
