import { describe, it, expect } from "vitest";
import {parseDiscogsInput} from "./inputParser.ts";

describe('parseDiscogsInput', () => {
  it('should parse release URL correctly', () => {
    const input = 'https://www.discogs.com/release/1618379-Various-CD-Collection-184';
    expect(parseDiscogsInput(input)).toBe('1618379');
  });

  it('should parse release code correctly', () => {
    const input = '[r1618379]';
    expect(parseDiscogsInput(input)).toBe('1618379');
  });

  it('should parse release code without brackets', () => {
    const input = 'r1618379';
    expect(parseDiscogsInput(input)).toBe('1618379');
  });

  it('should return null for invalid input', () => {
    const input = 'some random text';
    expect(parseDiscogsInput(input)).toBeNull();
  });
});