import React from 'react'
import { useState, useEffect } from 'react'

export default function Search ({userInput, setUserInput}) {

    



  return (
    <div style={{marginTop: 20}}>
    
    <h6>Search:</h6>

    <input type="text" name="search" value={userInput} onChange={e => setUserInput(e.target.value)} />

    </div>
  )
}


