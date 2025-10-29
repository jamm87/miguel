
import React from 'react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7]">
      <section className="bg-white">
        <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#3D4A2B] sm:text-5xl">
            Health Link Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#707070]">
            Análisis, tendencias y conocimiento experto sobre el comercio de alimentación y nutracéuticos entre España y Asia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                imageUrl={post.imageUrl}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;