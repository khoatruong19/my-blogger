'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { api } from '@convex/_generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { z } from 'zod';
import { BLOG_CATEGORIES } from '../../constants';

const createBlogFormSchema = z.object({
  title: z.string().min(1, 'Title is required!'),
  category: z.string(),
  // thumbnail: z
  //   .any()
  //   .refine((file) => {
  //     console.log({ file });
  //     return ACCEPTED_IMAGE_TYPES.includes(file?.type);
  //   }, 'Only .jpg, .jpeg, .png and .webp formats are supported.')
  //   .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`),
});

const CreateBlogDialog = () => {
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const createBlog = useMutation(api.blogs.create);
  const router = useRouter();

  const [thumbnailFile, setThumbnailFile] = useState<File | null>();

  const form = useForm<z.infer<typeof createBlogFormSchema>>({
    resolver: zodResolver(createBlogFormSchema),
    defaultValues: {
      title: '',
      category: BLOG_CATEGORIES[0].value,
    },
  });

  const onSubmit = async (values: z.infer<typeof createBlogFormSchema>) => {
    try {
      const postUrl = await generateUploadUrl();
      const result = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': thumbnailFile!.type },
        body: thumbnailFile,
      });
      const { storageId } = await result.json();

      const blogId = await createBlog({ ...values, storageId });

      router.push(`/dashboard/blogs/${blogId}/edit`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' className='h-7 gap-1'>
          <AiOutlinePlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Blog</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <DialogHeader>
              <DialogTitle className='text-center text-2xl'>Create new blog</DialogTitle>
              <DialogDescription className='py-3' asChild>
                <div className='grid w-full items-center gap-4'>
                  <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder='Blog title...' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='category'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger id='category'>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent position='popper'>
                              {BLOG_CATEGORIES.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Input
                        id='thumbnail'
                        type='file'
                        className=''
                        accept='image/*'
                        onChange={(e) => {
                          setThumbnailFile(e.target.files![0]);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type='submit' className='font-bold'>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogDialog;
