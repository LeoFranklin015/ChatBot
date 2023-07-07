import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3001/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message }),
//     })
//       .then((res) => res.json())
//       .then((data) => setResponse(data.message))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//       <pre>{response}</pre>
//     </div>
//   );
// }

// export default App;

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="response">
        <code>{response}</code>
      </div>
    </div>
  );
}

export default App;
