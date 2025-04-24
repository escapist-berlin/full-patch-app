import { Track } from "../types/discogs.ts";

const BASE_URL = 'https://api.discogs.com';

export async function fetchTracklist(releaseId: string): Promise<Track[]> {
  const response = await fetch(`${BASE_URL}/releases/${releaseId}`, {
    method: 'GET',
    headers: {
      "User-Agent": "FullPatchApp/1.0",
    },
  });

  if (! response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.tracklist as Track[];
}