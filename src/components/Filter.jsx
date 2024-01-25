import { useDispatch } from 'react-redux'

const filterAnecdote = text => {
    return {
        type: 'FILTER_ANECDOTE',
        payload: { text }
    };
};

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        console.log("🚀 ~ handleChange ~ event:", event.target.value)
        // input-field value is in variable event.target.value
        dispatch(filterAnecdote(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter