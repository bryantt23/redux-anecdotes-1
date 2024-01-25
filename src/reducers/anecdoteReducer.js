const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const getId = () => (100000 * Math.random()).toFixed(0);


const asObject = (anecdote, index = 0) => {
  return {
    content: anecdote,
    id: getId(),
    votes: index
  };
};

const getAnecdotesSortedByVotes = (a, b) => b.votes - a.votes

const initialState = anecdotesAtStart
  .map((anecdote, index) => asObject(anecdote, index))
  .sort((a, b) => b.votes - a.votes);

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'VOTE_ON_ANECDOTE':
      const updatedState = state.map(anecdote => anecdote.id === action.payload.id ? {
        ...anecdote, votes: anecdote.votes + 1
      } : anecdote)
      return updatedState.sort(getAnecdotesSortedByVotes);
    case 'NEW_ANECDOTE':
      const newAnecdote = asObject(action.payload)
      return [...state, newAnecdote];
    default:
      state = [...state].sort((a, b) => b.votes - a.votes)
      return state;
  }

};

export default anecdoteReducer;
