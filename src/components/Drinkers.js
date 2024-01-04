import React from 'react'
import './style.css'

function Recipe({drinker}){
    return(
        <ol >
            <li>Boil {drinker} cups of water</li>
            <li>Add {drinker} spoons of tea and {0.5 * drinker} spoons of spice </li>
            <li>Add {0.5 * drinker} of milk to boil and sugar to taste</li>
        </ol>
    )
}

function drinkers(){
    return(
    
    <section className = 'Chai'>
        <h1><b>Spiced Chai Recipe</b></h1>
        
        <h2>For two</h2>
        <Recipe drinker = {2}/>
        <h2>For a gathering</h2>
        <Recipe drinker = {4}/>
    </section>
    )
}

export default drinkers;