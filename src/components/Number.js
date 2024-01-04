import React, { useState } from 'react'

export default function Number(){

    const [number,setNumber] = useState(0)
    // return(
    //     <>
    //     <h1>{number}</h1>
    //     <button onClick = {()=> {
    //         setNumber(number + 2)
    //     }}> +2</button>
    //     </>
    // )

    // return(
    //     <>
    //     <h1>{number}</h1>
    //     <button onClick = {()=> {
    //         setNumber(n => n + 1)
    //         setNumber(n=> n + 1)
    //     }}> +2</button>
    //     </>
    // )
    return(
        <>
        <h1>{number}</h1>
        <button onClick = {()=> {
            setNumber(number + 5)
            setNumber(n=> n + 1)
        }}> Increase the number</button>
        </>
    )
}