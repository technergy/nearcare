import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = [
    {
      title: "10 Tips for Healthy Aging",
      date: "Oct 12, 2023",
      category: "Senior Health",
      image: "https://images.pexels.com/photos/33768885/pexels-photo-33768885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Discover the best practices and daily habits you can adopt to ensure your loved ones stay healthy and active."
    },
    {
      title: "Understanding Memory Care",
      date: "Nov 05, 2023",
      category: "Wellness",
      image: "https://images.pexels.com/photos/8415703/pexels-photo-8415703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Learn how to identify signs of cognitive decline and take proactive steps to support cognitive function."
    },
    {
      title: "The Importance of Companionship",
      date: "Dec 01, 2023",
      category: "Companionship",
      image: "https://images.pexels.com/photos/7446778/pexels-photo-7446778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Regular social interaction can significantly improve quality of life. Here is why companionship matters."
    },
    {
      title: "Navigating NDIS Funding",
      date: "Jan 15, 2024",
      category: "NDIS Guide",
      image: "https://images.pexels.com/photos/6284841/pexels-photo-6284841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "A comprehensive guide to understanding your NDIS plan, funding categories, and how to maximize your support."
    },
    {
      title: "Home Modifications for Independence",
      date: "Feb 02, 2024",
      category: "Independent Living",
      image: "https://images.pexels.com/photos/7446613/pexels-photo-7446613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Simple and effective home modifications that can dramatically improve safety and accessibility at home."
    },
    {
      title: "Nutrition for Older Adults",
      date: "Mar 10, 2024",
      category: "Diet & Nutrition",
      image: "https://images.pexels.com/photos/7698538/pexels-photo-7698538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Expert advice on maintaining a balanced diet, essential nutrients for seniors, and easy-to-prepare meals."
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="text-center mb-16">
        <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Our Blog</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">NDIS News & Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest trends, tips, and news on NDIS support.</p>
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
