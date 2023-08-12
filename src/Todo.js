
const Todo = ({id, task, deleteTodo}) => {

    const handleClick = () => {
        deleteTodo(task)
    }

    return ( <ul>
        <li>{task}</li>
        <button onClick={handleClick}>X</button>
    </ul>)
   
}

export default Todo; 