import ButtonBack from '../../components/buttons/ButtonBack'
import '../css/Home.css'
function Cliente() {

  return (
    <>
        <div className='bg'>
          <p>En Cliente</p>
          <ButtonBack to="/mylocation" children="Volver"/>
        </div>
      
    </>
  )
}

export default Cliente
