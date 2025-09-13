import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-3xl bg-blue-300 font-bold text-red-300">
        Hello html
      </div>
    </>
  );
}

export default App;
