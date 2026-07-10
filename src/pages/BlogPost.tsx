import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BlogPost = () => {
  const { slug } = useParams();

  // Mock data for blog posts based on slug
  const posts: Record<string, any> = {
    '10-tips-for-healthy-aging': {
      title: "10 Tips for Healthy Aging",
      date: "Oct 12, 2023",
      category: "Senior Health",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1200",
      content: `
        Healthy aging is about more than just physical health; it's about maintaining a sense of purpose and staying engaged with the world around you.
        
        Here are 10 tips to help you or your loved ones age gracefully:
        
        1. Stay Physically Active: Regular exercise helps maintain mobility and strength.
        2. Eat a Balanced Diet: Focus on whole foods, vegetables, and lean proteins.
        3. Keep Your Mind Sharp: Read, do puzzles, or learn a new skill.
        4. Stay Socially Connected: Maintain relationships with family and friends.
        5. Get Regular Check-ups: Preventative care is key to catching issues early.
        6. Manage Stress: Practice relaxation techniques like meditation or deep breathing.
        7. Get Enough Sleep: Quality sleep is essential for overall well-being.
        8. Stay Hydrated: Drink plenty of water throughout the day.
        9. Pursue Hobbies: Do things you enjoy and that bring you fulfillment.
        10. Ask for Help When Needed: Don't hesitate to seek support from professionals or loved ones.
      `
    },
    'understanding-memory-care': {
      title: "Understanding Memory Care",
      date: "Nov 05, 2023",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1581579439050-8dc81cb14b0b?auto=format&fit=crop&q=80&w=1200",
      content: `
        Memory care is a specialized type of support designed for individuals living with Alzheimer's disease, dementia, or other memory impairments. 
        
        It provides a safe, structured environment with staff trained to understand and meet the unique needs of those experiencing cognitive decline.

        Key benefits of memory care include:
        
        - Safety and Security: Secured environments to prevent wandering and ensure resident safety.
        - Specialized Staff: Caregivers trained in dementia care techniques and communication strategies.
        - Tailored Activities: Programs designed to stimulate cognitive function and promote engagement.
        - Supportive Environment: A calming and structured setting to reduce confusion and anxiety.
      `
    },
    'the-importance-of-companionship': {
      title: "The Importance of Companionship",
      date: "Dec 01, 2023",
      category: "Companionship",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
      content: `
        Companionship is a vital aspect of overall well-being, especially for older adults who may be more susceptible to isolation and loneliness.
        
        Regular social interaction can have profound effects on both physical and mental health.

        Benefits of companionship:

        - Improved Mental Health: Reduces feelings of loneliness, depression, and anxiety.
        - Enhanced Cognitive Function: Engaging in conversations and activities keeps the mind active.
        - Increased Physical Activity: Companions can encourage and participate in light exercise or walks.
        - Better Emotional Support: Having someone to talk to and share experiences with provides emotional comfort.
      `
    },
    'navigating-ndis-funding': {
      title: "Navigating NDIS Funding",
      date: "Jan 15, 2024",
      category: "NDIS Guide",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
      content: `
        The National Disability Insurance Scheme (NDIS) can be complex to navigate, but understanding your funding is crucial to getting the support you need.
        
        Here is a breakdown of the key funding categories:

        - Core Supports: Funding for everyday activities, such as personal care, transport, and community participation.
        - Capacity Building Supports: Funding for therapies, skill development, and employment support to help you achieve your goals.
        - Capital Supports: Funding for assistive technology, home modifications, and specialized disability accommodation (SDA).

        Working with a Support Coordinator or Plan Manager can help you make the most of your NDIS funding.
      `
    },
    'home-modifications-for-independence': {
      title: "Home Modifications for Independence",
      date: "Feb 02, 2024",
      category: "Independent Living",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      content: `
        Modifying your home can significantly improve safety and accessibility, allowing you or your loved ones to live independently for longer.
        
        Common home modifications include:

        - Grab Rails: Installing grab rails in bathrooms and along stairs for support and stability.
        - Ramps: Adding ramps for wheelchair or walker access at entryways.
        - Bathroom Modifications: Converting tubs to walk-in showers or adding shower chairs.
        - Improved Lighting: Increasing lighting in hallways and stairwells to prevent falls.
        - Non-Slip Flooring: Applying non-slip treatments or installing slip-resistant flooring in wet areas.
      `
    },
    'nutrition-for-older-adults': {
      title: "Nutrition for Older Adults",
      date: "Mar 10, 2024",
      category: "Diet & Nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      content: `
        As we age, our nutritional needs change. A balanced diet is essential for maintaining health, energy, and cognitive function.
        
        Key nutritional considerations for older adults:

        - Protein: Crucial for maintaining muscle mass and strength.
        - Calcium and Vitamin D: Important for bone health and preventing osteoporosis.
        - Fiber: Aids digestion and helps prevent constipation.
        - Hydration: Older adults may have a decreased sense of thirst, making hydration even more important.
        - Nutrient-Dense Foods: Focus on fruits, vegetables, whole grains, and lean proteins to get the most nutrients per calorie.
      `
    }
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-teal-500 hover:text-teal-600 font-medium">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8">
          <ArrowLeft className="w-5 h-5" /> Back to Blog
        </Link>
        
        <div className="mb-8">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
          <div className="text-gray-500 font-medium">{post.date}</div>
        </div>

        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-sm" />

        <div className="prose prose-lg prose-purple max-w-none text-gray-700">
          {post.content.split('\n\n').map((paragraph: string, idx: number) => (
            <p key={idx} className="mb-6 leading-relaxed whitespace-pre-line">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
