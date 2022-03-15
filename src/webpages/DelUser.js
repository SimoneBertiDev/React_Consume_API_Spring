import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const User = (props) => {
    const { userId } = useParams();
    const [user, setUser] = useState([]);

    

    console.log(userId);
    console.log(`${userId}`);

    useEffect(() => {
        fetch("http://localhost:8080/user/" + userId, {method: 'DELETE', headers: {
            'Content-Type': 'application/json'
          },})
        .then(res => res.text())
        .then(res => console.log(res))
    }, [])

    let navigate = useNavigate();
    useEffect(() => {
      navigate('/');
    });


        return (
            navigate
        );
        
        
    
}
export default User;