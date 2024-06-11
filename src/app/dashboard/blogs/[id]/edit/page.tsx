'use client';

import { api } from '@convex/_generated/api';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import BlogTitleEditor from './_components/blog-title-editor';
import BlogSave from './_components/blog-save';
import ImageSelector from './_components/thumbnail-selector';
import TiptapEditor from './_components/tiptap-editor';
import { useEffect, useState } from 'react';
import { Id } from '@convex/_generated/dataModel';

export default function BlogEditorPage() {
  const params = useParams<{ id: Id<'blogs'> }>();
  const blogId = params.id;
  const blog = useQuery(api.blogs.getById, {
    blogId: blogId,
  });

  const [blogTitle, setBlogTitle] = useState('');

  const handleChangeTitle = (value: string) => setBlogTitle(value);

  useEffect(() => {
    if (!blog) return;

    setBlogTitle(blog.title);
  }, [blog]);

  if (!blog) return null;

  return (
    <div className='relative mx-auto flex max-w-[80%] flex-col py-5'>
      <ImageSelector imageSrc={blog.thumbnail.url} />
      <BlogTitleEditor title={blogTitle} changeTitle={handleChangeTitle} className='mt-4' />
      <TiptapEditor />
      <BlogSave />
    </div>
  );
}
