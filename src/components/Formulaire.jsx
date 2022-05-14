import Champ from './Champ'
import Dropdown from './Dropdown'
import ModalForm from './ModalForm'
import { states, departments } from '../data/data'

/**
 * Function Formulaire retourne
 * un formulaire pour l'inscription d'un employé
 * @returns component
 */
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
        <Dropdown label='State' name='state' obj={states} field1='name' field2='abbreviation' />
        <Champ nom='Zip Code' type='number' />
      </fieldset>
      <Dropdown label='Department' name='department' obj={departments} field1='name' />
      <ModalForm />
    </div>
  )
}

export default Formulaire
