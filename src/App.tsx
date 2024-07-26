import React, { useRef } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import img from "./assets/logo.svg";
import { useSelector } from "react-redux";
import ModalTTT from "./components/modals/ModalTTT";

const Layout = () => (
  <div>
    <Head />
    <ModalComponent/>
    <main>
      <Outlet /> {/* This will render the matched child route */}
    </main>
  </div>
);


const NotFound = () => {
  return ( <h1>Error 404: Page Not Found</h1>)
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <Layout/>,
    children: [
      {
        index: true,
        id: "Tic Tac Toe",
        element: <TicTacToe/>
      },
      {
        path: "calc",
        id: "Calculator",
        element:<Calculator/>,
      },
      {
        path: "*",
        element: <NotFound />, // Handle unmatched routes
      }
    ]
  },
]);



function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

const ModalComponent = () => {
  return (
    <>
      <ModalTTT/>
    </>
  )
}

const Head = () => {
  return (<nav>
    {
      router.routes[0].children?.filter((e)=> e.path !="*").map((e)=>{
        return (<Link key={e.id} id={e.id} to={"/" + (e.path || "")}>{e.id}</Link>)
      })
    }
    
  </nav>)
}



export default App;