
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  seatNumber: string;
  status: "upcoming" | "completed" | "cancelled";
}

const MyBookings = () => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call
    setTimeout(() => {
      const mockBookings: Booking[] = [
        {
          id: "BK-12345",
          from: "New York",
          to: "Boston",
          date: "May 28, 2023",
          departureTime: "10:00 AM",
          arrivalTime: "2:30 PM",
          seatNumber: "23A",
          status: "upcoming",
        },
        {
          id: "BK-12346",
          from: "Boston",
          to: "New York",
          date: "June 3, 2023",
          departureTime: "3:15 PM",
          arrivalTime: "7:45 PM",
          seatNumber: "15B",
          status: "upcoming",
        },
        {
          id: "BK-12347",
          from: "Washington DC",
          to: "Philadelphia",
          date: "April 15, 2023",
          departureTime: "9:30 AM",
          arrivalTime: "12:45 PM",
          seatNumber: "8C",
          status: "completed",
        },
      ];
      
      setBookings(mockBookings);
      setIsLoading(false);
    }, 1000);
  }, []);

  const cancelBooking = (id: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: "cancelled" as const } : booking
    ));
    
    toast({
      title: "Booking cancelled",
      description: `Booking ${id} has been cancelled successfully.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">My Bookings</h1>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Manage your trips and view your upcoming and past journeys with LenojrBus.
            </p>
            
            {isLoading ? (
              <div className="text-center py-16">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading your bookings...</p>
              </div>
            ) : (
              <>
                {bookings.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl shadow-soft max-w-lg mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h2 className="text-2xl font-medium mb-2">No bookings found</h2>
                    <p className="text-muted-foreground mb-6">You haven't made any bookings yet.</p>
                    <Link to="/routes">
                      <Button>Browse Routes</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div 
                        key={booking.id} 
                        className={`bg-white rounded-2xl shadow-soft p-6 transition-all ${
                          booking.status === "cancelled" ? "opacity-60" : ""
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium">{booking.from} to {booking.to}</h3>
                              <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                                booking.status === "upcoming" ? "bg-green-100 text-green-800" : 
                                booking.status === "completed" ? "bg-blue-100 text-blue-800" : 
                                "bg-red-100 text-red-800"
                              }`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <p className="text-sm font-medium">{booking.date}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Departure</p>
                            <p className="font-medium">{booking.departureTime}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Arrival</p>
                            <p className="font-medium">{booking.arrivalTime}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Seat</p>
                            <p className="font-medium">{booking.seatNumber}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {booking.status === "upcoming" && (
                            <>
                              <Button size="sm" variant="outline">View E-Ticket</Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-destructive hover:text-destructive"
                                onClick={() => cancelBooking(booking.id)}
                              >
                                Cancel Booking
                              </Button>
                            </>
                          )}
                          {booking.status === "completed" && (
                            <Button size="sm" variant="outline">Book Again</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default MyBookings;
