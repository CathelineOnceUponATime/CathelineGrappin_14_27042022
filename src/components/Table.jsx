/* eslint-disable no-redeclare */
/* global localStorage */
/* eslint no-undef: "error" */

import { struct } from '../data/data'
import { useState, useEffect, useMemo, lazy, Suspense } from 'react'

function Table () {
  const DataTable = lazy(() => import('react-data-table-component'))
  const [data, setData] = useState([])
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  useEffect(() => {
    recupereData()
  }, [])

  function recupereData () {
    const employees = JSON.parse(localStorage.getItem('employees'))
    setData(employees)
  }

  const filteredItems = data?.filter(
    item => ((item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.department && item.department.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.dateOfBirth && item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.startDate && item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.state && item.state.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.city && item.city.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.street && item.street.toLowerCase().includes(filterText.toLowerCase())) ||
    (item.zipCode && item.zipCode.toLowerCase().includes(filterText.toLowerCase())))
  )

  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <input type='text' placeholder='Filter' aria-label='Search Input' value={filterText} onChange={onFilter} autoFocus />
      <button id='btn-filter' type='button' onClick={onClear}>X</button>
    </>
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }
    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    )
  }, [filterText, resetPaginationToggle])

  const renderLoader = () => (
    <div className='loading'>
      <div id='prim' />
      <div id='sec' />
      <div id='cinq' />
      <div id='quat' />
    </div>
  )
  return (
    <div className='table'>
      <Suspense fallback={renderLoader()}>
        <DataTable
          columns={struct}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
          noDataComponent='No matching records found'
          responsive
        />
      </Suspense>
    </div>
  )
}

export default Table
