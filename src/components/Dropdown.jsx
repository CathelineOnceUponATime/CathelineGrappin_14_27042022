import { states, departments } from '../data/data'

function Dropdown ({ label, state }) {
  return (
    <div className='dropdown'>
      <label> {label} </label>
      <select>
        {state
          ? states.map((state) =>
            <option value={state.abbreviation} key={state.name}>{state.name}</option>
            )
          : departments.map((department) =>
            <option value={department.name} key={department.name}>{department.name}</option>
          )}
      </select>
    </div>
  )
}

export default Dropdown
