
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const RoutesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const popularRoutes = [
    {
      id: 1,
      from: "New York",
      to: "Boston",
      price: 45,
      duration: "4h 30m",
      departures: 8,
    },
    {
      id: 2,
      from: "Washington DC",
      to: "Philadelphia",
      price: 35,
      duration: "3h 15m",
      departures: 12,
    },
    {
      id: 3,
      from: "Los Angeles",
      to: "San Francisco",
      price: 65,
      duration: "7h 45m",
      departures: 6,
    },
    {
      id: 4,
      from: "Chicago",
      to: "Detroit",
      price: 40,
      duration: "5h 20m",
      departures: 5,
    },
    {
      id: 5,
      from: "Seattle",
      to: "Portland",
      price: 30,
      duration: "3h 45m",
      departures: 7,
    },
    {
      id: 6,
      from: "Miami",
      to: "Orlando",
      price: 35,
      duration: "4h 10m",
      departures: 9,
    },
    {
      id: 7,
      from: "Atlanta",
      to: "Nashville",
      price: 40,
      duration: "4h 30m",
      departures: 6,
    },
    {
      id: 8,
      from: "Dallas",
      to: "Houston",
      price: 35,
      duration: "3h 45m",
      departures: 10,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">All Routes</h1>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Explore our extensive network of bus routes connecting major cities across the country.
              Comfortable rides, affordable prices, and convenient schedules.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRoutes.map((route) => (
                <div key={route.id} className="route-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium">{route.from} to {route.to}</h3>
                      <p className="text-muted-foreground text-sm">Daily departures: {route.departures}</p>
                    </div>
                    <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                      ${route.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{route.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span className="text-sm text-muted-foreground">Direct</span>
                    </div>
                  </div>
                  
                  <Link to={`/booking/${route.id}`}>
                    <Button className="w-full">View Schedule</Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoutesPage;
