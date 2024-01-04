import React, {useState} from 'react';

function UpdateObject(){

    const [person,setPerson] = useState({
        firstname : "Suman",
        lastname : 'Sinha',
        details : {
            Age : '22',
            sex : 'female'
        },
        email : 'SumanSinha@gmail.com'
    })

    function handleFirstName(e) {
        setPerson({
            ...person,
            firstname : e.target.value
        })
    }

    function handleLastName(e){
        setPerson({
            ...person,
            lastname : e.target.value
        })
    }

    function handleEmail(e){
        setPerson({
            ...person,
            email : e.target.value
        })
    }

    function handleAge(e) {
        setPerson({
            ...person,
            details : {
                ...person.details,
                Age : e.target.value
            }
        })

    }

    return(
        <>
        <label> First Name : <input value = {person.firstname} onChange={handleFirstName}/> </label> <br/>
        <label> Last Name : <input value = {person.lastname} onChange = {handleLastName}/></label> <br/>
        <label> Email : <input value = {person.email} onChange = {handleEmail}/></label> <br/>
        <label> Age : <input value = {person.details.Age} onChange = {handleAge}/></label>

        <p>
            {person.firstname} {''}
            {person.lastname} {''}
            ({person.email})
        </p>
        </>
    )
}

export default UpdateObject;