import { FcEditImage } from 'react-icons/fc';
import { FiGithub } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Header = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={`fixed z-10 w-full backdrop-filter transition duration-300 ease-in-out ${
        !top && 'bg-gray-800/20 shadow-lg backdrop-blur-sm'
      }`}
    >
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-gray-500/20 px-4 md:h-20'>
        <div className='flex cursor-pointer select-none items-center justify-center'>
          <FcEditImage className='h-6 w-6 sm:h-8 sm:w-8' />
          <span className='ml-2 text-lg font-bold sm:text-xl'>removebg</span>
        </div>
        <div className='flex items-center'>
          <a href='https://github.com/minhtungo' target='_blank'>
            <FiGithub className='h-5 w-5 hover:text-blue-500' />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
