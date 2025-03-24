
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, MapPin, Mail, Phone, Users } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  {
    question: "How early should I arrive before departure?",
    answer: "We recommend arriving at least 15-30 minutes before your scheduled departure time to ensure a smooth boarding process."
  },
  {
    question: "Can I change or cancel my booking?",
    answer: "Yes, you can change or cancel your booking up to 24 hours before departure. Changes may be subject to fare differences, and cancellations may incur a fee depending on your ticket type."
  },
  {
    question: "How much luggage can I bring?",
    answer: "Each passenger is allowed two pieces of luggage (one carry-on and one stored in the luggage compartment) free of charge. Additional bags may incur extra fees."
  },
  {
    question: "Are there restrooms on the bus?",
    answer: "Yes, all of our buses are equipped with clean, well-maintained restrooms for your convenience during the journey."
  },
  {
    question: "Is there Wi-Fi and power outlets on the bus?",
    answer: "Yes, we provide complimentary Wi-Fi and power outlets at every seat on all our buses to keep you connected throughout your journey."
  },
  {
    question: "What if my bus is delayed?",
    answer: "In case of delays, we will notify you via SMS and email. For significant delays, we may offer compensation according to our passenger rights policy."
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would submit the form data to an API
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully", {
      description: "We'll get back to you as soon as possible."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Get in touch with us
            </h1>
            <p className="text-muted-foreground">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-primary rounded-full mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries:</p>
                      <a href="mailto:info@voyagebus.com" className="text-primary hover:underline">
                        info@voyagebus.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-primary rounded-full mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-muted-foreground mb-1">Customer support:</p>
                      <a href="tel:+18001234567" className="text-primary hover:underline">
                        +1 (800) 123-4567
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday - Sunday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-primary rounded-full mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Head Office</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Transit Way<br />
                        New York, NY 10001<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number (optional)
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
