import Categories from './_components/categories';
import PopularBlogs from './_components/popular-blogs';

export default function Home() {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-[60%] flex flex-col gap-7'>
        <Categories />
        <PopularBlogs />
      </div>
      <div className='flex-1'></div>
    </div>
  );
}
