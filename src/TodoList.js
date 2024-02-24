import { useState } from "react";
import { v4 as uuid } from "uuid"
import ToDo from "./ToDo";
import NewTodoForm from "./NewToDoForm";

const TodoList = () => {
    const INITIAL_STATE = [
        { activity: "Laundry", id: uuid() }]
    const [toDos, setToDos] = useState(INITIAL_STATE)
    const addToDo = ({ activity }) => {
        setToDos(toDos => [...toDos, { activity, id: uuid() }])
    }
    const removeToDo = id => {
        const newToDos = toDos.filter(todo => todo.id !== id)
        setToDos(newToDos)
    }
    return (
        <div>
            <h3>To Do List</h3>
            <NewTodoForm addToDo={addToDo} />
            <div>
                <ul>
                    <li>
                        {toDos.map(toDo => <ToDo key={toDo.id} id={toDo.id} activity={toDo.activity} removeToDo={removeToDo} />)}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TodoList;