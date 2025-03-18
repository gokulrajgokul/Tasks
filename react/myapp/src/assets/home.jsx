import React from "react"; 
const Home = ({user,setUser}) =>{

    return(
        <div >
            <h1>welcome to my page</h1>
            <p>Welcome {user}</p>
        </div>

    );
}
export default Home;