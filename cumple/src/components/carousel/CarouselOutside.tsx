import ButtonHome from '../buttons/ButtonHome'
import UserCard from '../card/usercards/UserCard'
import './Carouseloutside.css'
import { useRef, useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  image: string
  status: string
}

interface Props {
  title: string
  users: User[]
}

function CarouselOutside({ title, users }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Cerrar modal al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Glow que sigue al cursor
  useEffect(() => {
    const card = carouselRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    }

    card.addEventListener('mousemove', handleMouseMove)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="outside-carousel-container" ref={carouselRef}>
      <h3>{title}</h3>

      <div className="outside-carousel-track">
        <ButtonHome onClick={() => setModalOpen(true)}>
          Ver todos
        </ButtonHome>
      </div>

      {modalOpen && (
        <div className="outside-modal">
          <div className="outside-modal-content">
            <h3>{title}</h3>

            <div className="outside-modal-grid">
              {users.map(user => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  image={user.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarouselOutside