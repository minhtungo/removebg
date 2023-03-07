import { FcEditImage } from 'react-icons/fc';

const Header = () => {
  return (
    <header className='fixed w-full z-10 transition duration-300 ease-in-out backdrop-filter'>
      <div className='max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20 border-b border-gray-500/20'>
        <div className='cursor-pointer flex items-center select-none'>
          <FcEditImage className='h-8 w-8' />
          <span className='text-2xl font-bold ml-2'>removebg</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
