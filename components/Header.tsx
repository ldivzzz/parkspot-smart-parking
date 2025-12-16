import { MapPin, Car, Clock, Navigation } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
            <Car className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">ParkSpot</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Find Parking
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
            Sign In
          </a>
          <button className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-glow">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
