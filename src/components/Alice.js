import React, { useState } from 'react'

export default function Alice(){

    const [message,setMessage] = useState('Hlo')
    const [to,setTo] = useState('Alice')

    function handleClick(e){
        e.preventDefault()
        setTimeout(()=>{
            alert(`You send ${message} to ${to}`)
        },2000)
    }

    return(
        <form onSubmit = {handleClick}>
            <label> To : {''} 
                <select value = {to} onChange = {e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>

            <textarea 
            value={message}
            onChange = {(e => setMessage(e.target.value))}
            ></textarea>
            <button type='submit'>Send</button>
        </form>
    )
       
  
}