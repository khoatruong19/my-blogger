import AllBlogs from './_components/all-blogs';
import Categories from './_components/categories';
import PopularBlogs from './_components/popular-blogs';

export default function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-3'>
        <div className='flex w-[60%] flex-col gap-7'>
          <Categories />
          <PopularBlogs />
        </div>
        <div className='flex-1'></div>
      </div>
      <AllBlogs />
    </div>
  );
}
