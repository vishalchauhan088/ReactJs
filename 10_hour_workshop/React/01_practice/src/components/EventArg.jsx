

function EventArg(){
    
    const handleClick = (x) =>{
        alert(x);
    }

    return (
        <button onClick={()=>{handleClick("goal")}}>Shoot</button>
    )
}

export default EventArg;