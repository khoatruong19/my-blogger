import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MdSave } from 'react-icons/md';

const BlogSave = () => {
  return (
    <div className={cn('absolute top-[-2rem] right-0 gap-2 font-bold', {})}>
      <Button className='gap-2'>
        <MdSave />
        Save
      </Button>
    </div>
  );
};

export default BlogSave;
