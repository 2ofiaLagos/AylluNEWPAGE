import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cursos from './Cursos';
import Reseñas from './Reseñas'

function App() {
  

  return (
    <>
       
  
  <Cursos/>
  <h2 className="text-3xl">Opiniones</h2>
  <Reseñas usuario="Alessandra-op09" fecha="hace 3 días" comentario="Disfrute mucho mi experiencia con Ayllu" valoracion="5"/>
  <Reseñas usuario="Harryssloves" fecha="hace 8 días" comentario="Lindo que todo fuera personalizado" valoracion="4"/>
  <Reseñas usuario="Imryourk" fecha="hace 1 mes" comentario="Mis compañeros eran muy supportive y amigables tkm" valoracion="5"/>
  <Reseñas usuario="Hellowroddd" fecha="hace 4 meses" comentario="Amé la forma en que explicaban todo, y encontré un grupo de personas con mis mismas metas" valoracion="4"/>
  <Reseñas usuario="Corineeeee" fecha="hace 8 meses" comentario="Logré aprender Shipibo y ahora lo hablo con fluidez" valoracion="4"/>
    </>
  )
}

export default App



