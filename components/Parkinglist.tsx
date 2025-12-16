import { MapPin, Navigation, Clock, DollarSign, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ParkingSpot {
  id: string;
  name: string;
  address: string;
  distance: string;
  walkTime: string;
  price: string;
  priceUnit: string;
  available: number;
  total: number;
  status: "available" | "limited" | "full";
  features: string[];
}

const parkingSpots: ParkingSpot[] = [
  {
    id: "1",
    name: "Central Station Garage",
    address: "123 Main Street, Downtown",
    distance: "0.2 mi",
    walkTime: "4 min walk",
    price: "$3.50",
    priceUnit: "/hr",
    available: 45,
    total: 120,
    status: "available",
    features: ["Covered", "EV Charging", "24/7"],
  },
  {
    id: "2",
    name: "Harbor View Parking",
    address: "456 Ocean Drive, Waterfront",
    distance: "0.4 mi",
    walkTime: "8 min walk",
    price: "$2.00",
    priceUnit: "/hr",
    available: 12,
    total: 80,
    status: "limited",
    features: ["Open Air", "Security"],
  },
  {
    id: "3",
    name: "Tech Hub Garage",
    address: "789 Innovation Blvd",
    distance: "0.3 mi",
    walkTime: "6 min walk",
    price: "$4.00",
    priceUnit: "/hr",
    available: 78,
    total: 200,
    status: "available",
    features: ["Covered", "EV Charging", "Valet"],
  },
  {
    id: "4",
    name: "Market Square Lot",
    address: "321 Commerce Way",
    distance: "0.5 mi",
    walkTime: "10 min walk",
    price: "$1.50",
    priceUnit: "/hr",
    available: 3,
    total: 50,
    status: "limited",
    features: ["Open Air", "Compact Only"],
  },
  {
    id: "5",
    name: "City Center Underground",
    address: "555 Center Plaza",
    distance: "0.1 mi",
    walkTime: "2 min walk",
    price: "$5.00",
    priceUnit: "/hr",
    available: 0,
    total: 150,
    status: "full",
    features: ["Covered", "Premium", "Valet"],
  },
  {
    id: "6",
    name: "Park Avenue Garage",
    address: "888 Park Avenue",
    distance: "0.6 mi",
    walkTime: "12 min walk",
    price: "$2.50",
    priceUnit: "/hr",
    available: 92,
    total: 180,
    status: "available",
    features: ["Covered", "Monthly Pass"],
  },
];

const ParkingSpotCard = ({ spot }: { spot: ParkingSpot }) => {
  const occupancyPercent = ((spot.total - spot.available) / spot.total) * 100;

  return (
    <Card className="group hover:border-primary/50 hover:shadow-glow cursor-pointer">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-foreground truncate">{spot.name}</h3>
              <Badge variant={spot.status}>
                {spot.status === "available" ? "Available" : spot.status === "limited" ? "Limited" : "Full"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {spot.address}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {spot.features.map((feature) => (
                <span key={feature} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {feature}
                </span>
              ))}
            </div>

            {/* Availability Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{spot.available} spots left</span>
                <span className="text-muted-foreground">{Math.round(occupancyPercent)}% full</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    spot.status === "available"
                      ? "bg-accent"
                      : spot.status === "limited"
                      ? "bg-warning"
                      : "bg-destructive"
                  }`}
                  style={{ width: `${occupancyPercent}%` }}
                />
              </div>
            </div>

            {/* Info row */}
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Navigation className="h-4 w-4" />
                {spot.distance}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {spot.walkTime}
              </span>
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient">{spot.price}</div>
              <div className="text-xs text-muted-foreground">{spot.priceUnit}</div>
            </div>
            <Button
              variant={spot.status === "full" ? "outline" : "default"}
              size="sm"
              disabled={spot.status === "full"}
            >
              {spot.status === "full" ? "Notify Me" : "Reserve"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ParkingList = () => {
  const [filter, setFilter] = useState<"all" | "available" | "limited">("all");

  const filteredSpots = parkingSpots.filter((spot) => {
    if (filter === "all") return true;
    if (filter === "available") return spot.status === "available";
    if (filter === "limited") return spot.status !== "full";
    return true;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Nearby Parking
            </h2>
            <p className="mt-2 text-muted-foreground">
              {filteredSpots.length} spots found near your destination
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {[
              { value: "all", label: "All Spots" },
              { value: "available", label: "Available" },
              { value: "limited", label: "Low Availability" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as typeof filter)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  filter === option.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpots.map((spot, index) => (
            <div
              key={spot.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ParkingSpotCard spot={spot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParkingList;
