
function TableHeader () {
  return (
    <div className='tableHeader'>
      <div className='tableHeader-show'>
        <p> Show </p>
        <select>
          <option value='10'> 10 </option>
          <option value='25'> 25 </option>
          <option value='50'> 50 </option>
          <option value='100'> 100 </option>
        </select>
        <p> entries </p>
      </div>
      <div>
        Search :
        <input />
      </div>
    </div>
  )
}

export default TableHeader
