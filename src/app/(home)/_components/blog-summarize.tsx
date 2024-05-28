import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CiBookmark } from 'react-icons/ci';
import { MdNavigateNext } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const BlogSummarize = () => {
  return (
    <div className='flex h-full w-full flex-col justify-between rounded-3xl bg-accent'>
      <div className='p-6'>
        <div className='flex items-start justify-between gap-5'>
          <div className='flex items-center gap-3'>
            <Avatar className='h-12 w-12'>
              <AvatarImage
                src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/438275054_3763619813883504_8913566025353382913_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNn78psFVjoQ7kNvgFOP9WI&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCi34s6dEmd2q4NaA3LldWsHRISlOgptCI8rIqDXuV0dA&oe=6657E4A0'
                alt='@shadcn'
              />
              <AvatarFallback>KT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className='line-clamp-1 text-lg font-semibold'>
                Google Colab là gì? Hướng dẫn sử dụng Google Colab cho người mới
              </h3>
              <p className='font-extralight'>
                by <span className='uppercase'>Khoa Truong</span>
              </p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={null} className='p-0'>
                  <CiBookmark className='h-6 w-6' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className='font-semibold'>Add to bookmark</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className='mt-5 h-[360px] overflow-hidden text-ellipsis text-sm font-extralight'>
          Go, also known as Golang, is an open-source programming language created by Google engineers Robert
          Griesemer, Rob Pike, and Ken Thompson, and released in 2009. It was designed to enhance scalability
          and productivity, particularly in large-scale, server-side applications. Go emphasizes simplicity
          and efficiency. Its syntax is clean and concise, making the language easy to read and write. The
          type system is straightforward, ensuring safety and performance without unnecessary complexity. Go
          compiles directly to machine code, resulting in fast execution and efficient memory usage. A
          standout feature of Go is its strong support for concurrency through goroutines and channels.
          Goroutines are lightweight threads managed by the Go runtime, allowing the efficient execution of
          numerous concurrent tasks. Channels enable safe communication and synchronization between
          goroutines, simplifying concurrent programming. Go&apos;s robust standard library includes a wide
          array of built-in packages for tasks like web development, cryptography, and file I/O. The language
          also boasts a powerful toolchain with an efficient garbage collector, static analyzer, and built-in
          support for testing and profiling. Ideal for developing microservices, distributed systems, and
          cloud-based applications, Go is widely adopted by companies such as Google, Dropbox, and Uber, who
          leverage its performance and scalability in high-demand environments.
        </p>
      </div>

      <Button
        size='xl'
        className='group rounded-b-3xl rounded-tl-none rounded-tr-none bg-primary/70 font-semibold hover:bg-primary text-foreground'
      >
        <span className='text-lg'>Go read</span>
        <MdNavigateNext className='h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-2' />
      </Button>
    </div>
  );
};

export default BlogSummarize;
