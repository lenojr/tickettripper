
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Route, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Sample bookings data
const bookingsData = [
  {
    id: "BK-123456",
    from: "New York",
    to: "Boston",
    date: "2023-10-15",
    departureTime: "08:30 AM",
    arrivalTime: "12:45 PM",
    passengersCount: 2,
    status: "upcoming",
    totalPrice: 90,
  },
  {
    id: "BK-789012",
    from: "Chicago",
    to: "Detroit",
    date: "2023-09-20",
    departureTime: "10:30 AM",
    arrivalTime: "03:00 PM",
    passengersCount: 1,
    status: "completed",
    totalPrice: 42,
  },
  {
    id: "BK-345678",
    from: "San Francisco",
    to: "Los Angeles",
    date: "2023-11-05",
    departureTime: "07:00 AM",
    arrivalTime: "01:15 PM",
    passengersCount: 3,
    status: "upcoming",
    totalPrice: 195,
  }
];

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState(bookingsData);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  const handleCancelBooking = (id: string) => {
    // In a real app, we would call an API to cancel the booking
    setBookings(bookings.filter(booking => booking.id !== id));
    toast.success("Booking successfully cancelled", {
      description: `Booking ${id} has been cancelled.`
    });
  };

  const filteredBookings = filter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === filter);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full mb-4">
              My Bookings
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Manage your trips
            </h1>
            <p className="text-muted-foreground">
              View, modify or cancel your bookings with VoyageBus
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-soft p-1 flex">
              <Button 
                variant={filter === "all" ? "default" : "ghost"}
                className={`rounded-full ${filter === "all" ? "" : "text-muted-foreground"}`}
                onClick={() => handleFilterChange("all")}
              >
                All Bookings
              </Button>
              <Button 
                variant={filter === "upcoming" ? "default" : "ghost"}
                className={`rounded-full ${filter === "upcoming" ? "" : "text-muted-foreground"}`}
                onClick={() => handleFilterChange("upcoming")}
              >
                Upcoming
              </Button>
              <Button 
                variant={filter === "completed" ? "default" : "ghost"}
                className={`rounded-full ${filter === "completed" ? "" : "text-muted-foreground"}`}
                onClick={() => handleFilterChange("completed")}
              >
                Completed
              </Button>
            </div>
          </div>
          
          {filteredBookings.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-4 text-5xl">🚌</div>
              <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
              <p className="text-muted-foreground mb-6">
                {filter === "all" 
                  ? "You don't have any bookings yet." 
                  : `You don't have any ${filter} bookings.`}
              </p>
              <Link to="/routes">
                <Button>Find a Bus</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6 mb-16">
              {filteredBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="route-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Route className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Booking #{booking.id}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === "upcoming" 
                        ? "bg-blue-100 text-primary" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {booking.status === "upcoming" ? "Upcoming" : "Completed"}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-1" />
                            <span className="font-bold">{booking.from}</span>
                          </div>
                          <div className="text-sm text-muted-foreground ml-5">
                            Departure: {booking.departureTime}
                          </div>
                        </div>
                        <div className="text-center px-3">
                          <span className="inline-block w-16 h-[1px] bg-muted"></span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-bold">{booking.to}</span>
                            <MapPin className="h-4 w-4 text-primary ml-1" />
                          </div>
                          <div className="text-sm text-muted-foreground ml-5">
                            Arrival: {booking.arrivalTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{formatDate(booking.date)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{booking.passengersCount} passenger{booking.passengersCount > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-4 gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground">Total price</span>
                      <div className="text-xl font-bold">${booking.totalPrice}</div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to={`/booking/${booking.id}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                      
                      {booking.status === "upcoming" && (
                        <Button 
                          variant="destructive"
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          Cancel Booking
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
