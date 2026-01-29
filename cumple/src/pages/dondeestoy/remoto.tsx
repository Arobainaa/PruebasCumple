import ButtonBack from '../../components/buttons/ButtonBack'
import '../css/Home.css'
function Remoto() {

  return (
    <>
        <div className='bg'>
          <p>En Remoto</p>
          <ButtonBack to="/mylocation" children="Volver"/>
        </div>
      
    </>
  )
}

export default Remoto
