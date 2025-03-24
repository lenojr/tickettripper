
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularRoutes />
        
        {/* Why Choose Us Section */}
        <section className="section page-container bg-blue-50/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              The smart way to travel
            </h2>
            <p className="text-muted-foreground">
              Experience the difference with our premium bus service, designed with your comfort and convenience in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Comfort Guaranteed"
              description="Spacious seating, climate control, and amenities designed for your comfort during the journey."
              emoji="✨"
            />
            <FeatureCard 
              title="Easy Booking"
              description="Book your tickets in minutes with our streamlined booking process and user-friendly platform."
              emoji="🎫"
            />
            <FeatureCard 
              title="Safe & Reliable"
              description="Safety is our priority with professional drivers, well-maintained buses, and timely departures."
              emoji="🔒"
            />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section page-container">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready for your next adventure?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who choose us for their journey. Experience comfort, reliability, and excellent service.
            </p>
            <a
              href="#search"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Book Your Trip Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, description, emoji }: { title: string; description: string; emoji: string }) => (
  <div className="bg-white rounded-2xl p-8 shadow-soft text-center hover-scale">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-6 text-2xl">
      {emoji}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
