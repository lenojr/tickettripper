
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const SearchForm = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [passengers, setPassengers] = useState("1");

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?from=${fromCity}&to=${toCity}&date=${date}&passengers=${passengers}`);
  };

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="glassmorphism rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="fromCity" className="text-sm font-medium">
            From
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="fromCity"
              placeholder="Departure city"
              className="pl-9 h-12"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="toCity" className="text-sm font-medium">
            To
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="toCity"
              placeholder="Arrival city"
              className="pl-9 h-12"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-medium">
            When
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="date"
              type="date"
              className="pl-9 h-12"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatDate(new Date())}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-end space-y-2">
          <Label htmlFor="passengers" className="text-sm font-medium">
            Passengers
          </Label>
          <div className="flex space-x-2">
            <Select value={passengers} onValueChange={setPassengers}>
              <SelectTrigger className="h-12 flex-1">
                <SelectValue placeholder="Passengers" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Passenger" : "Passengers"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button type="submit" className="h-12 px-8 bg-primary hover:bg-primary/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
