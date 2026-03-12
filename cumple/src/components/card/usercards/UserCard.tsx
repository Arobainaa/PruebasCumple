import './Usercardstyle.css'

interface UserCardProps {
  name: string
  email: string
  image: string
  className?: string // ✅ Permitimos pasar className
}

function UserCard({ name, email, image, className = '' }: UserCardProps) {
  return (
    <div className={`user-card ${className}`} tabIndex={0}>
      <img src={image} alt={name} />

      <div className="card-overlay">
        <div className="card-content">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
        <svg
          className="wave-border-bottom"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C500,0 900,20 1200,13"
            fill="none"
            stroke="#c00404"
            strokeWidth="0.8"
          />
          <path
            d="M0,18 C200,25 800,0 1200,18"
            fill="none"
            stroke="#890000"
            strokeWidth="1.3"
          />
        </svg>
      </div>
    </div>
  )
}

export default UserCard