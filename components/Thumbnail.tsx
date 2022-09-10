import Image from 'next/image';

import { Movie } from '../typings';

interface ThumbnailProps {
  movie: Movie;
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 thumbnail-gradient">
      <Image
        layout="fill"
        alt={movie.title || movie.name}
        className="rounded-sm object-cover md:rounded"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
      />
      <span className="absolute left-1 right-1 bottom-2 text-center text-shadow-md z-10">
        {movie.title || movie.name}
      </span>
    </div>
  );
}

export default Thumbnail;
