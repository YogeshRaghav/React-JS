import React from 'react'
import './style.css'

function Cup({guest}){
    return <h2 className='cup'>Tea cups for {guest}</h2>
}

function PureComp(){
    let cups = []
    for(let i=0; i<=5; i++){
        cups.push(<Cup guest = {i}/>)
    }
    
    return cups
}

export default PureComp;


// function Ab(friend){
//     return(
//         <h2>Vodka shot for {friend}</h2>
//     )
// }

// export default function CA(){
//     let glass = []
//     for(i=0;i<=10;i++){
//         glass.push(<AB friend = {i}/>)
//     }
//     return glass
// }