import './App.css'

import { useState } from 'react'

function App() {
  const [prompt,setPrompt] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("form submited: ",prompt)
  }

  return (
    <>
      <h1>Prompt</h1>
      <form
        onSubmit={(e)=>{onSubmit(e)}}
      >
        <input 
          type='text'
          name='prompt'
          placeholder='Type a prompt'
          onChange={(e)=> {setPrompt(e.target.value)}}
        />
        <input 
          type='submit' 
          value="Generate"
        />
      </form>
    </>
  )
}

export default App
