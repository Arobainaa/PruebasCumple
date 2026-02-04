import ButtonHome from '../components/buttons/ButtonHome';
import './css/WhereMe.css';

function WhereMe() {

  return (
    <>
      <div className='bg-me'>
        <div className="buttons">
          <ButtonHome to="/mylocation/cliente" children="Con Cliente"></ButtonHome>
          <ButtonHome to="/mylocation/fueraoficina" children="Fuera de Oficina"></ButtonHome>
          <ButtonHome to="/mylocation/oficina" children="En Oficina"></ButtonHome>
          <ButtonHome to="/mylocation/remoto" children="En Remoto"></ButtonHome>
        </div>
      </div>
    </>
  );
}

export default WhereMe;
