import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]) 
  const [newValues, setnewValues] = useState({
    name: '',
    number: ''});

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newValues['name'],
      number: newValues['number']
    }
    
    if(persons.find(person => JSON.stringify(person.name) === JSON.stringify(newValues['name']))) {
      alert(`${newValues['name']} is already added to phonebook`)
    }else {  
      setPersons(persons.concat(personObject))
      setnewValues({name : '', number : ''}) 
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setnewValues({...newValues, name : event.target.value})
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setnewValues({...newValues, number : event.target.value})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newValues['name']} onChange={handlePersonChange}/>
          number: <input value={newValues['number']} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>
        {persons.map(person =>
          <h5 key={person.name}> {person.name} {person.number}</h5>
        )}
      </div>
    </div>
  )
}

export default App