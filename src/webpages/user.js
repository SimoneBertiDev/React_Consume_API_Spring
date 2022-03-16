import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Form from './Form';

const User = (props) => {
    const { userId } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);

    

    console.log(userId);
    console.log(`${userId}`);

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
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (user) {
        return (

            <div class="row">

                <div class="col-6">
                    <h5 class="title" key={user.userId}>{user.firstName} {user.lastName}, id {user.userId}</h5>
                    <h6 class="mb-2 text-muted">CF {user.codiceFiscale}, <br />
                        età {user.eta}</h6>
                </div>

                <br />

                <div class="col-6">
                    <p class="card-text">Tipologgia {user.userType}, <br /> Sottoscrizione il {user.startDate}</p>
                </div>

                {/* <Form  name={user.firstName} cognome={user.lastName} cf={user.codiceFiscale} 
                eta={user.eta} data={user.startDate} userIdO={user.userId} role={user.userType}/> */}
            </div>
        );
    }
}
export default User;