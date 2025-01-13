import { notFound } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Tag, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

// Define interfaces
interface BlogPost {
  id: number;
  Title: string;
  Slug: string;
  Content: string;
  Excerpt: string;
  Category: string;
  Published: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface RelatedPost {
  id: number;
  Title: string;
  Slug: string;
  Excerpt: string;
  Published: string;
  Category: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?filters[Slug][$eq]=${slug}`
    );
    return response.data.data[0];
  } catch {  // Hapus parameter error
    return null;
  }
}

async function getRelatedPosts(category: string, currentSlug: string): Promise<RelatedPost[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?filters[Category][$contains]=${category}&filters[Slug][$ne]=${currentSlug}&pagination[limit]=3`
    );
    return response.data.data;
  } catch {  // Hapus parameter error
    return [];
  }
}

export default async function BlogDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.Category.split(',')[0], slug);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Cover Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <Image
            src="/images/merchandise/merchan-2.jpg"
            alt={post.Title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.Title}</h1>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.Published).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                5 menit baca
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link 
          href="/blog"
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Blog
        </Link>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4">
        {/* Author and Categories */}
        <div className="flex flex-wrap items-center justify-between py-6 border-y border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/testimonial/testi-1.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Coach Ryan</p>
              <p className="text-sm text-gray-500">Running Coach & Trainer</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {post.Category.split(',').map((category) => (
              <span
                key={category.trim()}
                className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm flex items-center"
              >
                <Tag className="w-4 h-4 mr-1" />
                {category.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          {post.Content}
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 mb-12">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900 dark:text-white flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Bagikan artikel ini
            </span>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.Slug}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="/api/placeholder/400/200"
                      alt={related.Title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
                        {related.Title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(related.Published).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Newsletter Section */}
      <section className="bg-red-500 text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Dapatkan Update Terbaru dari Skolari
          </h3>
          <p className="mb-6">
            Berlangganan newsletter kami untuk mendapatkan tips lari dan info event terbaru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 flex-grow"
            />
            <button className="px-8 py-3 bg-white text-red-500 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}