import { describe, it, expect, vi, beforeAll } from "vitest";
import type { Mock } from "vitest";
import { fetchTracklist } from "./discogsService.ts";
import { Track } from "../types/discogs.ts";

const mockResponse: Track[] = [
  { position: '1', type_: 'track', title: 'Test Track', duration: '3:00', artists: [], extraartists: [] },
];

const fetchMock = vi.fn() as Mock;

beforeAll(() => {
  globalThis.fetch = fetchMock as unknown as typeof fetch;
});

describe('fetchTracklist', () => {
  it('should return tracklist on success', async () => {
    fetchMock.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ tracklist: mockResponse }),
      })
    );

    const result = await fetchTracklist('12345');
    expect(result).toEqual(mockResponse);
  });

  it('should throw on HTTP error', async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({ ok: false, status: 404 })
    );

    await expect(fetchTracklist('00000')).rejects.toThrow('HTTP error! status: 404');
  });
});
