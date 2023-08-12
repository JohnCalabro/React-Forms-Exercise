import './Box.css';


const Box = ({id, backgroundColor, width, height, destroy}) => {

   const handleClick = (e) => {
        
        console.log(backgroundColor)
        destroy(backgroundColor)

    }

    return (
        <div className = "goodBox"
        style=
        {{backgroundColor:backgroundColor,
          width:width,
          height:height
        }}>
        <button onClick={handleClick} id={id}>X</button>
        </div>
    )
}


export default Box;