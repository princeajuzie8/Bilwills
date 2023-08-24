import React from 'react'
import { BiSolidError } from 'react-icons/bi'
import styled from 'styled-components'


const RegError=styled.div`
   background:white;
   padding:2px;
   display:flex;
   gap:2px;
   width:fit-content;
   margin-top:2px;
   

   .errorIcon{
      width: 50px;
      height: 50px;
   }
   .error{
     color:red;
     font-size: 10px;
   }
`

function RegexError({error}) {


  return (
    <RegError>
        <BiSolidError style={{fill:'red'}} className="errorIcon"/>
        <p className='error'>{error}</p>
    </RegError>
  )
}

export default RegexError