import { MutationCtx, QueryCtx, action, mutation } from './_generated/server';

import { customAction, customCtx, customMutation } from 'convex-helpers/server/customFunctions';
import { ConvexError } from 'convex/values';
import { internal } from './_generated/api';
import { Doc } from './_generated/dataModel';

export const adminAuthAction = customAction(
  action,
  customCtx(async (ctx): Promise<{ author: Doc<'authors'> }> => {
    const userId = (await ctx.auth.getUserIdentity())?.subject;

    if (!userId) {
      throw new ConvexError('must be logged in');
    }

    const author: Doc<'authors'> | null = await ctx.runQuery(internal.authors.getById, {
      authorId: userId,
    });

    if (!author) {
      throw new ConvexError('author not found');
    }

    return {
      author,
    };
  })
);

export const adminAuthMutation = customMutation(
  mutation,
  customCtx(async (ctx) => ({ author: await getAuthorOrThrow(ctx) }))
);

async function getAuthorOrThrow(ctx: QueryCtx | MutationCtx) {
  const userId = (await ctx.auth.getUserIdentity())?.subject;

  if (!userId) {
    throw new ConvexError('must be logged in');
  }

  const author = await ctx.db
    .query('authors')
    .withIndex('by_userId', (q) => q.eq('userId', userId))
    .first();

  if (!author) {
    throw new ConvexError('author not found');
  }

  return author;
}
