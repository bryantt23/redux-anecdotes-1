import { useSelector, useDispatch } from 'react-redux'
import Filter from './Filter';
import { voteOnAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteOnAnecdote(id))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.filter(anecdote => anecdote.content.includes(filterText.filterText)).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList