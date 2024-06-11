import { query } from './_generated/server';
import { ConvexError, v } from 'convex/values';
import { vCreateBlogArgs } from './types';
import { adminAuthMutation } from './utils';
import { Id } from './_generated/dataModel';
import { paginationOptsValidator } from 'convex/server';

export const getById = query({
  args: { blogId: v.string() },
  handler: async (ctx, args) => {
    const blog = await ctx.db.get(args.blogId as Id<'blogs'>);

    return blog;
  },
});

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const foo = await ctx.db.query('blogs').order('desc').paginate(args.paginationOpts);
    return foo;
  },
});

export const create = adminAuthMutation({
  args: vCreateBlogArgs,
  handler: async (ctx, args) => {
    const { storageId, ...info } = args;

    const url = (await ctx.storage.getUrl(storageId)) ?? '';
    if (!url) throw new ConvexError('get image url fail!');

    const blogId = await ctx.db.insert('blogs', {
      authorId: ctx.author._id,
      ...info,
      body: '',
      likes: [],
      status: 'in-progress',
      thumbnail: {
        storageId,
        url,
      },
    });

    return blogId;
  },
});
