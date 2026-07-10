import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = [
    {
      title: "10 Tips for Healthy Aging",
      date: "Oct 12, 2023",
      category: "Senior Health",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=800",
      excerpt: "Discover the best practices and daily habits you can adopt to ensure your loved ones stay healthy and active."
    },
    {
      title: "Understanding Memory Care",
      date: "Nov 05, 2023",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1581579439050-8dc81cb14b0b?auto=format&fit=crop&q=80&w=800",
      excerpt: "Learn how to identify signs of cognitive decline and take proactive steps to support cognitive function."
    },
    {
      title: "The Importance of Companionship",
      date: "Dec 01, 2023",
      category: "Companionship",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      excerpt: "Regular social interaction can significantly improve quality of life. Here is why companionship matters."
    },
    {
      title: "Navigating NDIS Funding",
      date: "Jan 15, 2024",
      category: "NDIS Guide",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      excerpt: "A comprehensive guide to understanding your NDIS plan, funding categories, and how to maximize your support."
    },
    {
      title: "Home Modifications for Independence",
      date: "Feb 02, 2024",
      category: "Independent Living",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      excerpt: "Simple and effective home modifications that can dramatically improve safety and accessibility at home."
    },
    {
      title: "Nutrition for Older Adults",
      date: "Mar 10, 2024",
      category: "Diet & Nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      excerpt: "Expert advice on maintaining a balanced diet, essential nutrients for seniors, and easy-to-prepare meals."
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="text-center mb-16">
        <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Our Blog</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Aged Care News & Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest trends, tips, and news on elderly care.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-flex items-center gap-2">
                Read More <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
