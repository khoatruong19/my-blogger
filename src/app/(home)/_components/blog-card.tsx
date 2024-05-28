import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { MdOutlineAccessTime } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const blogContainerVariants = cva('flex w-full items-start bg-accent rounded-3xl py-2 ', {
  variants: {
    layout: {
      default:
        'hover:bg-secondary-foreground hover:text-secondary transition-colors duration-200 ease-in-out',
      vertical: 'flex-col max-w-[350px] bg-transparent border-1 py-0 cursor-pointe shadow-md',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});

const headerVariants = cva('py-1.5', {
  variants: {
    layout: {
      default: 'w-fit pl-4',
      vertical: 'w-full p-0',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});

const imageVariants = cva('w-full relative overflow-hidden', {
  variants: {
    layout: {
      default: 'h-[150px] w-[150px] rounded-3xl',
      vertical: 'h-[200px] rounded-2xl',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});

const blogInfoVariants = cva('flex flex-col', {
  variants: {
    layout: {
      default: 'gap-3',
      vertical: 'gap-1.5',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});

type BlogCardProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof blogContainerVariants> & {
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
  layout,
}: BlogCardProps) => {
  const isLayoutVertial = layout === 'vertical';

  return (
    <Card className={cn(blogContainerVariants({ layout, className }))}>
      <CardHeader className={cn(headerVariants({ layout, className: headerClassname }))}>
        <div className={cn(imageVariants({ layout, className: imageClassname }))}>
          <Image alt='' src='https://statics.cdn.200lab.io/2023/06/interface-trong-golang-cach-dung-chinh-xac-2.jpg?width=500' fill />
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          'flex items-start justify-between gap-5 py-1 pl-0 pr-4 w-full',
          {
            'px-3 pb-3 pt-2': isLayoutVertial,
          },
          contentClassname
        )}
      >
        <div className='flex flex-col gap-6'>
          <div className={cn(blogInfoVariants({ layout }))}>
            <p className='font-extralight'>Tech</p>
            <h3
              className={cn('line-clamp-1 text-ellipsis text-lg font-semibold', {
                'line-clamp-2 hover:text-primary cursor-pointer': isLayoutVertial,
              })}
            >
              Google Colab là gì? Hướng dẫn sử dụng Google Colab cho người mới
            </h3>
            <p className='font-extralight'>
              by <span className='uppercase'>Khoa Truong</span>
            </p>
          </div>
          <div className={'flex items-center gap-2'}>
            <MdOutlineAccessTime className='h-[18px] w-[18px]' />
            <span className='text-xs font-thin'>2 hours ago</span>
          </div>
        </div>
        {!isLayoutVertial && (
          <div className={cn('flex flex-1 flex-col items-end gap-12')}>
            <Button variant={null} className='p-0 hover:text-white '>
              <BsThreeDotsVertical className='h-5 w-5' />
            </Button>
            <Button className='h-14 w-14 rounded-full bg-background pl-5 shadow-lg text-foreground'>
              <FaPlay className='h-6 w-6' />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogCard;
