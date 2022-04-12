import React, { useEffect } from 'react'
import axios from "axios"



const Component = () => {
    
    useEffect(()=>{
axios.get("http://localhost:8900/user").then((response)=>{
    console.log(response);
})
    }
    )
    
    
  return (
      <>

    <div>dummy component</div>
  
    </>
  )
}

export default Component