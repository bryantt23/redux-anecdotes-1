import { useSelector, useDispatch } from 'react-redux'
import Filter from './Filter';
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import Notification from './Notification';
import { hideNotificationWithTimeout, showNotification, showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(voteOnAnecdote(id))
        showNotificationWithTimeout(`Upvoted anecdote: ${content}`, 3000)
    }

    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.filter(anecdote => anecdote.content.includes(filterText.filterText)).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList