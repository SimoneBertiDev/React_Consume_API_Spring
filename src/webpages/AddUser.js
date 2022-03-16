// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const AddUsers = (props) => {
//     const { userId } = useParams();
//     const [user, setUser] = useState([]);

//     function postData() {
//         const postData = {
//           title: post_title.current.value,
//           description: post_description.current.value,
//         };


//     console.log(userId);
//     console.log(`${userId}`);

//     useEffect(() => {
//         fetch("http://localhost:8080/user/" + userId, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 firstParam: 'yourValue',
//                 secondParam: 'yourOtherValue',
//             })
//         })
//             .then(res => res.text())
//             .then(res => console.log(res))
//     }, [])

//     let navigate = useNavigate();
//     useEffect(() => {
//         navigate('/');
//     });


//     return (
//         navigate
//     );

//     }

// }
// export default AddUsers;