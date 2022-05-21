/*
const obj = {
  {
    name : "Alabama",
    abreviation : "alb"
  }
}
*/

/**
 * Function objectToTab transforme
 * un objet en tableau à une ou deux dimensions
 * @returns array
 */
export function objectToTab (obj, field1, field2) {
  const arr = []
  if (field2 === (null, undefined)) {
    for (const row in obj) {
      arr.push(obj[row][field1])
    }
  } else {
    for (const row in obj) {
      arr.push([obj[row][field1], obj[row][field2]])
    }
  }
  return arr
}

/**
 * Function triStartDate tri deux dates ensemble
 */
export function triStartDate (rowA, rowB) {
  const a = new Date(rowA.startDate)
  const b = new Date(rowB.startDate)

  if (a > b) {
    return 1
  }
  if (b > a) {
    return -1
  }
  return 0
}

/**
 * Function triBirthDate tri deux dates ensemble
 */
export function triBirthDate (rowA, rowB) {
  const a = new Date(rowA.dateOfBirth)
  const b = new Date(rowB.dateOfBirth)

  if (a > b) {
    return 1
  }
  if (b > a) {
    return -1
  }
  return 0
}
