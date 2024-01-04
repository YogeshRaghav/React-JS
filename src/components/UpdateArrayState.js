import React, {useState} from 'react'

let nextId = 0;

function UpdateArrayState(){

    const [name,setName] = useState('')
    const [artist,setArtist] = useState([])

    return(
        <>
            <h1>Inspiring Sculpture : </h1>

            <input type="text"  value = {name} onChange = {e => (setName(e.target.value))}/>

            <button onClick = {() => {
                setArtist([
                    ...artist,
                    {id : nextId++, name : name}
                ])
            }}>Add</button>

           <ul>
               {artist.map(artist => {
                 return  <li key = {artist.id}>{artist.name}</li>
               })}
           </ul>
        </>
    )
}

export default UpdateArrayState;