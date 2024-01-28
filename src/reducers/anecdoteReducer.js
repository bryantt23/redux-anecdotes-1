import { createSlice } from '@reduxjs/toolkit';

const getAnecdotesSortedByVotes = (a, b) => b.votes - a.votes;

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
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
