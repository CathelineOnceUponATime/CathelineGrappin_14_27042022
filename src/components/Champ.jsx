function Champ ({ nom, type }) {
  let nomFormat = nom.replace(' ', '-')
  nomFormat = nomFormat.toLowerCase()
  return (
    <div className='champ'>
      <label htmlFor={nomFormat}> {nom} </label>
      <input id={nomFormat} type={type} />
    </div>
  )
}

export default Champ
