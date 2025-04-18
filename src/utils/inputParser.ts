export function parseDiscogsInput(input: string): string | null {
    // Match a full release URL
    const urlRegex = /discogs\.com\/release\/(\d+)/;
    const matchFromUrl = input.match(urlRegex);
    if (matchFromUrl) return matchFromUrl[1];

    // Match a release code like [r1618379]
    const codeRegex = /\[?r(\d+)]?/i;
    const matchFromCode = input.match(codeRegex);
    if (matchFromCode) return matchFromCode[1];

    return null;
}