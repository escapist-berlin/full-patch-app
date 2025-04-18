export function parseDiscogsInput(input: string): string | null {
    // Match a full release URL
    const urlRegex = /discogs\.com\/release\/(\d+)/;
    const matchFromUrl = input.match(urlRegex);
    if (matchFromUrl) return matchFromUrl[1];

    return null;
}