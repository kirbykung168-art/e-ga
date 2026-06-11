import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import RegionalMap from '@/components/RegionalMap';
import Menu from '@/components/Menu';
import Branches from '@/components/Branches';
import PressWall from '@/components/PressWall';
import Reserve from '@/components/Reserve';
import Footer from '@/components/Footer';
import FeatherCursor from '@/components/FeatherCursor';
import EasterEgg from '@/components/EasterEgg';

/**
 * e-ga · single-page tribute.
 *
 * Audit fix v3: removed StickyProof — a senior reviewer pointed out that
 * editorial sites don't carry persistent CTAs; the rating already has a
 * dedicated paired moment inside PressWall.
 */
export default function HomePage() {
  return (
    <>
      <FeatherCursor />
      <EasterEgg />
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <RegionalMap />
      <Menu />
      <Branches />
      <PressWall />
      <Reserve />
      <Footer />
    </>
  );
}
