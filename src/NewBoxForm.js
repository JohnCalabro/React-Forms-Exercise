import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE );
    console.log(formData)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Add new box</label>
        <input 
        id="backgroundColor" 
        type="text" 
        placeholder="Background Color"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        />
        <input 
        id="width" 
        type="text" 
        placeholder="Enter Width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        />
        <input 
        id="height" 
        type="text" 
        placeholder="Enter Height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        />
        <button>Add A Box...how again?</button>
        </form>
    )
}

export default NewBoxForm;