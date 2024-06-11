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
import { Doc } from '@convex/_generated/dataModel';
import { format } from 'date-fns';
import { getBlogStatus } from '@/utils/date';

type BlogsTableProps = {
  blogs: Doc<'blogs'>[];
};

const BlogsTable = ({ blogs }: BlogsTableProps) => {
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
            {blogs.map((blog) => {
              const status = getBlogStatus(blog.status);
              return (
                <TableRow key={blog._id}>
                  <TableCell className='hidden sm:table-cell'>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src={blog.thumbnail.url}
                      width='64'
                    />
                  </TableCell>
                  <TableCell className='font-medium'>{blog.title}</TableCell>
                  <TableCell>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {format(new Date(blog._creationTime), 'MM-dd-yyyy p')}
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {blog.publishedAt ? (
                      format(new Date(String(blog.publishedAt)), 'MM-dd-yyyy p')
                    ) : (
                      <Badge variant='destructive'>Not yet</Badge>
                    )}
                  </TableCell>
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
                          <Link href={`/dashboard/blogs/${blog._id}/edit`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
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
