import Person from "./Person"

const Phonebook = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                <ul>{persons.map(person => <Person person={person}></Person>)}</ul>
            </div>
        </div>
    )

}

export default Phonebook