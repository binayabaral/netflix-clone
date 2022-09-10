import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const headerClassNames = classNames({
    'bg-[#141414]': isScrolled
  });

  return (
    <header className={headerClassNames}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src="/assets/logo.svg" alt="Netflix" width={100} height={30} className="cursor-pointer object-contain" />
        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden sm:inline h-6 w-6" />
        <Link href="/account">
          <div>
            <Image src="/assets/account.png" alt="account" className="cursor-pointer rounded" width={24} height={24} />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
