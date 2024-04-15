import React, { useState } from 'react'

const CreateTodo = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")

    function populateTitle(e){
        setTitle(e.target.value)
       
    }

    function populateDesc(e){
        setDesc(e.target.value)
        
    }
    async function createTodo(){
      await fetch("http://localhost:3000/todo",{
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: desc
        }),
        headers: {
            "Content-type": "application/json"
        }
      })

      .then(async function(res) {
        const json = await res.json();
        alert("Todo added");
    })
      
        
    }
  return (
    <>
    <label>Title:</label>
    <input type='text' placeholder='title' onChange={populateTitle}/><br/>
    <label>Description:</label>
    <input type='text' placeholder='description' onChange={populateDesc}/><br/>
    <button onClick={createTodo}>Create Todo</button>
    </>
  )
}

export default CreateTodo