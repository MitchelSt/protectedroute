import React from 'react'


export default function SignIn({ handleSignIn }) {
    return (
        <div>
            <button
            type='submit'
            onClick={handleSignIn}
            >Sign In</button>
        </div>
    )
}