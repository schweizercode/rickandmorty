import React from 'react'

function CharacterDetails({ msg, character }) {
    // 1st way
    // const character = props.character
    // const msg = props.msg

    // 2nd way
    // const {msg, character} = props


    return (
        <div key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} width="100px" />
        </div>
    )
}

export default CharacterDetails