import Champ from './Champ'
import Dropdown from './Dropdown'
import ModalForm from './ModalForm'

function Formulaire () {
  return (
    <div className='form'>
      <Champ nom='First Name' type='text' />
      <Champ nom='Last Name' type='text' />
      <Champ nom='Date of Birth' type='date' />
      <Champ nom='Start Date' type='date' />
      <fieldset>
        <legend> Address </legend>
        <Champ nom='Street' type='text' />
        <Champ nom='City' type='text' />
        <Dropdown label='State' state />
        <Champ nom='Zip Code' type='number' />
      </fieldset>
      <Dropdown label='Department' />
      <ModalForm />
    </div>
  )
}

export default Formulaire
