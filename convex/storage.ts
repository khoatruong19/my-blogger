import { v } from 'convex/values';
import { adminAuthMutation } from './utils';
import { query } from './_generated/server';

export const generateUploadUrl = adminAuthMutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const getImageUrl = query({
  args: { imageId: v.id('_storage') },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.imageId);
  },
});
