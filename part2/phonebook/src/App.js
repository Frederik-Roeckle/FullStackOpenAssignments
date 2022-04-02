import { useState } from 'react'
import Person from './Person'
import PhonebookForm from './PhonebookForm'
import Phonebook from './Phonebook'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "0049136663" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addnNewEntry = (event) => {
    event.preventDefault()
    const res = persons.find(person => person.name === newName)
    if (res === undefined) {
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      setNewName("")
      setNewNumber("")
    } else {
      const warn = `${newName} is already in the phonebook`
      alert(warn)
    }   
  }

  const changeNumberEventHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const changeNameEventHandler = (event) => {
  setNewName(event.target.value)
  }

  return (
    <div>
      <PhonebookForm changeNameEventHandler={changeNameEventHandler} changeNumberEventHandler={changeNumberEventHandler} newName={newName} newNumber={newNumber} addnNewEntry={addnNewEntry}></PhonebookForm>
      <Phonebook persons={persons}></Phonebook>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App