


function MultiForm({handleChange,handleSubmit,formData}){
    
    console.log("inside mul");
    console.log(formData.name);
    console.log(formData.email);
    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
          handleSubmit(e);
        }
      };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"  onBlur={handleChange} name="name" placeholder="Name"/>
            <input type="email" onBlur={handleChange} name="email" placeholder="email"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MultiForm;