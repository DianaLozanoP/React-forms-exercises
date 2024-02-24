import { useState } from "react";

const NewTodoForm = ({ addToDo }) => {
    const INITIAL_STATE = {
        activity: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData })
        setFormData(INITIAL_STATE)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="activity">Enter a new to do</label>
            <input
                id="activity"
                type="text"
                name="activity"
                placeholder="Replace lightbulb"
                value={formData.activity}
                onChange={handleChange} />
            <button>Add it</button>
        </form>
    )
}

export default NewTodoForm;