import React  from "react"
import './style.css'

// function AlertButton({message,children}){
//     return(
//         <button onClick={()=> alert(message)}>{children}</button>
//     )
// }

// export default function ToolBar(){

//     let handleClick = ()=>{
//         alert("you clicked me")
//     }

//     return(
//         <>
//         <button onClick={handleClick}>
//             Click on me
//         </button>
        
//         <AlertButton message = 'Playing'>Play Movie</AlertButton>
//         <AlertButton message = 'Uploading'>Upload Image</AlertButton>

//         </>
//     )
// }

    // export default function ToolBar(){
    //     return(
    //         <App onPlay = {()=> alert('Playing')}
    //             onUpload = {()=>alert('Uploading')}
    //         />   
    //     )
    // }

    // function App({onPlay,onUpload}){
    //     return(
    //         <div>
    //             <button onClick={onPlay}>
    //                 Play Movie
    //             </button>
    //             <button onClick = {onUpload}>
    //                 Upload Movie
    //             </button>
    //         </div>
    //     )
    // }

function Button({ onClick, children}){
    return(
        <button onClick= { e => {
            e.stopPropagation()
            onClick()
        }}>
            {children}
        </button>
    )
}


export default function ToolBar(){
    return(
        <div className='toolbar' onClick = {() => 
        alert("You clicked on Toolbar")
        }>
            <Button  onClick = {()=> alert('Playing')}  >
                Play Movie
            </Button>
            <Button onClick = {()=> alert('Uploading')} >
                Upload Photo
            </Button>
        </div>
    )
}
