
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-primary font-display font-bold text-xl tracking-tight"
        >
          Lenojr
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/routes">Routes</NavLink>
          <NavLink to="/bookings">My Bookings</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link 
            to="/login" 
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-foreground/80 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </Link>
  );
};

export default Navbar;
