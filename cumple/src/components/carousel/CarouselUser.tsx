import { useRef, useState, useEffect } from 'react'
import UserCard from '../card/usercards/UserCard'
import './Carousel.css'

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

function UserCarousel({ title, users }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const updateScrollButtons = () => {
    if (!trackRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current

    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    track.addEventListener('scroll', updateScrollButtons)
    updateScrollButtons()

    return () => track.removeEventListener('scroll', updateScrollButtons)
  }, [])

  const scrollLeft = () => {
    if (!trackRef.current) return

    const firstCard = trackRef.current.children[0] as HTMLElement
    const gap = 16
    const cardWidth = firstCard.offsetWidth + gap

    trackRef.current.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    if (!trackRef.current) return

    const firstCard = trackRef.current.children[0] as HTMLElement
    const gap = 16
    const cardWidth = firstCard.offsetWidth + gap

    trackRef.current.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    })
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return

    isDragging.current = true
    startX.current = e.pageX
    startScroll.current = trackRef.current.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return

    const dx = e.pageX - startX.current
    trackRef.current.scrollLeft = startScroll.current - dx
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return (
    <div className="carousel-container">
      <h3>{title}</h3>

      <button
        className="carousel-btn left"
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <span>‹</span>
      </button>

      <div
        className="carousel-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            className="carousel-card"
          />
        ))}
      </div>

      <button
        className="carousel-btn right"
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <span>›</span>
      </button>
    </div>
  )
}

export default UserCarousel