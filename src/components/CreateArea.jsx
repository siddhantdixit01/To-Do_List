import React, { useState } from "react";

function CreateArea(props) {
    const [note,setNote]=useState({title:"",content:""});
    
    function handleChange(event) {
        const {name,value}=event.target;
        setNote(prevNote=>{
            return {...prevNote,[name]:value};
        })
    }
    function handleClick(event) {
        props.onAdd(note);
        setNote({title:"",content:""});
        event.preventDefault();
    }
    
    return (
        <div>
            <form className="create-note">
                <input 
                    name="title" 
                    placeholder="title" 
                    value={note.title} 
                    onChange={handleChange} 
                />
                <textarea 
                    name="content" 
                    placeholder="take a note..." 
                    value={note.content} 
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;