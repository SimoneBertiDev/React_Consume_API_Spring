import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Form from './Form';

const AddUser = (props) => {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);

    // const userIds = user.userId;
    // const firstName = user.firstName;
    // const lastName = user.lastName;
    // const userType = user.userType;
    // const startDate = user.startDate;
    // const codiceFiscale = user.codiceFiscale;
    // const eta = user.eta;

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [userTypee, setUserType] = useState("");
    const [startDatee, setStart] = useState("");
    const [cf, setCF] = useState("");
    const [etaa, setEta] = useState("");




    // console.log(json);

    const ID = (e) => {
        setId(e.target.value);
    };
    const NAME = (e) => {
        setName(e.target.value);
    };
    const LAST = (e) => {
        setLastName(e.target.value);
    };
    const USERT = (e) => {
        setUserType(e.target.value);
    };
    const start = (e) => {
        setStart(e.target.value);
    };
    const CF = (e) => {
        setCF(e.target.value);
    };
    const ETA = (e) => {
        setEta(e.target.value);
    };


    let [json, setjson] = useState("")

    

    json = {
        "firstName": `${name}`,
        "lastName": `${LastName}`,
        "userType": `${userTypee}`,
        "startDate": `${startDatee}`,
        "codiceFiscale": `${cf}`,
        "eta": etaa,
    }


    useEffect(() => {
        console.log(json);

        //console.log(id  +" " + name + " " + LastName + " " + userTypee + " " + startDatee + " " + cf + " " + etaa);
        // console.log(userId);
        // console.log(`${userId}`);   
        if (!name === "" && !LastName === "" && !userTypee === "" && !startDatee === "" && !cf === "" && !etaa === "") {

            fetch("http://localhost:8080/user", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(json) })
        }
    }, [json]);
    if (user) {
        return (

            <form>
                <label>
                    Nome:
                    <input type="text" name="firstName" onChange={NAME} />
                </label>
                <label>
                    Congome:
                    <input type="text" name="lastName" onChange={LAST} />
                </label>
                <label>
                    Abbonamento:
                    <input type="text" name="userType" onChange={USERT} />
                </label>
                <label>
                    Inizio:
                    <input type="text" name="startDate" onChange={start} />
                </label>
                <label>
                    Codice Fiscale:
                    <input type="text" name="codiceFiscale" onChange={CF} />
                </label>
                <label>
                    Età:
                    <input type="text" name="eta" onChange={ETA} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default AddUser;