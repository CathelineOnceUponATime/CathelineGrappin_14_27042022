import { Link } from 'react-router-dom'
import Table from '../components/Table'

function Employees () {
  return (
    <div className='employees'>
      <h2> Current Employees </h2>
      <Table />
      <Link to='/'> Home </Link>
    </div>
  )
}

export default Employees
