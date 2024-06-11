'use client';

import { usePaginatedQuery } from 'convex/react';
import BlogActions from './_components/blogs-actions';
import BlogsTable from './_components/blogs-table';
import { api } from '@convex/_generated/api';

const INITIAL_NUM_ITEMS = 9;

export default function DashboardBlogsPage() {
  const { results } = usePaginatedQuery(api.blogs.list, {}, { initialNumItems: INITIAL_NUM_ITEMS });

  return (
    <div className='flex flex-col gap-5'>
      <BlogActions />
      <BlogsTable blogs={results} />
    </div>
  );
}
