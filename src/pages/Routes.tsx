
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarDays, Map, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Sample route data
const routesData = [
  {
    id: "nyc-bos",
    from: "New York",
    to: "Boston",
    duration: "4h 15m",
    distance: "215 miles",
    price: 45,
    departureTime: "08:30 AM",
    popular: true,
  },
  {
    id: "nyc-dc",
    from: "New York",
    to: "Washington D.C.",
    duration: "4h 30m",
    distance: "225 miles",
    price: 40,
    departureTime: "09:15 AM",
    popular: true,
  },
  {
    id: "bos-phi",
    from: "Boston",
    to: "Philadelphia",
    duration: "5h 45m",
    distance: "310 miles",
    price: 55,
    departureTime: "07:45 AM",
    popular: false,
  },
  {
    id: "chi-det",
    from: "Chicago",
    to: "Detroit",
    duration: "4h 30m",
    distance: "280 miles",
    price: 42,
    departureTime: "10:30 AM",
    popular: false,
  },
  {
    id: "sf-la",
    from: "San Francisco",
    to: "Los Angeles",
    duration: "6h 15m",
    distance: "380 miles",
    price: 65,
    departureTime: "07:00 AM",
    popular: true,
  },
  {
    id: "atl-orl",
    from: "Atlanta",
    to: "Orlando",
    duration: "6h 30m",
    distance: "440 miles",
    price: 70,
    departureTime: "08:00 AM",
    popular: false,
  },
  {
    id: "den-slc",
    from: "Denver",
    to: "Salt Lake City",
    duration: "7h 45m",
    distance: "520 miles",
    price: 85,
    departureTime: "06:30 AM",
    popular: false,
  },
  {
    id: "sea-por",
    from: "Seattle",
    to: "Portland",
    duration: "3h 15m",
    distance: "175 miles",
    price: 35,
    departureTime: "09:45 AM",
    popular: true,
  },
];

const RoutesPage = () => {
  const [filteredRoutes, setFilteredRoutes] = useState(routesData);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
    
    if (filterType === "all") {
      setFilteredRoutes(routesData);
    } else if (filterType === "popular") {
      setFilteredRoutes(routesData.filter(route => route.popular));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full mb-4">
              All Routes
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Explore our bus routes
            </h1>
            <p className="text-muted-foreground">
              Discover comfortable and affordable bus travel between major cities with VoyageBus
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-soft p-1 flex">
              <Button 
                variant={filter === "all" ? "default" : "ghost"}
                className={`rounded-full ${filter === "all" ? "" : "text-muted-foreground"}`}
                onClick={() => handleFilterChange("all")}
              >
                All Routes
              </Button>
              <Button 
                variant={filter === "popular" ? "default" : "ghost"}
                className={`rounded-full ${filter === "popular" ? "" : "text-muted-foreground"}`}
                onClick={() => handleFilterChange("popular")}
              >
                Popular Routes
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredRoutes.map((route) => (
              <div 
                key={route.id} 
                className="route-card flex flex-col hover-scale"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Map className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Route Details</span>
                    </div>
                    {route.popular && (
                      <span className="px-2 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-1" />
                        <span className="font-bold">{route.from}</span>
                      </div>
                    </div>
                    <div className="text-center px-3">
                      <span className="inline-block w-16 h-[1px] bg-muted"></span>
                      <div className="text-xs text-muted-foreground mt-1">{route.distance}</div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-bold">{route.to}</span>
                        <MapPin className="h-4 w-4 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-6">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>Daily departures</span>
                    </div>
                    <div>
                      <span className="font-medium">{route.duration}</span> journey
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold">${route.price}</div>
                  </div>
                  
                  <Link to={`/booking/${route.id}`}>
                    <Button>View Schedules</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoutesPage;
