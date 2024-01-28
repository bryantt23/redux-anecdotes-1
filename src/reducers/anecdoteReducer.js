import { createSlice } from '@reduxjs/toolkit';

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote, index = 0) => {
  return {
    content: anecdote,
    id: getId(),
    votes: index
  };
};

const getAnecdotesSortedByVotes = (a, b) => b.votes - a.votes;

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload;
      const newAnecdote = asObject(content);
      state.push(newAnecdote);
    },
    voteOnAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find(n => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      return state
        .map(anecdote => (anecdote.id === id ? changedAnecdote : anecdote))
        .sort(getAnecdotesSortedByVotes);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
});

export const { createAnecdote, voteOnAnecdote, setAnecdotes, appendAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
