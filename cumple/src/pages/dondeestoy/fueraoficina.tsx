import ButtonBack from '../../components/buttons/ButtonBack'
import '../css/Home.css'
function FueraOficina() {

  return (
    <>
        <div className='bg'>
          <p>Fuera de Oficina</p>
          <ButtonBack to="/mylocation" children="Volver"/>
          
        </div>
      
    </>
  )
}

export default FueraOficina
