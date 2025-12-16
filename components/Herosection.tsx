import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">Real-time parking availability</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Find & Reserve{" "}
            <span className="text-gradient">Parking</span>{" "}
            in Seconds
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Stop circling the block. Discover available spots, compare prices, and reserve your space before you even leave home.
          </p>

          {/* Search Box */}
          <div className="mx-auto max-w-3xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/80 p-4 shadow-card backdrop-blur-sm sm:flex-row sm:items-center sm:p-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Where do you want to park?"
                  className="h-14 border-0 bg-transparent pl-12 text-base focus:ring-0"
                />
              </div>
              <div className="relative flex-1">
                <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="datetime-local"
                  className="h-14 border-0 bg-transparent pl-12 text-base focus:ring-0"
                />
              </div>
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "50K+", label: "Parking Spots" },
              { value: "200+", label: "Cities" },
              { value: "98%", label: "Success Rate" },
              { value: "4.9", label: "User Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
