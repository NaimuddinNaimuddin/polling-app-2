import React from 'react'

function Error({ heading }) {
    return (
        <p style={headerClass}>{heading}</p>
    )
}
const headerClass = { color: 'red', paddingLeft : '0%' }
export default Error