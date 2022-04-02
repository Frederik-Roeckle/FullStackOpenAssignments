import { useState } from 'react'

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

  const changeValueNumber = (event) => {
      setNewNumber(event.target.value)
  }

  const changeValue = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addnNewEntry}>
        <div>
          name: <input 
          value={newName}
          onChange={changeValue}
          />
          <br />
          number: <input 
          value={newNumber}
          onChange={changeValueNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>{persons.map(person => <ul>{person.name}, {person.number}</ul>)}</ul>
      </div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App