import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes'

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}


export const { voteOnAnecdote, setAnecdotes, appendAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
