import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";

function App() {
  return (
    <>
      {/* <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} /> */}
      {/* <div className="text-3xl bg-blue-300 font-bold text-red-300">
        Hello html
      </div> */}
      <Login/>
    </>
  );
}

export default App;
