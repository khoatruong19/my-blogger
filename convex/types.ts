import { v } from 'convex/values';

export const vBlogStatus = v.union(
  v.literal('draft'),
  v.literal('in-progress'),
  v.literal('ready'),
  v.literal('published')
);

export const vCreateBlogArgs = {
  title: v.string(),
  category: v.string(),
  storageId: v.string(),
};
