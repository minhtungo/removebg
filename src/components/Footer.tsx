import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='p-4 sm:p-6'>
      <hr className='mb-6 border-b border-gray-500/20 sm:mx-auto' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-400 sm:text-center'>
          Inspired by{' '}
          <a
            href='https://www.remove.bg/'
            className='font-semibold hover:underline'
            target='_blank'
          >
            remove.bg
          </a>
        </span>
        <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
          <a href='https://github.com/minhtungo' target='_blank'>
            <FiGithub className='h-5 w-5 hover:text-blue-500' />
          </a>
          <span className='sr-only'>Github</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
