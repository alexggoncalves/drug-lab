import './App.css'

import { useState } from 'react'

function App() {
  const [prompt,setPrompt] = useState("")
  const [result,setResult] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("form submited: ",prompt)

    const result = await generateMedicine(prompt);
    setResult(result);
    console.log(result);
  }

  const generateMedicine = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({prompt: prompt})
    })

    const data = await response.json();

    return data.response; 
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

      <p>{result}</p>
    </>
  )
}

export default App
