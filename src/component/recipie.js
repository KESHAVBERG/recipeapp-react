import React from 'react'
import '../recipie.css'

const Recipie = ({title , calories,image,key,ingri})=>{
    return(
        <div className='reccon' key={key}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingri.map(inc =>( 
                    <li>{inc.text}</li>
                ))}
            </ol>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipie