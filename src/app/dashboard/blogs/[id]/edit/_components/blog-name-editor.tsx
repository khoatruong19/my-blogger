import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
type BlogNameEditorProps = {
  className?: string;
};

const BlogNameEditor = ({ className }: BlogNameEditorProps) => {
  return (
    <div className={cn('', className)}>
      <Input className='h-14 border-none text-2xl font-bold' placeholder='Blog name...' />
    </div>
  );
};

export default BlogNameEditor;
