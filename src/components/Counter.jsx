// import React from "react";
// import { useState, useEffect, useRef } from "react";
// export default function Counter() {
//   const [counter, setCounter] = useState(1);
//   const timerRef = useRef(null);
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setCounter((p) => p + 1);
//     }, 500);
//   }, [counter]);
//   return (
//     <div>
//       <h1>counter:{counter}</h1>
//       <button onClick={() => clearInterval(timerRef.current)}>pause</button>
//     </div>
//   );
// }
