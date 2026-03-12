import './css/They.css'
import users from './users.json'
import UserCarousel from '../components/carousel/UserCarousel'
import CarouselSmall from '../components/carousel/CarouselSmall'

function WhereThey() {

  const oficina = users.filter(u => u.status === "Oficina")
  const remoto = users.filter(u => u.status === "Remoto")
  const fuera = users.filter(u => u.status === "Fuera")
  const cliente = users.filter(u => u.status === "Cliente")

  return (
    <div className='bg-they'>
      <div className='grid-they'>

        <div className='grid-top'>
          <UserCarousel title="En Oficina" users={oficina} />
          <CarouselSmall title="Fuera de Oficina" users={fuera} />
        </div>

        <div className='grid-bottom'>
          <UserCarousel title="En Remoto" users={remoto} />
          <CarouselSmall title="Con Cliente" users={cliente} />
        </div>

      </div>
    </div>
  )
}

export default WhereThey