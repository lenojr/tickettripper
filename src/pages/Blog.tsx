
import InfoPageLayout from "@/components/InfoPageLayout";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <InfoPageLayout 
      title="VoyageBus Blog" 
      subtitle="Travel tips, company updates, and stories from the road"
    >
      <div className="space-y-12">
        <article className="border-b pb-12">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzJTIwdHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
            alt="Top 10 Bus Travel Tips" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <span className="text-sm text-muted-foreground">July 12, 2023</span>
          <h2 className="text-2xl font-semibold mt-2 mb-4">Top 10 Bus Travel Tips for a Comfortable Journey</h2>
          <p className="mb-4">
            Whether you're a seasoned bus traveler or taking your first long-distance bus trip, 
            these tips will help ensure your journey is as comfortable and enjoyable as possible.
          </p>
          <Link to="/blog/bus-travel-tips" className="text-primary hover:underline">
            Continue reading →
          </Link>
        </article>
        
        <article className="border-b pb-12">
          <img 
            src="https://images.unsplash.com/photo-1596625820723-f0f81050a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYWQlMjB0cmlwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
            alt="Hidden Gems" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <span className="text-sm text-muted-foreground">June 28, 2023</span>
          <h2 className="text-2xl font-semibold mt-2 mb-4">5 Hidden Gems You Can Only Reach by Bus</h2>
          <p className="mb-4">
            Some of the most beautiful and interesting destinations aren't accessible by plane or train. 
            Discover these off-the-beaten-path locations that are perfect for your next bus adventure.
          </p>
          <Link to="/blog/hidden-gems" className="text-primary hover:underline">
            Continue reading →
          </Link>
        </article>
        
        <article className="border-b pb-12">
          <img 
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzdGFpbmFibGUlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
            alt="Sustainable Travel" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <span className="text-sm text-muted-foreground">May 15, 2023</span>
          <h2 className="text-2xl font-semibold mt-2 mb-4">Why Bus Travel is the Eco-Friendly Choice</h2>
          <p className="mb-4">
            Did you know that choosing bus travel can significantly reduce your carbon footprint? 
            Learn about the environmental benefits of bus travel and how VoyageBus is working to make 
            transportation more sustainable.
          </p>
          <Link to="/blog/eco-friendly-travel" className="text-primary hover:underline">
            Continue reading →
          </Link>
        </article>
      </div>
    </InfoPageLayout>
  );
};

export default Blog;
