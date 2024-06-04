import { v } from 'convex/values';
import { internalQuery } from './_generated/server';

export const getById = internalQuery({
  args: { authorId: v.string() },
  handler: async (ctx, args) => {
    const author = await ctx.db
      .query('authors')
      .withIndex('by_userId', (q) => q.eq('userId', args.authorId))
      .first();

    return author;
  },
});
