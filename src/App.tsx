import { useState } from 'react';
import { parseDiscogsInput } from "./utils/inputParser";
import { fetchTracklist } from './services/discogsService.ts';
import { Track } from "./types/discogs.ts";

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [tracklist, setTracklist] = useState<Track[] | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setTracklist(null);

    const releaseId = parseDiscogsInput(input);

    if (! releaseId) {
      console.error('Invalid discogs link or release code');
      setLoading(false);
      return;
    }

    try {
      const tracks = await fetchTracklist(releaseId);
      console.log('tracks', tracks)
      setTracklist(tracks);
      setLoading(false);
    } catch (err) {
      console.error(`Failed to fetch tracklist for release ${releaseId}`, err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">FullPatch</h1>
          <p className="text-lg text-gray-600 italic">
            from partial to full
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Paste a Discogs release link and we’ll find full YouTube matches for every track
          </p>

          <input
            type='text'
            placeholder='Paste Discogs release URL...'
            className="w-full px-4 py-2 border border-gray-300 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Fetch Release'}
          </button>

          {tracklist && (
            <div className="mt-4 max-w-2xl w-full bg-violet-100 shadow-md p-4 rounded">
              <h2 className="text-xl font-bold mb-4 text-center">Tracklist</h2>
              <ul className="space-y-2 text-left">
                {tracklist.map((track, index) => (
                  <li key={index}>
                    <strong>{track.position}</strong>
                    {track.artists && ` — ${track.artists.map(artist => artist.name).join(', ')}`}
                    {` — ${track.title}`}
                    {track.duration && ` — ${track.duration}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
