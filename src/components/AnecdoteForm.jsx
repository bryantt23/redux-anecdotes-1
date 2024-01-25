import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const createAnecdote = (content) => {
    return {
        type: 'NEW_ANECDOTE',
        payload: content
    };
};

function AnecdoteForm() {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form></div>
    )
}

export default AnecdoteForm