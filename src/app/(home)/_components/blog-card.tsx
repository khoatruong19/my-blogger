import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { MdOutlineAccessTime } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type BlogCardProps = {
  className?: string;
  headerClassname?: string;
  imageClassname?: string;
  contentClassname?: string;
};

const BlogCard = ({
  className = '',
  headerClassname = '',
  imageClassname = '',
  contentClassname = '',
}: BlogCardProps) => {
  return (
    <Card
      className={cn(
        'flex w-full items-start rounded-3xl bg-accent py-2 transition-colors duration-300 ease-in-out hover:bg-destructive/70',
        className
      )}
    >
      <CardHeader className={cn('py-1.5 pl-4', headerClassname)}>
        <div className={cn('relative h-[150px] w-[150px] overflow-hidden rounded-3xl', imageClassname)}>
          <Image alt='' src='https://statics.cdn.200lab.io/2024/01/Blog50.jpg?width=500' fill />
        </div>
      </CardHeader>
      <CardContent className={cn('flex items-start justify-between gap-5 py-1 pl-0 pr-4', contentClassname)}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <p className='font-extralight'>Technical</p>
            <h3 className='line-clamp-1 text-ellipsis text-lg font-semibold'>
              Google Colab là gì? Hướng dẫn sử dụng Google Colab cho người mới dẫn sử dụng Google Colab cho
              người mới
            </h3>
            <p className='font-extralight'>
              by <span className='uppercase'>Khoa Truong</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <MdOutlineAccessTime className='h-[18px] w-[18px]' />
            <span className='text-xs font-thin'>2 hours ago</span>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-end gap-12'>
          <Button variant={null} className='p-0 hover:text-white '>
            <BsThreeDotsVertical className='h-5 w-5' />
          </Button>
          <Button className='h-14 w-14 rounded-full bg-white pl-5 shadow-lg'>
            <FaPlay className='h-6 w-6' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
