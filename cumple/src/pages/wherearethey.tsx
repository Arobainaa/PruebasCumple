import { useNavigate } from 'react-router-dom';
import CardHome from '../components/card/OptionsCard'
import './css/They.css'
function WhereThey() {
  const navigate = useNavigate();

  return (
    <>
        <div className='bg-they'>
            <div className=''>
                Donde estan

                <CardHome
                title="En Oficina"
                description="Selecciona esta opción si estás trabajando desde la oficina hoy."
                image="../../public/img/img1.png"
                select={() => navigate('/mylocation/oficina')}
              />
              <CardHome
                title="En Remoto"
                description="Selecciona esta opción si estás trabajando desde casa o cualquier otro lugar remoto."
                image="../../public/img/img1.png"
                select={() => navigate('/mylocation/remoto')}
              />
              <CardHome
                title="En Cliente"
                description="Selecciona esta opción si te encuentras en las instalaciones de un cliente."
                image="../../public/img/img1.png"
                select={() => navigate('/mylocation/cliente')}
              />
              <CardHome
                title="Fuera de Oficina"
                description="Selecciona esta opción si estás fuera de la oficina por cualquier motivo personal o profesional."
                image="../../public/img/img1.png"
                select={() => navigate('/mylocation/fueraoficina')}
              />
            </div>
            
        </div>
      
    </>
  )
}

export default WhereThey
