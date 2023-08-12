import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
    // obj so we can have a single change handler
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData.task)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Add Task</label>
            <input 
            id="name"
            type="text" 
            name="task" 
            placeholder="Add Todo"
            value={formData.name}
            onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )

}


export default TodoForm;