import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaRegImage } from 'react-icons/fa6';

type ThumbnailSelectorProps = {
  imageSrc: string;
};

const ThumbnailSelector = ({ imageSrc }: ThumbnailSelectorProps) => {
  return (
    <div className='group relative h-[500px] w-full'>
      <Image alt='image selector' src={imageSrc} fill />
      <div className='absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/20 group-hover:flex'>
        <Button className='gap-2 bg-background font-bold text-foreground'>
          <FaRegImage className='h-7 w-7' />
          <span>Change thumbnail</span>
        </Button>
      </div>
    </div>
  );
};

export default ThumbnailSelector;
