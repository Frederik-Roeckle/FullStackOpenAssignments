const PhonebookForm = (props) => {
  

  



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={props.addnNewEntry}>
              <div>
                name: <input 
                value={props.newName}
                onChange={props.changeNameEventHandler}
                />
                <br />
                number: <input 
                value={props.newNumber}
                onChange={props.changeNumberEventHandler}
                />
              </div>
              <div>
                <button type="submit">add</button>
              </div>
            </form>
        </div>
    )
}

export default PhonebookForm