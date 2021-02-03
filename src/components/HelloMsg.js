import React from 'react'

function HelloMsg(props) {
    console.log('props :>> ', props);
    const message = props.msg
    return (
        <div>
            <h1>Hello here is your message:</h1>
            <h2>{message}</h2>

        </div>
    )
}
export default HelloMsg