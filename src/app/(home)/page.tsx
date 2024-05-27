import AllBlogs from './_components/all-blogs';
import BlogSummarize from './_components/blog-summarize';
import Categories from './_components/categories';
import PopularBlogs from './_components/popular-blogs';

export default function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-stretch gap-7'>
        <div className='flex w-[60%] flex-col gap-7'>
          <Categories />
          <PopularBlogs />
        </div>
        <div className='flex-1'>
          <BlogSummarize/>
        </div>
      </div>
      <AllBlogs />
    </div>
  );
}
