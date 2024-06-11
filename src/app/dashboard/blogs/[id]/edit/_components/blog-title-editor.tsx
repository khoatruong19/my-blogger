import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type BlogTitleEditorProps = {
  title: string;
  className?: string;
  changeTitle: (value: string) => void;
};

const BlogTitleEditor = ({ title, className, changeTitle }: BlogTitleEditorProps) => {
  return (
    <div className={cn('', className)}>
      <Input
        className='h-14 border-none text-2xl font-bold'
        placeholder='Blog name...'
        value={title}
        onChange={(e) => changeTitle(e.target.value)}
      />
    </div>
  );
};

export default BlogTitleEditor;
