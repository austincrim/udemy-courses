import React, { useState } from 'react'

function Input(props) {
    const [newNote, setNewNote] = useState({
        heading: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote(() => {
            return { ...newNote, [name]: value }
        })
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    type="text"
                    name="heading"
                    value={newNote.heading}
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    type="text"
                    name="content"
                    value={newNote.content}
                    placeholder="Note content"

                />
                <button
                    onClick={(event) => {
                        props.onClick(newNote)
                        setNewNote({ heading: "", content: "" })
                        event.preventDefault()
                    }}
                    name="submit">Add</button>
            </form>
        </div>
    )
}

export default Input;