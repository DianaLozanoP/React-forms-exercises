import { useState } from "react"
import { v4 as uuid } from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), backgroundColor: "pink", width: "80px", height: "80px" }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = ({ backgroundColor, width, height }) => {
        setBoxes(boxes => [...boxes, { id: uuid(), backgroundColor, width, height }])
    }
    const removeBox = id => {
        const newBoxes = boxes.filter(box => box.id !== id)
        setBoxes(newBoxes)
    }
    return (
        <div>
            <h3>Boxes List</h3>
            <div>
                <ul>
                    {boxes.map(box => <Box
                        key={box.id}
                        id={box.id}
                        backgroundColor={box.backgroundColor}
                        width={box.width}
                        height={box.height}
                        removeBox={removeBox} />)}
                </ul>
            </div>
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;