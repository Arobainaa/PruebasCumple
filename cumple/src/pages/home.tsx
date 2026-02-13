import ButtonHome from '../components/buttons/ButtonHome'
import './css/Home.css'
function Home() {

  return (
    <>
        <div className='bg'>
          <div className='title'>
            <p>Seleccione una de las dos opciones</p>

            <svg
              className="wave-border"
              viewBox="0 0 500 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 C300,0 300,10 500,10"
                fill="none"
                stroke="#c00404"
                strokeWidth="0"
              />
            </svg>
            
          </div>
          <div className='contenido1'>
            <div className='boton1'>
              <ButtonHome to="/home/mylocation">
                ¿Dónde estoy?
              </ButtonHome>
              <div className='card1'>
                <div className='relative'>
                  <span>Con un click...</span>
                </div>
                
                <svg
                  className="wave-border"
                  viewBox="0 0 1200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 C400,0 900,20 1200,13"
                    fill="none"
                    stroke="#c00404"
                    strokeWidth="1"
                  />
                  <path d="M0,18 C200,25 800,0 1200,18" fill="none" stroke="#890000" strokeWidth="0.8"/>
                </svg>
                Accedes al menú para indicar tu ubicación actual: 
                En la Oficina, en Remoto, con un Cliente o Fuera de la Oficina.
              </div>
            </div>
            <div className='boton2'>
              <ButtonHome to="/home/theirlocation">
                ¿Dónde están?
              </ButtonHome>
              <div className='card2'>
                <span>Con un click...</span>
                Puedes consultar la ubicación de tus compañeros que hayan registrado su ubicación hoy.
                <svg
                  className="wave-border"
                  viewBox="0 0 1200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 C500,0 900,20 1200,13"
                    fill="none"
                    stroke="#c00404"
                    strokeWidth="1"
                  />
                  <path d="M0,18 C200,25 800,0 1200,18" fill="none" stroke="#890000" strokeWidth="0.8"/>
                </svg>
              </div>
            </div>
            
            
          </div>
        </div>
      
    </>
  )
}

export default Home
