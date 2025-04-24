export type Track = {
  position: string;
  type_: string;
  title: string;
  duration: string;
  artists?: Artist[];
  extraartists?: Artist[];
}

export type Artist = {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}