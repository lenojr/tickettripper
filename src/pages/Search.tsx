
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Bus, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";

// Mock data for search results
const generateSearchResults = (from: string, to: string) => {
  const baseTimes = ["07:00", "09:30", "12:00", "14:30", "16:00", "18:30", "20:00"];
  const durations = ["4h 30m", "5h", "4h 15m", "4h 45m", "5h 30m", "4h", "5h 15m"];
  const prices = [45, 50, 40, 55, 48, 42, 52];
  const busTypes = ["Express", "Luxury", "Standard", "Premium", "Deluxe"];
  
  return baseTimes.map((departureTime, idx) => ({
    id: idx + 1,
    from,
    to,
    departureTime,
    arrivalTime: calculateArrivalTime(departureTime, durations[idx]),
    duration: durations[idx],
    price: prices[idx],
    availableSeats: Math.floor(Math.random() * 30) + 5,
    busType: busTypes[idx % busTypes.length],
  }));
};

const calculateArrivalTime = (departure: string, duration: string) => {
  const [hours, minutes] = departure.split(":").map(Number);
  const [durationHours, durationMinutes] = duration.split("h ").map(val => {
    return parseInt(val.replace("m", ""));
  });
  
  let totalMinutes = hours * 60 + minutes + durationHours * 60 + (durationMinutes || 0);
  const arrivalHours = Math.floor(totalMinutes / 60) % 24;
  const arrivalMinutes = totalMinutes % 60;
  
  return `${String(arrivalHours).padStart(2, "0")}:${String(arrivalMinutes).padStart(2, "0")}`;
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fromCity = searchParams.get("from") || "";
  const toCity = searchParams.get("to") || "";
  const date = searchParams.get("date") || new Date().toISOString().split("T")[0];
  const passengers = searchParams.get("passengers") || "1";
  
  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setResults(generateSearchResults(fromCity, toCity));
      setLoading(false);
    }, 1000);
  }, [fromCity, toCity, date, passengers]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="page-container">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <div className="mb-10">
            <SearchForm />
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-display font-bold mb-2 flex items-center">
                {fromCity} <ArrowRight className="mx-3 h-5 w-5 text-primary" /> {toCity}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formattedDate}</span>
                <span className="mx-2">&middot;</span>
                <span>{passengers} {parseInt(passengers) === 1 ? 'Passenger' : 'Passengers'}</span>
              </div>
            </div>
            
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Sort by: Price
              </Button>
            </div>
          </div>
          
          <div className="mb-16">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4" />
                <p className="text-muted-foreground">Searching for the best buses...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4">
                {results.map((bus) => (
                  <div key={bus.id} className="route-card hover-scale">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-primary text-xs font-medium rounded-lg">
                            {bus.busType}
                          </span>
                          <span className="mx-2">&middot;</span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Bus className="h-4 w-4 mr-1" />
                            <span>{bus.availableSeats} seats available</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between md:justify-start md:space-x-16 mb-4">
                          <div>
                            <p className="text-xl font-semibold">{bus.departureTime}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{bus.from}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <div className="text-xs text-muted-foreground mb-1">{bus.duration}</div>
                            <div className="w-16 h-px bg-border relative">
                              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-xl font-semibold">{bus.arrivalTime}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{bus.to}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Duration: {bus.duration}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 md:mt-0 pl-0 md:pl-4 md:border-l border-border flex flex-col items-start md:items-center">
                        <p className="text-2xl font-bold text-primary mb-2">${bus.price}</p>
                        <Link 
                          to={`/booking/${bus.id}?from=${fromCity}&to=${toCity}&date=${date}&passengers=${passengers}&departure=${bus.departureTime}&price=${bus.price}`}
                          className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full md:w-auto text-center"
                        >
                          Select
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-blue-50/50 rounded-xl">
                <p className="text-2xl font-semibold mb-2">No buses found</p>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any buses matching your search criteria.
                </p>
                <Button>Modify Search</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
