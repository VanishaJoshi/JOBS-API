
//control shift p---echo ---multiple command
// import LOGO from "./assets/images/LOGO.png"
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import {  Error,DashboardLayout, HomeLayout, Landing, Login, Register, AddJob, AllJobs, Stats, Profile, Admin } from "./pages";
const routerData = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true, //default page
        element:<Landing/>
      },
      {
        path:"login",
        element:<Login/>,
      },
      
        {
          path:"register",
          element:<Register />,
        },
      
     
      {
        path:"dashboard",
        element:<DashboardLayout />,
        children:[
          {
            index:true,
            element:<AddJob />
          },
          {
            path:"alljob",
            element:<AllJobs />
          },
          {
            path:"stats",
            element:<Stats/>
          },
          {
            path:"profile",
            element:<Profile/>
          },
          {
            path:"admin",
            element:<Admin />
          }
        ]
      },
    ],
   
  },
 
  
]);
const App = () => {
  return <RouterProvider router={routerData}/>
  // <img src={LOGO} width="300" height="200" />
};

export default App

//control shift p---echo ---multiple command
//import logo from "./assets/images/logo.svg"
// import {createBrowserRouter,RouterProvider } from "react-router-dom";
// const routerData = createBrowserRouter([
//   {
//     path:"/",
//     element:<h1>Home</h1>,
//   },
//   {
//     path:"/about",
//     element:(
//     <div>
//       <h2>about page</h2>
//       <p>This is about page</p>
//     </div>
//     ),
//   },
// ]);
// const App = () => {
//   return <RouterProvider router={routerData}/>;
// };

// export default App