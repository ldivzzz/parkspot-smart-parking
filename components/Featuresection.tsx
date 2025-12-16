import { Clock, CreditCard, Shield, Smartphone, MapPin, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Live availability data updated every 30 seconds from sensors across the city.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Compare rates instantly. No hidden fees, no surprises at the gate.",
  },
  {
    icon: Zap,
    title: "Instant Reservations",
    description: "Reserve your spot in seconds. Your space waits for you.",
  },
  {
    icon: MapPin,
    title: "Smart Navigation",
    description: "Get turn-by-turn directions to your reserved spot.",
  },
  {
    icon: Shield,
    title: "Guaranteed Spot",
    description: "Your reservation is guaranteed. If unavailable, we'll find you an alternative.",
  },
  {
    icon: Smartphone,
    title: "Digital Access",
    description: "Use your phone as your ticket. Just scan and enter.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
            Why Choose <span className="text-gradient">ParkSpot</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're revolutionizing urban parking with smart technology and real-time data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
