export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  title: string;
  overview: string;
  popularity: number;
  vote_count: number;
  media_type?: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  backdrop_path: string;
  release_date?: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
  original_language: string;
}

export interface Element {
  type: 'Bloopers' | 'Featurette' | 'Behind the Scenes' | 'Clip' | 'Trailer' | 'Teaser';
}
