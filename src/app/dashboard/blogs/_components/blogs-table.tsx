import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import BlogsPagination from './blogs-pagination';
import Link from 'next/link';

const BlogsTable = () => {
  return (
    <Card className='border-none'>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='hidden w-[100px] sm:table-cell'>
                <span className='sr-only'>Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Likes</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead className='hidden md:table-cell'>Created at</TableHead>
              <TableHead className='hidden md:table-cell'>Published at</TableHead>
              <TableHead>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(10).fill(0).map((_, idx) => (
              <TableRow key={idx}>
                <TableCell className='hidden sm:table-cell'>
                  <Image
                    alt='Product image'
                    className='aspect-square rounded-md object-cover'
                    height='64'
                    src='https://statics.cdn.200lab.io/2023/06/interface-trong-golang-cach-dung-chinh-xac-2.jpg?width=500'
                    width='64'
                  />
                </TableCell>
                <TableCell className='font-medium'>Golang Interface</TableCell>
                <TableCell>
                  <Badge variant='outline'>Draft</Badge>
                </TableCell>
                <TableCell>10</TableCell>
                <TableCell>2</TableCell>
                <TableCell className='hidden md:table-cell'>2023-07-12 10:42 AM</TableCell>
                <TableCell className='hidden md:table-cell'>2023-07-12 10:42 AM</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup='true' size='icon' variant='ghost'>
                        <HiOutlineDotsHorizontal className='h-4 w-4' />
                        <span className='sr-only'>Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/blogs/123456/edit`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className='h-fit justify-between'>
        <div className='text-xs text-muted-foreground'>
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
        <BlogsPagination />
      </CardFooter>
    </Card>
  );
};

export default BlogsTable;
