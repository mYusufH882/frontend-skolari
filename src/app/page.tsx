import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import StatsAndCTA from '@/components/home/StatsAndCTA';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Events from '@/components/home/Event';
import Merchandise from '@/components/home/Merchandise';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Merchandise />
      <StatsAndCTA />
      <Events />
      <Testimonials />
      <FAQ />
    </>
  );
}