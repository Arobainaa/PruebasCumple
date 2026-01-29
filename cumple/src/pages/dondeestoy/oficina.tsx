import ButtonBack from '../../components/buttons/ButtonBack'
import '../css/Home.css'
function Oficina() {

  return (
    <>
        <div className='bg'>
          <p>En Oficina</p>
          <ButtonBack to="/mylocation" children="Volver"/>
        </div>
      
    </>
  )
}

export default Oficina
