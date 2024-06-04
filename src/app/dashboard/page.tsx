import ItemsList from './_components/items-list';
import { auth } from '@clerk/nextjs/server';

export default function DashboardPage() {
  const { userId } = auth();
  console.log({ userId });
  return (
    <div className='flex flex-col gap-5'>
      <ItemsList />
    </div>
  );
}
