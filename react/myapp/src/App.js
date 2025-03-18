
import React,{ useState } from "react";
import Login from './assets/Loginform';
import Signup from './assets/register';
import Home from './assets/home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';


// function App() {
//   return (
//     <div className="App">
//         <Signup />


//         <Login />
       
//     </div>
//   );
// }

// export default App;



// import Login from './components/Login';
// import Signup from './components/Signup';
// import './App.css';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'

// const router=createBrowserRouter([]);
// {
//     path:'/',
//     element:<Signup/>
// }
// {
//     path:'/login',
//     element:<Login/>
// }

// function App() {
//   return (
//     <div className="App">
//         <RouterProvider router={router}/>

//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import "./App.css";
 
function App() {
  const [user,SetUser] =useState('you');
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login  user={user} SetUser={SetUser}/>,
  },
  {
    path: "/home",
    element: <Home user={user} SetUser={SetUser}/>,
  },
]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
