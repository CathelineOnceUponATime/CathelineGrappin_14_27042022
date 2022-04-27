import { Link } from 'react-router-dom'

function Error () {
  return (
    <div className='error'>
      <h2> Oups !! 🫢🥹 Une erreur est survenue !! </h2>
      <Link to='/'> Back in Home 🏠🚪 </Link>
    </div>
  )
}

export default Error
