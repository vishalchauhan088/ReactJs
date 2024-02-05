

function Event(){
    
    const handleClick = () =>{
        alert("button clicked");
    }

    return(
        <button
            onClick={handleClick}
        >click me</button>
    )
}

export default Event;