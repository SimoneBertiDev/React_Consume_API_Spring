import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                    <div class="row">
                        <div class="col">
                            <h5 class="title" key={user.userId}>{user.firstName} {user.lastName}, id {user.userId}</h5>
                            <h6 class="mb-2 text-muted">CF {user.codiceFiscale}, <br />
                                età {user.eta}</h6>
                        </div>

                        <br />

                        <div class="col">
                            <p class="card-text">Tipologgia {user.userType}, <br /> Sottoscrizione il {user.startDate}</p>
                        </div>

                        <br />
                        <div class="row">

                            <div className='col-md-5 p-2'>
                            <Link to={`Edit/${user.userId}`}> <button className='btn btn-primary float-right'>EDIT</button></Link>
                            </div>

                            <div className='col-md-5 p-2'>
                            <Link to={`user/${user.userId}`}><button className='btn btn-success float-right'>INFO</button></Link>
                            </div>

                            <div className='col-10 p-2'>
                            <Link to={`Delite/${user.userId}`}><button className='btn btn-danger float-right'>REMOVE</button></Link>
                            </div >



                        </div>
                    </div>
                ))}
            </ul>
        );
    }
}
export default Home;