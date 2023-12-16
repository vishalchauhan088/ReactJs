

function ColorButton({color,onclick}){
    return(
        <button
            onClick = {onclick}
            style={{backgroundColor:color}}
        >
            {color}
        </button>
    )
}

export default ColorButton;