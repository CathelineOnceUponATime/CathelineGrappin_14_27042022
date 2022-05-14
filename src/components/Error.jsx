import { Link } from 'react-router-dom'

/**
 * Function Error affiche un texte en cas d'erreur
 * ainsi qu'un lien pour revenir à la page d'accueil
 * @returns component
 */
function Error () {
  return (
    <div className='error'>
      <h2> Oups !! 🫢🥹 Une erreur est survenue !! </h2>
      <Link to='/'> Back in Home 🏠🚪 </Link>
    </div>
  )
}

export default Error
