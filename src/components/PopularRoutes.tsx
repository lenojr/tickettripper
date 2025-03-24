
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const POPULAR_ROUTES = [
  {
    id: 1,
    from: "New York",
    to: "Boston",
    price: "$45",
    duration: "4h 30m",
    departures: "Every hour",
    image: "bg-gradient-to-r from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    from: "Los Angeles",
    to: "San Francisco",
    price: "$55",
    duration: "6h 15m",
    departures: "Every 2 hours",
    image: "bg-gradient-to-r from-purple-500 to-pink-400"
  },
  {
    id: 3,
    from: "Chicago",
    to: "Detroit",
    price: "$35",
    duration: "5h",
    departures: "6 times daily",
    image: "bg-gradient-to-r from-amber-500 to-orange-400"
  },
  {
    id: 4,
    from: "Miami",
    to: "Orlando",
    price: "$40",
    duration: "3h 45m",
    departures: "8 times daily",
    image: "bg-gradient-to-r from-teal-500 to-green-400"
  }
];

export const PopularRoutes = () => {
  return (
    <section className="section page-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full mb-4">
            Travel Made Easy
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Popular Routes
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our most popular routes with frequent departures, competitive prices, and comfortable buses.
          </p>
        </div>
        <Link 
          to="/routes" 
          className="mt-6 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
        >
          View all routes
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {POPULAR_ROUTES.map((route, index) => (
          <Link 
            key={route.id} 
            to={`/search?from=${route.from}&to=${route.to}`}
            className="route-card hover-scale group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`h-32 rounded-xl mb-4 ${route.image} overflow-hidden relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white font-medium px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg">
                  ${route.price.replace("$", "")}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{route.from}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary mx-2" />
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{route.to}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{route.duration}</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div>{route.departures}</div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-lg font-semibold">{route.price}</span>
              <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                Book now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
