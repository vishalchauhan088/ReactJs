import { useState } from "react"
import Car from "./components/Car"
import Name from "./components/Name"
import Event from "./components/Event"
import EventArg from "./components/EventArg"
import InputField from "./components/InputField"
import MultiForm from "./components/MultiForm"
import Github from "./components/Github"

function App() {
  const[formData, setFormData] = useState({name:"",email:""});

  console.log(formData);

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData,[name]:value});
  }

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("form submitted");
  }

  // const person = ["vishal","ravi","shivam"];

  // const persons = [
  //   {fname:"vishal", lname : "Chauhan"},
  //   {fname:"Ravi", lname : "Chauhan"},
  //   {fname:"Munna", lname : "Chauhan"},
  //   {fname:"Sunil", lname : "Chauhan"},
  // ]
 
  return (
    <>
      <div>
          {/* {
              person.map( (each) =>(
                <Car key={each} name={each} />
              ))
            } */}

            {/* {
              persons.map((each) =>(
                <Name  key= {each.fname} fname={each.fname} lname = {each.lname} />
              ))
            } */}
      </div>

      {/* <div className="event">
        <Event />
      </div> */}

      {/* <div className="event-arg">

        <EventArg />
        
        <InputField />

      </div> */}

        {/* <div className="container">
            <MultiForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
        </div>

      <p>name : {formData.name}</p>
      <p>email :{formData.email}</p> */}

      <Github/>


      
    </>
  )
}

export default App
