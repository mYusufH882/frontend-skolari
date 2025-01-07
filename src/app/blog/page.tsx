import { getBlogPosts } from '@/lib/strapi';
import BlogPageComponent from '@/components/blog/BlogPageComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - HR System',
  description: 'Latest insights and updates about HR management and best practices'
};

export default async function BlogPage() {
  try {
    // Fetch blog posts at build time
    const response = await getBlogPosts();
    
    return <BlogPageComponent initialPosts={response.data || []} />;
  } catch (error) {
    console.error('Error fetching initial blog posts:', error);
    // Return component with empty posts if there's an error
    return <BlogPageComponent initialPosts={[]} />;
  }
}