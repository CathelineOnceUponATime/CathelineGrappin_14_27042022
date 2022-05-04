import Cellule from './Cellule'
import { struct } from '../data/data'

function Ligne ({ isStruct, donnee, classe }) {
  console.log(donnee)
  return (
    <tr className={classe}>
      {isStruct
        ? (
            struct.map(str => (
              <Cellule key={str.key} balise classe='sorting' text={str.name} />
            ))
          )
        : (
            struct.map(str => (
              <Cellule key={donnee.id} text={donnee[str.key]} />
            ))
          )}
    </tr>
  )
}

export default Ligne
