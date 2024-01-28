import { createSlice } from '@reduxjs/toolkit'

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
    case 'NEW_ANECDOTE':
      const newAnecdote = asObject(action.payload)
      return [...state, newAnecdote];
    default:
      state = [...state].sort((a, b) => b.votes - a.votes)
      return state;
  }

};


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      const newAnecdote = asObject(content)
      state.push(newAnecdote)
    },
    voteOnAnecdote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote).sort(getAnecdotesSortedByVotes)
    }
  },
})

export const { createAnecdote, voteOnAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer;
