import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

type TiptapNodeProps = {
  icon: IconType;
  isActive: boolean;
  className?: string;
  onClick: () => void;
};

const TiptapNode = ({ icon: Icon, isActive, className, onClick }: TiptapNodeProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn('border bg-accent text-foreground shadow-md', className, {
        'bg-primary': isActive,
      })}
    >
      <Icon className='h-5 w-5' />
    </Button>
  );
};

export default TiptapNode;
