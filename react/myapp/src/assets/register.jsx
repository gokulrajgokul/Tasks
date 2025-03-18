// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import { auth } from "./firebase"




// function Signup() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [mail, setmail] = useState('');
//   const [age, setAge] = useState('');
//   const [contact, setcontact] = useState('');
  
//   const navigate = useNavigate();  

//   const handleRegister= async(e) => {
//     e.preventDefault();  
//     // console.log({ username, password, mail, age, contact });
//     try{
//           await auth.createUserWithEmailAndPassword(mail,password);
//           alert("Email id registered successfully");
//           navigate('/login');
//           }
//           catch(error){
//             console.log(error);
//             alert(error);
//           }
    
  
    
//   };

//   return (
//     <div className="container">
//         <h1>Signup</h1> <br />
//     <form  onSubmit={handleRegister}>
        
//         <label>username:</label><br />
//       <input 
//         type="text" 
//         placeholder="Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//         required
//       />
     
//       <br />
      
        
      
      
//       <label>Email:</label><br />
//       <input 
//         type="email" 
//         placeholder="mail id" 
//         value={mail} 
//         onChange={(e) =>  setmail(e.target.value)} 
//         required
//       />
//       <br />
//       <label>Password</label><br />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//         required
//       />
     
      
//       <br />
//       <label>Age:</label><br />
//       <input 
//         type="number" 
//         placeholder="age" 
//         value={age} 
//         onChange={(e) => setAge(e.target.value)} 
//         required
//       />
//       <br />
//       <label>Contact:</label><br />
//       <input 
//         type="number" 
//         placeholder="contact" 
//         value={contact} 
//         onChange={(e) => setcontact(e.target.value)} 
//         required
//       />
     
//       <br />
//       <button type="submit">Submit</button>
//       <p>Already have an account<a href="/login">Login</a></p>
//     </form>
//     </div>
//   );
// }

// export default Signup;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { auth, database } from "./firebase"; // Import database

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  
  const navigate = useNavigate();  

  const handleRegister = async (e) => {
    e.preventDefault();  

    try {
      // Create user in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(mail, password);
      const user = userCredential.user;

      // Save user data in Realtime Database
      await database.ref('users/' + user.uid).set({
        username: username,
        password:password,
        email: mail,
        age: age,
        contact: contact
      });

      alert("User registered successfully");
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleRegister}>
        <label>Username:</label><br />
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
        <br />

        <label>Email:</label><br />
        <input 
          type="email" 
          placeholder="Email ID" 
          value={mail} 
          onChange={(e) => setMail(e.target.value)} 
          required
        />
        <br />

        <label>Password:</label><br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <br />

        <label>Age:</label><br />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required
        />
        <br />

        <label>Contact:</label><br />
        <input 
          type="number" 
          placeholder="Contact" 
          value={contact} 
          onChange={(e) => setContact(e.target.value)} 
          required
        />
        <br />

        <button type="submit">Submit</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default Signup;
