
const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    const boxStyle = {
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        position: 'relative',
        marginBottom: '10px'
    }
    const btnStyle = {
        position: 'absolute',
        top: 0,
        right: -25
    }
    const handleRemoveClick = () => {
        removeBox(id)
    }
    return (
        <div style={boxStyle} >
            <button
                onClick={handleRemoveClick}
                style={btnStyle}>X</button>
        </div>
    )
}

export default Box;