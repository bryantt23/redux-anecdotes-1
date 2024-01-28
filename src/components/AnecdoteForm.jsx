import React from 'react'
import { useDispatch } from 'react-redux'
import { hideNotificationWithTimeout, showNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'

function AnecdoteForm() {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
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