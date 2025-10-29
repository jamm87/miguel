
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-[#3D4A2B]">Post no encontrado</h1>
        <p className="mt-4 text-[#707070]">El artículo que busca no existe o ha sido movido.</p>
        <div className="mt-6">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-[#5A6C3E] text-white font-bold rounded-lg hover:bg-[#3D4A2B] transition-colors"
          >
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-base font-semibold text-[#C97B4E] uppercase tracking-wide">{post.category}</p>
            <h1 className="mt-2 block text-3xl font-extrabold tracking-tight text-[#3D4A2B] sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">&middot;</span>
              <span>{post.author}</span>
            </div>
          </div>

          <figure className="mt-12">
            <img className="w-full rounded-lg object-cover aspect-video" src={post.imageUrl} alt={post.title} />
          </figure>

          <div className="mt-12 prose prose-lg lg:prose-xl text-[#2C2C2C] max-w-none prose-h2:text-[#3D4A2B] prose-a:text-[#5A6C3E] prose-strong:text-[#3D4A2B]">
            {post.content}
          </div>
          
          <div className="mt-16 text-center">
            <Link
                to="/blog"
                className="inline-block px-8 py-3 bg-[#5A6C3E] text-white font-bold rounded-lg hover:bg-[#3D4A2B] transition-colors duration-300"
            >
                &larr; Volver a todos los artículos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;