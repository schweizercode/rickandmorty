import { useState, useEffect } from 'react'
import CharacterDetails from './CharacterDetails'

const List = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://rickandmortyapi.com/api/character/").then(response => {
            return response.json()
        }).then(data => {
            setCharacters(data.results)
        })
    }

    console.log('characters', characters)
    return (
        <div>
            {characters && characters.map((character => {
                return (
                    <CharacterDetails msg="character" character={character} />
                )
            }))}
        </div>
    )
}

export default List
