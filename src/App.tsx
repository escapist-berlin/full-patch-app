import {useState} from 'react';

function App() {
  const [input, setInput] = useState('');

  return (
    <>
      <div className="text-center">
        <h1>FullPatch</h1>
        <p>from partial to full</p>
        <p>Paste a Discogs release link and we’ll find full YouTube matches for every track</p>

        <input
          type='text'
          placeholder='Paste Discogs release URL...'
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
