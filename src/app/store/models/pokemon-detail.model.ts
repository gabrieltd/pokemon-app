export interface PokemonDetail {
  id?: string;
  name?: string | null;
  height?: number | null;
  weight?: number | null;
  type?: string[];
  imgSprite?: string | null;
  imgArtwork?: string | null;
}
