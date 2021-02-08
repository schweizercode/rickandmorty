import React from 'react'

function CharacterDetails({ msg, character }) {
    // 1st way
    // const character = props.character
    // const msg = props.msg

    // 2nd way
    // const {msg, character} = props


    return (

        <div className="card"
            key={character.id}>
            <h3>{character.name}</h3>
            <p>status: {character.status}</p>
            <img src={character.image} alt={character.name} key={character.id} status={character.status} width="200px" />
        </div>

    )
}

export default CharacterDetails
