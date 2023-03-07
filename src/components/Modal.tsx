import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

export default function Modal({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className='relative flex min-h-[400px] flex-col items-center justify-center bg-[#0d0d0d] shadow-lg'
      >
        <DialogHeader className='absolute top-0 right-0'>
          <IoMdClose
            className='h-6 w-6 cursor-pointer text-gray-200'
            onClick={() => handleOpen()}
          />
        </DialogHeader>
        <DialogBody className='mx-auto w-full text-center'>
          <Button
            className='mx-auto mt-3 flex items-center gap-2 bg-blue-700'
            size='md'
            onClick={handleOpen}
          >
            <MdOutlineCloudUpload className='h-5 w-5' /> Upload Image
          </Button>
          <Typography variant='p' className='mt-2 text-center text-gray-400'>
            or drop a file here.
          </Typography>
        </DialogBody>
        <DialogFooter>{''}</DialogFooter>
      </Dialog>
    </>
  );
}
