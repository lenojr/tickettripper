import SearchForm from "./SearchForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary -z-10"></div>
      
      {/* Background circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-20 animate-pulse -z-10"></div>
      
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-6 animate-fade-in">
            The Simplest Way to Travel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Travel with comfort and ease
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Book bus tickets for your journey with just a few clicks. Fast, reliable, and comfortable travel at your fingertips.
          </p>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <SearchForm className="max-w-5xl mx-auto" />
        </div>
        
        <div className="flex items-center justify-center mt-12 space-x-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Stat figure="500+" label="Routes" />
          <div className="h-12 w-px bg-border"></div>
          <Stat figure="1M+" label="Happy Travelers" />
          <div className="h-12 w-px bg-border"></div>
          <Stat figure="4.9/5" label="Customer Rating" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ figure, label }: { figure: string; label: string }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-foreground">{figure}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default Hero;
