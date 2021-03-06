/* eslint-disable no-redeclare */
/* global localStorage */
/* eslint no-undef: "error" */

import Modal from 'react-modal'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { data as emp } from '../data/data'

/**
 * Function ModalForm permet d'ouvrir une popup
 * afin d'informer l'utilisation de la sauvegarde
 * des données d'un nouvel employé
 * @returns component
 */
function ModalForm () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  /**
   * function saveEmployee permettant de
   * sauvegarder dans le localStorage les données d'un employé
   */
  function saveEmployee () {
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const dateOfBirth = document.getElementById('date-of-birth')
    const startDate = document.getElementById('start-date')
    const department = document.getElementById('department')
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zipCode = document.getElementById('zip-code')

    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value
    }
    emp.push(employee)
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  function openModal () {
    saveEmployee()
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
    navigate('/Employees')
  }

  return (
    <div>
      <button onClick={openModal} id='button-save'>Save</button>
      <Modal
        className='modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById('root') || undefined}
      >
        <h3> Employee Created ! </h3>
        <button onClick={closeModal} className='closeModal' />
      </Modal>
    </div>
  )
}

export default ModalForm
