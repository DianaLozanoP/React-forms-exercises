const ToDo = ({ id, activity, removeToDo }) => {
    const handleRemoveClick = () => {
        removeToDo(id)
    }
    const btnStyle = {
        position: 'relative',
        backgroundColor: 'lavender'
    }
    return (
        <div>{activity}
            <button
                onClick={handleRemoveClick}
                style={btnStyle}>X</button>
        </div>
    )
}

export default ToDo;