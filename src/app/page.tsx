import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import RegionalMap from '@/components/RegionalMap';
import Menu from '@/components/Menu';
import Branches from '@/components/Branches';
import APinkRabbit from '@/components/APinkRabbit';
import Events from '@/components/Events';
import IGGrid from '@/components/IGGrid';
import PressWall from '@/components/PressWall';
import Reserve from '@/components/Reserve';
import Footer from '@/components/Footer';
import FeatherCursor from '@/components/FeatherCursor';
import EasterEgg from '@/components/EasterEgg';

/**
 * e-ga · single-page tribute.
 *
 * Section order (v5 — sales-closing pass):
 *   Hero · Marquee · Manifesto · RegionalMap · Menu · Branches ·
 *   A Pink Rabbit (bakery sister) · Events (Sukhumvit 23) · IG Grid ·
 *   PressWall · Reserve · Footer.
 *
 * Cross-cutting: FeatherCursor (desktop), EasterEgg (type "ega").
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
      <APinkRabbit />
      <Events />
      <IGGrid />
      <PressWall />
      <Reserve />
      <Footer />
    </>
  );
}
