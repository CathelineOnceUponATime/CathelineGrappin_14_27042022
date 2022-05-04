import { Link } from 'react-router-dom'

function TableFooter ({ nbEmpl, emplCurrent }) {
  return (
    <div className='tableFooter'>
      <div className='tableFooter-show'>
        <p> Showing {emplCurrent} to {nbEmpl} of {nbEmpl} entries </p>
      </div>
      <div>
        <Link to='/'> Previous </Link>
        <button> 1 </button>
        <Link to='/'> Next </Link>
      </div>
    </div>
  )
}

export default TableFooter
