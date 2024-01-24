// import { Input } from "@mui/material";
// import BasicCard from "./components/Card";
// import { useState } from "react";
import TodoApp from "./pages/TodoApp";
import "./App.css";

// function App() {
//   const name = "M.Bilal";
//   const arr = ["mango", "orange", "Banana"];

//   const [title, setTitle] = useState("");

//   return (
//     <>
//       <h2>Hello React by {name}</h2>

//       {/* Render Array List */}
//       <ul>
//         {arr.map((v, i) => (
//           <li key={i}>
//             {v} + {i}
//           </li>
//         ))}
//       </ul>
//       <BasicCard value={title} />
//       <Input
//         onChange={(e) => {
//           setTitle(e.target.value);
//           console.log(e.target.value);
//         }}
//       />
//     </>
//   );
// }

function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
