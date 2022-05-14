import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/**
 * function Champ pour afficher un champ
 * @param {String} nom : correspond au label
 * @param {String} type : correspond au type du champ input,
 * si celui-ci est une date dans ce cas ce n'est pas un input HTML5
 * mais plutôt un DatePicker
 * @returns component
 */
function Champ ({ nom, type }) {
  let nomFormat = nom.replaceAll(' ', '-')
  nomFormat = nomFormat.toLowerCase()
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className='champ'>
      <label htmlFor={nomFormat}> {nom} </label>
      {type === 'date'
        ? <DatePicker id={nomFormat} selected={startDate} onChange={(date = Date) => setStartDate(date)} />
        : <input id={nomFormat} type={type} min={0} />}
    </div>
  )
}

export default Champ
