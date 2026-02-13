import ButtonHome from '../components/buttons/ButtonHome';
import SlideCard from '../components/card/slidecards/SlideCard';
import './css/WhereMe.css';

import conCliente from '../assets/img/concliente.png';
import enOficina from '../assets/img/enoficina.png';
import enRemoto from '../assets/img/enremoto.png';
import enVacaciones from '../assets/img/vacaciones.png';
import { useState } from 'react';
import SlideType1 from '../components/card/slidecards/SlideType1';
import SlideType2 from '../components/card/slidecards/SlideType2';




function WhereMe() {

  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleSelect = (message: string) => {
    setPopupMessage(message);
  };

  const closePopup = () => {
    setPopupMessage(null);
  };

  const handleRegisterName = () => {
    setPopupMessage(`Se ha actualizado su estado correctamente`);
  };

  const handleVacationName = () => {
    setPopupMessage(`Se ha registrado su ausencia correctamente`);
  };
  
  return (
    <>
      <div className='bg-me'>
        <div className='texts'>
          <p>¿Dónde se encuentra usted trabajando?</p>
          <h5>Haga click a la opción que se ajuste más a sus preferencias</h5>
        </div>
        <div className='cards-wrapper'>
          <div className="cards">
            <SlideCard
              title="En la Oficina"
              description="Selecciona esta opción si estás en la oficina presencialmente."
              overlayTitle="¿Se encuentra en la Oficina?"
              overlayDescription="Si es un sí, haga Click en el botón"
              image={enOficina}
              overlayMinitext="Si es un no, haga Click en otra parte"
            >
              <ButtonHome onClick={() => handleSelect("Se ha registrado en la Oficina")}>Seleccionar</ButtonHome>

              
            </SlideCard>

             <SlideCard
              title="En Remoto"
              description="Selecciona esta opción si estás en tu casa tele-trabajando."
              overlayTitle="¿Está usted teletrabajando?"
              overlayDescription="Si es un sí, haga Click en el botón"
              image={enRemoto}
              overlayMinitext="Si es un no, haga Click en otra parte"
            >
              <ButtonHome onClick={() => handleSelect("Se ha registrado en Remoto")}>Seleccionar</ButtonHome>

            </SlideCard>

            


            <SlideType1
              title="Con un Cliente"
              description="Selecciona esta opción si estás visitando a un cliente."
              overlayTitle="¿Qué cliente está visitando?"
              overlayDescription="Introduzca el nombre del cliente, por favor"
              image={conCliente}
              overlayMinitext="Si no está con un cliente, haga Click en otra parte"
              onRegisterName={handleRegisterName} 
            />

            <SlideType2
              title="Fuera de la Oficina"
              description="Selecciona esta opción si estás fuera de la oficina."
              overlayTitle="Especifique:"
              descriptionInputs="Especifique el período de ausencia"
              descriptionInputs2="¿Cuál es el motivo?"
              image={enVacaciones}
              onRegisterName={handleVacationName} 
            />

          </div>
        </div>

        {popupMessage && (
          <div className={`popup-overlay active`}>
            <div className="popup">
              <div className="popup-header">
                <span>Registro exitoso</span>
                <button className="popup-close" onClick={closePopup}><span>✖</span></button>
              </div>
              <div className="popup-body">
                <p>{popupMessage}</p>
                <ButtonHome style="width: 200px;" onClick={closePopup}><span>Aceptar</span></ButtonHome>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default WhereMe;
