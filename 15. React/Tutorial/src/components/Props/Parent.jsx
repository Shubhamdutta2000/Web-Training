import React from 'react'
import Profile from './Profile'

// Prop Drilling
// --> Pass data from parent element to child element

// parent element
function Parent() {
    const name = "SD";
    const age = 18

    return (
        <div>
            <h1>Hello This is Parent element</h1>
            <Profile name={name} age={age} />
        </div>
    )
}

export default Parent
