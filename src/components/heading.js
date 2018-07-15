import React from 'react'

const Heading = (props) => {
    return (

        <div style={{background:'black', color:'white', height:'3rem', lineHeight:'3rem', textAlign:'center'}}>
            <p style={{margin:'0'}}> {props.children} </p>
        </div>

    )
}

export default Heading
