import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';
import { vBlogStatus } from './types';

export default defineSchema({
  authors: defineTable({
    userId: v.string(),
  }).index('by_userId', ['userId']),
  blogs: defineTable({
    authorId: v.string(),
    thumbnail: v.object({
      storageId: v.string(),
      url: v.string(),
    }),
    title: v.string(),
    body: v.string(),
    category: v.string(),
    likes: v.array(v.string()),
    status: vBlogStatus,
    publishedAt: v.optional(v.bytes()),
  }).searchIndex('search_title', {
    searchField: 'title',
  }),
});
