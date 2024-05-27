import BlogCard from './blog-card';

const AllBlogs = () => {
  return (
    <div className='w-full py-2'>
      <h2 className='mb-5 text-xl font-medium'>All Blogs</h2>
      <div className='flex flex-wrap gap-5'>
        <BlogCard layout='vertical' />
        <BlogCard layout='vertical' />
        <BlogCard layout='vertical' />
        <BlogCard layout='vertical' />
        <BlogCard layout='vertical' />
      </div>
    </div>
  );
};

export default AllBlogs;
