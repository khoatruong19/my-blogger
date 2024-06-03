import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const CreateBlogDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' className='h-7 gap-1'>
          <AiOutlinePlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Blog</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl'>Create new blog</DialogTitle>
          <DialogDescription className='py-3'>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Blog name...' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='category'>Category</Label>
                  <Select>
                    <SelectTrigger id='category'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='tech'>Tech</SelectItem>
                      <SelectItem value='life'>Life</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='grid w-full items-center gap-1.5'>
                  <Label htmlFor='thumbnail'>Thumbnail</Label>
                  <Input id='thumbnail' type='file' className='' accept='image/*' />
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type='submit' className='font-bold'>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogDialog;
