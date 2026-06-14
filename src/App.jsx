import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("white")

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-end pb-10"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button
          className="px-4 py-1 rounded-full text-white"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-4 py-1 rounded-full text-white"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="px-4 py-1 rounded-full text-white"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="px-4 py-1 rounded-full text-black"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>

        <button
          className="px-4 py-1 rounded-full text-white"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

      </div>
    </div>
  )
}

export default App