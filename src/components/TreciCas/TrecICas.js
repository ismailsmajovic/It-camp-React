import React from "react";

const TreciCas =()=>{


    
//  <TeamCard name={team.name} points={team.points}></TeamCard>

  
    
    /*const rucniklik =()=>{
        alert('funkcija iz App')
    }*/




 // <button onClick={rucniklik}>App</button>
 //<Parent otacKlik={rucniklik}/>
 //

 /*const [name, setName] =useState('');

 const [email, setEmail]=useState('');

 const [hobi, setHobi] =useState('');*/

 

 const[userInput, setUserInput]=useState({
    name: '',
    email: '',
    hobi: '',
    

 })

 //console.log(setForm);

 return (
    <div className="card-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput.name);
          console.log(userInput.email);
          console.log(userInput.hobi);

          /*console.log(setUserInput.name)     //output: bound dispatchSetState
          console.log(setUserInput.email)     //output:undefined
          console.log(setUserInput.hobi) */       //output:undefined
        }}
      >
        <label htmlFor="html">Name</label>
        <input
          type="text"
          id="html"
          name="fav_language"
          value={userInput.name}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              name: event.target.value
            }))
          }
        />
        <br />
        <label htmlFor="css">Email</label>
        <input
          type="email"
          id="css"
          name="fav_language"
          value={userInput.email}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              email: event.target.value
            }))
          }
        />
        <br />
        <label htmlFor="javascript">Hobi</label>
        <input
          type="text"
          id="javascript"
          name="fav_language"
          value={userInput.hobi}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              hobi: event.target.value
            }))
          }
        />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
      <TeamCard name={team.name} points={team.points}></TeamCard>
    </div>
  );
}




export default TreciCas;