import { getBlogPosts } from '@/lib/strapi';
import BlogPageComponent from '@/components/blog/BlogPageComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Skolari Running School',
  description: 'Tips lari, panduan latihan, nutrisi, dan cerita inspiratif dari komunitas pelari kami'
};

export default async function BlogPage() {
  try {
    // Fetch blog posts at build time
    const response = await getBlogPosts();
    
    if (!response || !response.data) {
      console.warn('Tidak ada data blog yang ditemukan');
      return <BlogPageComponent initialPosts={[]} />;
    }
    
    return <BlogPageComponent initialPosts={response.data} />;
  } catch (error) {
    console.error('Error saat mengambil data blog:', error);
    // Return component with empty posts if there's an error
    return <BlogPageComponent initialPosts={[]} />;
  }
}