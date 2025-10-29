
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, imageUrl, category, title, excerpt }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg group">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-[#C97B4E]">
            {category}
          </p>
          <Link to={`/blog/${slug}`} className="mt-2 block">
            <p className="text-xl font-semibold text-[#3D4A2B] group-hover:text-[#5A6C3E] transition-colors">{title}</p>
            <p className="mt-3 text-base text-[#707070]">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6">
          <Link to={`/blog/${slug}`} className="text-sm font-semibold text-[#5A6C3E] hover:text-[#3D4A2B]">
            Leer más &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;