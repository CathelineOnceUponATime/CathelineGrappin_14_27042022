import Champ from './Champ'

function Formulaire () {
  return (
    <form>
      <Champ nom='First Name' type='text' />
      <Champ nom='Last Name' type='text' />
      <Champ nom='Date of Birth' type='date' />
      <Champ nom='Start Date' type='date' />
      <fieldset>
        <legend> Address </legend>
        <Champ nom='Street' type='text' />
        <Champ nom='City' type='text' />
        {/* state : liste déroulante */}
        <Champ nom='Zip Code' type='number' />
      </fieldset>
      <button> Save </button>
    </form>
  )
}

export default Formulaire
