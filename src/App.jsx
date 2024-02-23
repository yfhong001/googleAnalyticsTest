import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //   // Function to handle click event
  // const handleButtonClick = () => {
  //   // Increment the count state
  //   setCount(count => count + 1);

  //   // Push the event to the Data Layer for GTM
  //   window.dataLayer = window.dataLayer || [];
  //   window.dataLayer.push({
  //     event: 'buttonClick', // Event name used in GTM trigger
  //     clickCount: count + 1 // The updated count value
  //     // Add any additional parameters you want to track here
  //   });
  // }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
