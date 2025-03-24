
import { useState } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bus, Calendar, Clock, CreditCard, Check, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Booking = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const fromCity = searchParams.get("from") || "";
  const toCity = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const passengers = parseInt(searchParams.get("passengers") || "1");
  const departureTime = searchParams.get("departure") || "";
  const price = searchParams.get("price") || "0";
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    if (step === 1) {
      // Validate passenger details
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast.error("Please fill in all passenger details");
        return;
      }
      
      if (!formData.email.includes('@')) {
        toast.error("Please enter a valid email address");
        return;
      }
    }
    
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking completion
    toast.success("Booking successful! Your tickets have been sent to your email.");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  
  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  // Calculate total price
  const totalPrice = parseInt(price) * passengers;
  
  // Calculate arrival time (mock)
  const calculateArrivalTime = (departure: string) => {
    const [hours, minutes] = departure.split(":").map(Number);
    let arrivalHours = hours + 4; // Assuming 4 hour trip
    let arrivalMinutes = minutes + 30; // plus 30 minutes
    
    if (arrivalMinutes >= 60) {
      arrivalHours += 1;
      arrivalMinutes -= 60;
    }
    
    arrivalHours = arrivalHours % 24; // Handle day change
    
    return `${String(arrivalHours).padStart(2, "0")}:${String(arrivalMinutes).padStart(2, "0")}`;
  };
  
  const arrivalTime = calculateArrivalTime(departureTime);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <Link to={`/search?from=${fromCity}&to=${toCity}&date=${date}&passengers=${passengers}`} className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to search results
          </Link>
          
          {/* Booking progress */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Details</span>
              </div>
              
              <div className={`w-16 h-0.5 mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
              
              <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
              
              <div className={`w-16 h-0.5 mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
              
              <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Confirmation</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="bg-white rounded-2xl shadow-soft p-8 animate-fade-in">
                    <h2 className="text-2xl font-display font-bold mb-6">Passenger Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                    
                    {passengers > 1 && (
                      <div className="mb-8">
                        <h3 className="font-medium mb-4">Additional Passengers</h3>
                        <p className="text-muted-foreground mb-4">
                          We'll need details for all {passengers} passengers. You can add them now or later through your booking reference.
                        </p>
                        
                        {Array.from({ length: passengers - 1 }).map((_, index) => (
                          <div key={index} className="p-4 bg-blue-50/50 rounded-lg mb-4">
                            <p className="font-medium mb-2">Passenger {index + 2}</p>
                            <p className="text-muted-foreground text-sm">
                              Add details now or complete later
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="px-8"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="bg-white rounded-2xl shadow-soft p-8 animate-fade-in">
                    <h2 className="text-2xl font-display font-bold mb-6">Payment Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="md:col-span-2">
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input 
                          id="nameOnCard"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="**** **** **** ****"
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input 
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="***"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="px-8"
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="bg-white rounded-2xl shadow-soft p-8 animate-fade-in">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-display font-bold mb-2">Booking Confirmed!</h2>
                      <p className="text-muted-foreground">
                        Your booking has been confirmed. A confirmation email has been sent to {formData.email}.
                      </p>
                    </div>
                    
                    <div className="border border-border rounded-xl p-6 mb-8">
                      <h3 className="text-lg font-medium mb-4">Booking Details</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Booking Reference</span>
                          <span className="font-medium">BUS-{id}-{Math.floor(Math.random() * 10000)}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Route</span>
                          <span className="font-medium">{fromCity} → {toCity}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Date</span>
                          <span className="font-medium">{formattedDate}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Departure</span>
                          <span className="font-medium">{departureTime}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Arrival</span>
                          <span className="font-medium">{arrivalTime}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4 border-b border-border">
                          <span className="text-muted-foreground">Passengers</span>
                          <span className="font-medium">{passengers}</span>
                        </div>
                        
                        <div className="flex justify-between pb-4">
                          <span className="text-muted-foreground">Total Paid</span>
                          <span className="font-medium text-primary">${totalPrice}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                      <Button 
                        type="button" 
                        className="flex-1"
                        variant="outline"
                        onClick={() => window.print()}
                      >
                        Download Ticket
                      </Button>
                      
                      <Button 
                        type="button" 
                        className="flex-1"
                        onClick={() => navigate("/")}
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Trip Summary</h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <span className="text-lg font-medium">{fromCity}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{departureTime}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="text-primary" />
                  
                  <div className="space-y-1 text-right">
                    <span className="text-lg font-medium">{toCity}</span>
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{arrivalTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formattedDate}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Bus className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Express Bus</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{passengers} {passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Ticket price</span>
                    <span>${price} × {passengers}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Booking fee</span>
                    <span>$0</span>
                  </div>
                  
                  <div className="flex justify-between font-medium text-lg pt-4 border-t border-border mt-4">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
