import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

function Table () {
  return (
    <div className='table'>
      <TableHeader />
      <TableBody />
      <TableFooter nbEmpl={3} emplCurrent={1} />
    </div>
  )
}

export default Table
