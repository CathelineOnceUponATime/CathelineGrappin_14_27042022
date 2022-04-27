import { Link } from 'react-router-dom'
import Formulaire from '../components/Formulaire'

function Accueil () {
  return (
    <div className='accueil'>
      <Link to='/Employees'> View Current Employees </Link>
      <h2> Create Employee </h2>
      <Formulaire />
    </div>
  )
}

export default Accueil
