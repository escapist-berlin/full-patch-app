# `inputParser.ts`

This utility module parses user input to extract a Discogs release ID. It supports full URLs or short codes like `[r123456]`.

## 📦 Exports

### `parseDiscogsInput(input: string): string | null`

Parses a user-provided string to extract a valid Discogs release ID.

#### Parameters

- `input`: `string`  
  A Discogs URL or a code like `[r123456]`.

#### Returns

- `string | null`  
  The extracted release ID as a string, or `null` if the input is invalid or unrecognized.

#### Example

```ts
parseDiscogsInput("https://www.discogs.com/release/1618379") // returns "1618379"
parseDiscogsInput("[r1618379]")                              // returns "1618379"
parseDiscogsInput("random text")                             // returns null
