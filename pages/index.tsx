import Header from "@/components/Header"
import HeroSection from "@/components/Herosection"
import ParkingList from "@/components/Parkinglist"
import FeaturesSection from "@/components/Featuresection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ParkingList />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

