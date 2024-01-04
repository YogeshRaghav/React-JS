import React from 'react';

// const people = [
//     'Rahul : Chemist',
//     'Sohan : Pilot',
//     'Rohan : Doctor',
//     'Sumit : Trainer',
//     'Ankit : Doctor',
//     'Sant : Pilot',
// ]

// const people = [{
//     id : 0,
//     name : 'Rahul',
//     Profession : 'Chemist'
// }, {
//     id : 1,
//     name : 'Rohan',
//     Profession : 'HR'
// }, {
//     id : 2,
//     name : 'Sumit',
//     Profession : 'Chemist'
// }, {
//     id : 3,
//     name : 'Sohan',
//     Profession : 'HR'
// }, {
//     id : 4,
//     name : 'Sachin',
//     Profession : 'HR'
// }
// ]

// function ListItems(){

//     // const List = people.map(person => <li>{person}</li>)

//     const HR = people.filter(person => 
//         person.Profession  === 'HR'
//         )

//     const List = HR.map(person => 
//         <p>
//             <b>{person.name} : </b>
//            {" " + person.Profession + ' ' }
        
//         </p>
//         )

//     return(
//         <>
//         <h1>HR List :- </h1>
//         <ol>{List}</ol>
//         </>
//     )
// }

const cars = [{
    id : 0,
    name : 'Swift',
    brand : 'Suzuki'
}, {
    id : 1,
    name:'i20',
    brand : 'Hyundai'
}, {
    id : 2,
    name : 'GV',
    brand : 'Suzuki'
} ,{
    id : 3,
    name : 'Creta',
    brand : 'Hyundai'
} ,{
    id : 4,
    name : 'Invicto',
    brand : 'Suzuki'
}]

function ListItems(){
    
    const brand = cars.filter(carName => 
        carName.brand === 'Suzuki'
        )

    const List = brand.map(carName => <li>{carName.name}</li>)
    
    return(
        <>
        <ul>{List}</ul>
        </>
    )
}
export default ListItems;