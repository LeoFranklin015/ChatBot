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
//       .then((data) => setResponse(data.message.content))
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
//       <div className="response">
//         <code>{response}</code>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useRef, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const responseContainerRef = useRef(null);

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
      .then((data) => {
        const newResponse = {
          question: message,
          answer: data.message.content,
        };
        setResponses([...responses, newResponse]);
      })
      .catch((error) => console.log(error));
    setMessage("");
  };

  // Scroll to the bottom of the response container when new responses are added
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop =
        responseContainerRef.current.scrollHeight;
    }
  }, [responses]);

  return (
    <div className="App">
      <div className="response-container" ref={responseContainerRef}>
        {responses.map((response, index) => (
          <div key={index} className="response">
            <div className="question">{response.question}</div>
            <pre className="answer">{response.answer}</pre>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="textarea"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

// function App() {
//   const [message, setMessage] = useState("");
//   const [responses, setResponses] = useState([]);
//   const responseContainerRef = useRef(null);

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
//       .then((data) => {
//         const newResponse = {
//           question: message,
//           answer: data.message.content,
//         };
//         setResponses([...responses, newResponse]);
//       })
//       .catch((error) => console.log(error));
//     setMessage("");
//   };

//   // Scroll to the bottom of the response container when new responses are added
//   useEffect(() => {
//     if (responseContainerRef.current) {
//       responseContainerRef.current.scrollTop =
//         responseContainerRef.current.scrollHeight;
//     }
//   }, [responses]);

//   return (
//     <div className="App">
//       <div className="response-container" ref={responseContainerRef}>
//         {responses.map((response, index) => (
//           <div key={index} className="response">
//             <div className="code">{"<div>"}</div>
//             <div className="code-indent">{'<div className="answer">'}</div>
//             <div className="code-indent">{response.answer}</div>
//             <div className="code-indent">{"</div>"}</div>
//             <div className="code-indent">{'<div className="question">'}</div>
//             <div className="code-indent">{response.question}</div>
//             <div className="code-indent">{"</div>"}</div>
//             <div className="code">{"</div>"}</div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="input-form">
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//         ></textarea>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default App;
