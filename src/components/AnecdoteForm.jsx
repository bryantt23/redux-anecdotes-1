import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { hideNotificationWithTimeout, showNotification } from '../reducers/notificationReducer'

function AnecdoteForm() {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        dispatch(showNotification(`Added anecdote: ${content}`))
        dispatch(hideNotificationWithTimeout(3000))
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