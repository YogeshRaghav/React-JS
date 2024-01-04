import React,{useState} from 'react'
import SculptureLists from './SculptureLists'
import './style.css'


export default function Gallery(){
    const [index,setIndex] = useState(0)
    const [showmore,setShowmore] = useState(false)

    function handleClick (){
        setIndex(index + 1)
    }

    function handleMoreClick(){
        setShowmore(!showmore)
    }

    let sculpture = SculptureLists[index]

    return(
        <>
        <div className = 'gallery'>
            <button onClick={handleClick} className='btn'>Next</button>
            
            <h2><i>{sculpture.name} </i> 
            by {sculpture.artist}
            </h2>

            <h3>{index + 1} of {SculptureLists.length}</h3>
            
            <button onClick={handleMoreClick}>{showmore ? 'Hide' : 'Show'} details</button>
            {showmore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt}/>
        </div>
        
        </>
    )
}

