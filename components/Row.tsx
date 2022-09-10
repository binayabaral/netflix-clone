import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

import { Movie } from '../typings';
import Thumbnail from './Thumbnail';

interface RowProps {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });

      if (scrollTo === 0) {
        setIsMoved(false);
      }
    }
  };

  const leftChevronClassNames = classNames('row-chevron-icon left-2', {
    hidden: !isMoved
  });

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={leftChevronClassNames} onClick={() => handleClick('left')} />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="row-chevron-icon right-2" onClick={() => handleClick('right')} />
      </div>
    </div>
  );
}

export default Row;
