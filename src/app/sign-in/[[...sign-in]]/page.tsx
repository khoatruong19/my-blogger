import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex pt-32 items-center justify-center'>
      <SignIn path='/sign-in' />
    </div>
  );
}
