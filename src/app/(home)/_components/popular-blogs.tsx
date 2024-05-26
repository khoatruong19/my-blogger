import BlogCard from './blog-card';

const PopularBlogs = () => {
  return (
    <div className='w-full'>
      <h2 className='mb-5 text-xl font-medium'>Popular Blogs</h2>
      <div className='flex flex-col gap-2'>
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default PopularBlogs;
