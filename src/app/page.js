import LandingNav from '@/components/landing/LandingNav';
import LandingHero from '@/components/landing/LandingHero';
import HowItWorks from '@/components/landing/HowItWorks';
import Showcase from '@/components/landing/Showcase';
import Benefits from '@/components/landing/Benefits';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingFooter from '@/components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="lp">
      <LandingNav />
      <LandingHero />
      <HowItWorks />
      <Showcase />
      <Benefits />
      <Testimonials />
      <Pricing />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
