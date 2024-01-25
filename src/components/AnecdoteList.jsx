import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './AnecdoteForm';

const voteOnAnecdote = id => {
    return {
        type: 'VOTE_ON_ANECDOTE',
        payload: { id }
    };
};

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteOnAnecdote(id))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
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
            <AnecdoteForm />
        </div>
    )
}

export default AnecdoteList