import BlogActions from './_components/blogs-actions';
import BlogsTable from './_components/blogs-table';

export default function DashboardBlogsPage() {
  return (
    <div className='flex flex-col gap-5'>
      <BlogActions />
      <BlogsTable />
    </div>
  );
}
