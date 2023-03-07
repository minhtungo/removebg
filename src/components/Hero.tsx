import { Typography, Button } from '@material-tailwind/react';
import { MdOutlineCloudUpload } from 'react-icons/md';

const Hero = () => {
  return (
    <section id='home' className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <Typography
          variant='h1'
          className='mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'
        >
          Remove Image Background
        </Typography>
        <div className='mx-auto max-w-3xl'>
          <Typography variant='p' className='text-center text-gray-400'>
            Remove image background in seconds. No need to install any software.
            Just upload your image and remove the background.
          </Typography>
          <Button
            className='mx-auto mt-3 flex items-center gap-2 bg-blue-700'
            size='sm'
            s
          >
            <MdOutlineCloudUpload className='h-5 w-5' /> Upload Image
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
