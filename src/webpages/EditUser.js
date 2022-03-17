// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// // import Form from './Form';

// const EditUser = (props) => {

//     const { userId } = useParams();

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [user, setUser] = useState([]);

//     console.log(userId);
//     useEffect(() => {
//         fetch("http://localhost:8080/user/" + userId)
//             .then(res => res.json())
//             .then(
//                 (data) => {
//                     setIsLoaded(true);
//                     setUser(data);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, []);

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

//     // var firstName = name === "" ? user.firstName : name;
//     // var lastName = LastName === "" ? user.userType : LastName;
//     // var userType = userTypee === "" ? user.userType : userTypee;
//     // var startDate = user.startDate;
//     // var codiceFiscale = cf === "" ? user.eta : cf;
//     // var eta = etaa === "" ? user.eta : etaa;

//     const handleLogin = () => {
//         var json = {
//             "userId": `${user.userId}`,
//             "firstName": `${name === "" ? user.firstName : name}`,
//             "lastName": `${LastName === "" ? user.lastName : LastName}`,
//             "userType": `${userTypee === "" ? user.userType : userTypee}`,
//             "startDate": `${startDatee === "" ? user.startDate : startDatee}`,
//             "codiceFiscale": `${cf === "" ? user.codiceFiscale : cf}`,
//             "eta": `${etaa === "" ? user.eta : etaa}`,
//         };
//         console.log(json)
//     };




//     useEffect(() => {
//         // var json = {
//         //     "userId": `${user.userId}`,
//         //     "firstName": `${name === "" ? user.firstName : name}`,
//         //     "lastName": `${LastName === "" ? user.lastName : LastName}`,
//         //     "userType": `${userTypee === "" ? user.userType : userTypee}`,
//         //     "startDate": `${startDatee === "" ? user.startDate : startDatee}`,
//         //     "codiceFiscale": `${cf === "" ? user.codiceFiscale : cf}`,
//         //     "eta": `${etaa === "" ? user.eta : etaa}`,
//         // };

//         // fetch("http://localhost:8080/user/updateuser", { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify() })

//     }, []);

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }
//     if (!isLoaded) {
//         return <div>Loading...</div>;
//     }

//     if (user) {
//         return (

//             <form onSubmit={handleLogin}>
//                 <label>
//                     ID:
//                     {/* <input type="text" value={userIds} name="userId" /> */}
//                     <input type="text" defaultValue={user.userId} name="userId" onChange={ID} />
//                 </label>
//                 <label>
//                     Nome:
//                     {/* <input type="text" value={firstName} name="firstName" /> */}
//                     <input type="text" defaultValue={user.firstName} name="firstName" onChange={NAME} />
//                 </label>
//                 <label>
//                     Congome:
//                     {/* <input type="text" value={lastName} name="lastName" /> */}
//                     <input type="text" defaultValue={user.lastName} name="lastName" onChange={LAST} />
//                 </label>
//                 <label>
//                     Abbonamento:
//                     {/* <input type="text" value={userType} name="userType" /> */}
//                     <input type="text" defaultValue={user.userType} name="userType" onChange={USERT} />
//                 </label>
//                 <label>
//                     Inizio:
//                     {/* <input type="text" value={startDate} name="startDate" /> */}
//                     <input type="text" defaultValue={user.startDate} name="startDate" onChange={start} />
//                 </label>
//                 <label>
//                     Codice Fiscale:
//                     {/* <input type="text" value={codiceFiscale} name="codiceFiscale"/> */}
//                     <input type="text" defaultValue={user.codiceFiscale} name="codiceFiscale" onChange={CF} />
//                 </label>
//                 <label>
//                     Età:
//                     {/* <input type="text" value={eta} name="eta"/> */}
//                     <input type="text" defaultValue={user.eta} name="eta" onChange={ETA} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// export default EditUser;



import React, { useEffect } from "react";
import useFethc from "react-fetch-hook";
import { useParams } from 'react-router-dom';
class EditUser extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event.target[0].value)
        // console.log(event.target.elements.username.value)
        const { userId } = useParams();


        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [user, setUser] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/user/" + userId)
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setUser(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, []);


        // var jsonnn = {
        //     "firstName": `${event.target.firstName.value}`,
        //     "lastName": `${event.target.lastName.value}`,
        //     "userType": `${event.target.userType.value}`,
        //     "startDate": `${event.target.startDate.value}`,
        //     "codiceFiscale": `${event.target.codiceFiscale.value}`,
        //     "eta": event.target.eta.value,
        // }

        console.log(jsonnn);

        useEffect(() => {
            fetch("http://localhost:8080/user", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jsonnn) })
        })
        //useFethc("http://localhost:8080/user",  {method: 'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jsonnn)})
    }

    render() {
        if (user) {
            return (
                <form onSubmit={handleLogin}>
//                 <label>
//                     ID:
//                     {/* <input type="text" value={userIds} name="userId" /> */}
//                     <input type="text" defaultValue={user.userId} name="userId" />
//                 </label>
//                 <label>
//                     Nome:
//                     {/* <input type="text" value={firstName} name="firstName" /> */}
//                     <input type="text" defaultValue={user.firstName} name="firstName"/>
//                 </label>
//                 <label>
//                     Congome:
//                     {/* <input type="text" value={lastName} name="lastName" /> */}
//                     <input type="text" defaultValue={user.lastName} name="lastName"/>
//                 </label>
//                 <label>
//                     Abbonamento:
//                     {/* <input type="text" value={userType} name="userType" /> */}
//                     <input type="text" defaultValue={user.userType} name="userType" />
//                 </label>
//                 <label>
//                     Inizio:
//                     {/* <input type="text" value={startDate} name="startDate" /> */}
//                     <input type="text" defaultValue={user.startDate} name="startDate"/>
//                 </label>
//                 <label>
//                     Codice Fiscale:
//                     {/* <input type="text" value={codiceFiscale} name="codiceFiscale"/> */}
//                     <input type="text" defaultValue={user.codiceFiscale} name="codiceFiscale"  />
//                 </label>
//                 <label>
//                     Età:
//                     {/* <input type="text" value={eta} name="eta"/> */}
//                     <input type="text" defaultValue={user.eta} name="eta"  />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
            )
        }
    }
}
export default EditUser;