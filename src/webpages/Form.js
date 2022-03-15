import React from "react";



function Form(props){
    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [codiceFiscale, setcodiceFiscale] = useState("");
    // const [userType, setuserType] = useState("");
    // const [startDate, setstartDate] = useState("");
    // const [eta, seteta] = useState("");

    return(
    <form method="POST">
      {/* <input
        value={props.name}
        // onChange={e => setfirstName(e.target.value)}
        type="text"
        name="firstName"
        required
      />
      <input
        value={props.cognome}
        // onChange={e => setlastName(e.target.value)}
        type="text"
        name="lastName"
        required
      />
      <input
        value={props.cf}
        // onChange={e => setcodiceFiscale(e.target.value)}
        type="text"
        name="codiceFiscale"
        required
      />
      <input
        value={props.role}
        // onChange={e => setuserType(e.target.value)}
        type="text"
        name="userType"
        required
      />
      <input
        value={props.data}
        // onChange={e => setstartDate(e.target.value)}
        type="text"
        name="startDate"
        required
      />
      <input
        value={props.eta}
        // onChange={e => seteta(e.target.value)}
        type="number"
        name="eta"
        required
      />
       <input type="hidden" id="userId" name="userId" value={props.userIdO}></input>
      <button type="submit">Submit</button> */}
    </form>
    );

}

export default Form();