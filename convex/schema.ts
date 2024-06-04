import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';
import { vBlogCategory } from './types';

export default defineSchema({
  authors: defineTable({
    userId: v.string(),
  }).index('by_userId', ['userId']),
  blogs: defineTable({
    authorId: v.string(),
    thumbnail: v.string(),
    title: v.string(),
    body: v.string(),
    category: v.string(),
    likes: v.array(v.string()),
    status: vBlogCategory,
    publishedAt: v.optional(v.bytes()),
  }).searchIndex('search_title', {
    searchField: 'title',
  }),
});
