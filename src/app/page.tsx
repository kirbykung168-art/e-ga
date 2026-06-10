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
import StickyProof from '@/components/StickyProof';

/**
 * e-ga · single-page tribute.
 *
 * Section order: Nav → Hero (ink-bleed signature) → Marquee → Manifesto
 *  → RegionalMap (pinned scroll set piece) → Menu (bento) → Branches
 *  (split-flap board) → PressWall → Reserve → Footer.
 *
 * Cross-cutting: FeatherCursor (desktop), EasterEgg (type "ega"),
 * StickyProof (rating + IG + LINE).
 */
export default function HomePage() {
  return (
    <>
      <FeatherCursor />
      <EasterEgg />
      <StickyProof />
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
