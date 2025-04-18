import {useState} from 'react';

function App() {
  const [input, setInput] = useState('');

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">FullPatch</h1>
          <p className="text-lg text-gray-600 italic">
            from partial to full
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Paste a Discogs release link and we’ll find full YouTube matches for every track
          </p>

          <input
            type='text'
            placeholder='Paste Discogs release URL...'
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default App
