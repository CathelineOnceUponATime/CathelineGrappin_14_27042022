import Ligne from './Ligne'
import { data } from '../data/data'

function TableBody () {
  return (
    <div className='tableBody'>
      <table>
        <thead>
          <Ligne isStruct />
        </thead>
        <tbody>
          {
            data.map(entrie => (
              <Ligne key={entrie.id} donnee={entrie} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableBody
