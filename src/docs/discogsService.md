# `discogsService.ts`

This module provides functionality to interact with the Discogs API and retrieve release data, specifically the tracklist of a given release.

## 📦 Exports

### `fetchTracklist(releaseId: string): Promise<Track[]>`

Fetches the tracklist of a release from the Discogs API using a release ID.

#### Parameters

- `releaseId`: `string`  
  The Discogs release ID, e.g., `"1618379"`.

#### Returns

- `Promise<Track[]>`  
  A promise that resolves to an array of `Track` objects (as defined in `types/discogs.ts`).

#### Throws

- Throws an error if the HTTP request fails or the release ID is invalid.

#### Example

```ts
const tracks = await fetchTracklist("1618379");
