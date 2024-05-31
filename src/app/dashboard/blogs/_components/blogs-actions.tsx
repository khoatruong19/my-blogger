import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LuListFilter } from 'react-icons/lu';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Input } from '@/components/ui/input';

const BlogActions = () => {
  return (
    <Tabs className='flex items-center'>
      <TabsList>
        <TabsTrigger value='all'>All</TabsTrigger>
        <TabsTrigger value='active'>Active</TabsTrigger>
        <TabsTrigger value='draft'>Draft</TabsTrigger>
        <TabsTrigger value='archived' className='hidden sm:flex'>
          Archived
        </TabsTrigger>
      </TabsList>
      <div className='ml-auto flex items-center gap-2'>
        <Input placeholder='Find blogs...' className='w-full min-w-[300px]' />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='sm' className='h-7 gap-1'>
              <LuListFilter className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size='sm' className='h-7 gap-1'>
          <AiOutlinePlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Blog</span>
        </Button>
      </div>
    </Tabs>
  );
};

export default BlogActions;
