import { Car, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ParkSpot</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Making urban parking effortless with real-time data and smart reservations.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Find Parking", "How It Works", "Pricing", "Mobile App", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About Us", "Careers", "Blog", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 ParkSpot. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            hello@parkspot.app
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
