import { query } from './_generated/server';
import { v } from 'convex/values';
import { vCreateBlogArgs } from './types';
import { adminAuthMutation } from './utils';

export const getById = query({
  args: { blogId: v.id('blogs') },
  handler: async (ctx, args) => {
    const blog = await ctx.db.get(args.blogId);

    return blog;
  },
});

export const create = adminAuthMutation({
  args: vCreateBlogArgs,
  handler: async (ctx, args) => {
    await ctx.db.insert('blogs', {
      authorId: ctx.author._id,
      ...args,
      body: '',
      likes: [],
      status: 'in-progress',
    });
  },
});
