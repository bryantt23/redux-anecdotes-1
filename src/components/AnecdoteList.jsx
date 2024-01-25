import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './AnecdoteForm';
import Filter from './Filter';

const voteOnAnecdote = id => {
    return {
        type: 'VOTE_ON_ANECDOTE',
        payload: { id }
    };
};

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
            {anecdotes.filter(anecdote => anecdote.content.includes(filterText.filterText.text)).map(anecdote =>
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