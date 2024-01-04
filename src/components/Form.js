import React, { useState } from 'react'


export default function Form(){

    const [isSent,setIsSent] = useState(false)
    const [message,setMessage] = useState('Hi!')
    if(isSent){
        return <h1>Your message is on it's way</h1>
    }

    return(
        <form onSubmit= {(e) => {
            e.preventDefault()
            setIsSent(true)
            setMessage(message)
        }}>
            <textarea name="" id="" cols="10" rows="2" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button type='submit'>Send</button>
        </form>
    )
}   