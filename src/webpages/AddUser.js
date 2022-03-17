// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import Form from './Form';
// import useFethc from "react-fetch-hook";
// const AddUser = (props) => {


//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [user, setUser] = useState([]);

//     // const userIds = user.userId;
//     // const firstName = user.firstName;
//     // const lastName = user.lastName;
//     // const userType = user.userType;
//     // const startDate = user.startDate;
//     // const codiceFiscale = user.codiceFiscale;
//     // const eta = user.eta;

//     const [id, setId] = useState("");
//     const [name, setName] = useState("");
//     const [LastName, setLastName] = useState("");
//     const [userTypee, setUserType] = useState("");
//     const [startDatee, setStart] = useState("");
//     const [cf, setCF] = useState("");
//     const [etaa, setEta] = useState("");




//     // console.log(json);

//     const ID = (e) => {
//         setId(e.target.value);
//     };
//     const NAME = (e) => {
//         setName(e.target.value);
//     };
//     const LAST = (e) => {
//         setLastName(e.target.value);
//     };
//     const USERT = (e) => {
//         setUserType(e.target.value);
//     };
//     const start = (e) => {
//         setStart(e.target.value);
//     };
//     const CF = (e) => {
//         setCF(e.target.value);
//     };
//     const ETA = (e) => {
//         setEta(e.target.value);
//     };



//     let [jsonnn, setjson] = useState("")

//     const jsonss = (e) => {
//         setjson(jsonnn = {
//             "firstName": `${name}`,
//             "lastName": `${LastName}`,
//             "userType": `${userTypee}`,
//             "startDate": `${startDatee}`,
//             "codiceFiscale": `${cf}`,
//             "eta": `${etaa}`,
//         });

//     };
//     useFethc("http://localhost:8080/user",  {method: 'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jsonss)})


//     // json = {
//     //     "firstName": `${name}`,
//     //     "lastName": `${LastName}`,
//     //     "userType": `${userTypee}`,
//     //     "startDate": `${startDatee}`,
//     //     "codiceFiscale": `${cf}`,
//     //     "eta": etaa,
//     // }


//     // function asd() {

//     // }



//         // fetch("http://localhost:8080/user", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(json) })

//         handleSubmit = (event) => {
//             event.preventDefault();
//             console.log(event.target.elements.firstName.value) // from elements property
//             console.log(event.target.firstName.value)          // or directly
//           }


//     if (user) {
//         return (

//             <form onSubmit={this.handleSubmit} >
//                 <label>
//                     Nome:
//                     <input type="text" name="firstName" onChange={NAME} />
//                 </label>
//                 <label>
//                     Congome:
//                     <input type="text" name="lastName" onChange={LAST} />
//                 </label>
//                 <label>
//                     Abbonamento:
//                     <input type="text" name="userType" onChange={USERT} />
//                 </label>
//                 <label>
//                     Inizio:
//                     <input type="text" name="startDate" onChange={start} />
//                 </label>
//                 <label>
//                     Codice Fiscale:
//                     <input type="text" name="codiceFiscale" onChange={CF} />
//                 </label>
//                 <label>
//                     Età:
//                     <input type="text" name="eta" onChange={ETA} />
//                 </label>
//                 <input type="submit" value="Submit" onChange={jsonss} />
//             </form>
//         );
//     }
// }
// export default AddUser;

import React, { useEffect } from "react";
import useFethc from "react-fetch-hook";

class AddUser extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event.target[0].value)
        // console.log(event.target.elements.username.value)

        var jsonnn = {
                        "firstName": `${event.target.firstName.value}`,
                        "lastName": `${event.target.lastName.value}`,
                        "userType": `${event.target.userType.value}`,
                        "startDate": `${event.target.startDate.value}`,
                        "codiceFiscale": `${event.target.codiceFiscale.value}`,
                        "eta": event.target.eta.value,
                    }

            console.log(jsonnn);

            useEffect(()=>{
                fetch("http://localhost:8080/user", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jsonnn) })
            })
        //useFethc("http://localhost:8080/user",  {method: 'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jsonnn)})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Nome:
                    <input type="text" name="firstName"  />
                </label>
                <label>
                    Congome:
                    <input type="text" name="lastName"  />
                </label>
                <label>
                    Abbonamento:
                    <input type="text" name="userType"  />
                </label>
                <label>
                    Inizio:
                    <input type="text" name="startDate" />
                </label>
                <label>
                    Codice Fiscale:
                    <input type="text" name="codiceFiscale"  />
                </label>
                <label>
                    Età:
                    <input type="text" name="eta"  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default AddUser;