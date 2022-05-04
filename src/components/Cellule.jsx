import { Link } from 'react-router-dom'

function Cellule ({ balise, classe, text }) {
  function tri (e) {
    e.preventDefault()
    const eltParent = e.target.parentElement
    switch (eltParent.classList[0]) {
      case 'sorting' : {
        eltParent.classList.remove('sorting')
        eltParent.classList.add('sorting-asc')
        break
      }
      case 'sorting-asc' : {
        eltParent.classList.remove('sorting-asc')
        eltParent.classList.add('sorting-desc')
        break
      }
      case 'sorting-desc' : {
        eltParent.classList.remove('sorting-desc')
        eltParent.classList.add('sorting')
        break
      }
      default :
    }
  }
  return (
    balise
      ? (<th className={classe}> <Link to='' onClick={tri}> {text} </Link> </th>)
      : (<td className={classe}> {text} </td>)
  )
}

export default Cellule
