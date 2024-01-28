import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes'

const getAnecdotesSortedByVotes = (a, b) => b.votes - a.votes;

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const updatedAnecdote = action.payload;
      return state
        .map(anecdote => (anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote))
        .sort(getAnecdotesSortedByVotes);
    },
    setAnecdotes(state, action) {
      return action.payload.sort(getAnecdotesSortedByVotes);
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

export const voteOnAnecdote = id => {
  return async (dispatch, getState) => {
    const anecdoteToVote = await getState().anecdotes.find(a => a.id === id);
    const updatedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 };
    await anecdoteService.updateAnecdoteVote(updatedAnecdote)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export const { setAnecdotes, appendAnecdote, voteAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
