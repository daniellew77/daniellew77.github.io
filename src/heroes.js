import { useState, useEffect, useRef } from 'react';

/* ============================================================
   SHARED DESIGN TOKENS — deep violet + lavender on cream
   ============================================================ */
const NAV = [
  { id: 'bio', label: 'Bio', num: '01', whisper: 'who' },
  { id: 'academia', label: 'Academia & Research', num: '02', whisper: 'study' },
  { id: 'work', label: 'Work', num: '03', whisper: 'doing' },
  { id: 'projects', label: 'Projects', num: '04', whisper: 'tinkering' },
  { id: 'apparel', label: 'Apparel', num: '05', whisper: 'wearing' },
];

// Edit these to update the CV / LinkedIn / Email links across the hero.
const SOCIAL_LINKS = [
  { label: 'CV', href: '/Danielle-Whisnant-CV.pdf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danielle-whisnant/' },
  { label: 'Email', href: 'mailto:danielle_whisnant@brown.edu' },
];

const t = {
  ink: '#1c1f2a',
  paper: '#f4efe6',
  muted: '#6b6557',
  hair: 'rgba(28,31,42,0.18)',
  accent: '#a8631f',
  accentGold: '#e8c071',
  serif: 'var(--serif, "EB Garamond", Georgia, serif)',
};

/* ---------- shared utilities ---------- */
const topRow = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
  fontFamily: 'var(--serif, "EB Garamond", Georgia, serif)', fontStyle: 'italic', fontSize: 15, color: t.muted,
};

function SocialLink({ label, href, color }) {
  const [hov, setHov] = useState(false);
  const external = !href.startsWith('mailto:') && !href.startsWith('#');
  return (
    <a href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        color, textDecoration: 'none', position: 'relative',
        display: 'inline-flex', alignItems: 'baseline', gap: 4, paddingBottom: 4,
        fontFamily: t.serif, fontStyle: 'italic', fontSize: 15, lineHeight: 1.1
      }}>
      <span>{label}</span>
      <sup style={{ fontSize: 9, opacity: .5, fontStyle: 'normal' }}>↗</sup>
      <span style={{
        position: 'absolute', left: 0, right: '0.7em', bottom: 0, height: 1, background: color, opacity: .35,
        transform: hov ? 'scaleX(1)' : 'scaleX(0.4)', transformOrigin: 'left',
        transition: 'transform .45s cubic-bezier(.2,.8,.2,1)'
      }} />
    </a>
  );
}

function useEntered(delay = 80) {
  const [on, setOn] = useState(false);
  useEffect(() => { const tt = setTimeout(() => setOn(true), delay); return () => clearTimeout(tt); }, [delay]);
  return on;
}
function SplitLine({ children, entered, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0.86 }}>
      <div style={{
        transform: entered ? 'translateY(0)' : 'translateY(110%)',
        transition: `transform 1.1s cubic-bezier(.6,.05,.2,1) ${delay}s`
      }}>{children}</div>
    </div>
  );
}
function RollText({ children, active, color = t.ink, accent = t.accent, italicAlt = false, size }) {
  return (
    <span style={{
      display: 'inline-block', position: 'relative', overflow: 'hidden',
      lineHeight: 1, height: '1em', fontSize: size
    }}>
      <span style={{
        display: 'block',
        transform: active ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform .55s cubic-bezier(.6,.05,.2,1)', color
      }}>{children}</span>
      <span style={{
        display: 'block', position: 'absolute', top: '100%', left: 0,
        transform: active ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform .55s cubic-bezier(.6,.05,.2,1)',
        color: accent, fontStyle: italicAlt ? 'italic' : 'inherit'
      }}>{children}</span>
    </span>
  );
}

const SUNSET_URL = 'assets/sunset_background.jpeg';

function ImageBackground({ url, opacity = 1, blur = 0, overlay = 'rgba(245,243,255,0.78)' }) {
  return (
    <>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity, filter: blur ? `blur(${blur}px)` : 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0, background: overlay, zIndex: 0,
      }} />
    </>
  );
}
function useIsNarrow(breakpoint = 720) {
  const [narrow, setNarrow] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return narrow;
}

function HeroCenterBlob({ background = null, accentOverride = null, inkOverride = null }) {
  const [hover, setHover] = useState(null);
  const entered = useEntered(120);
  const onImage = !!background;
  const isNarrow = useIsNarrow(720);

  const ink = inkOverride || (onImage ? '#fbf6e8' : t.ink);
  const muted = onImage ? 'rgba(251,246,232,0.72)' : t.muted;
  const hair = onImage ? 'rgba(251,246,232,0.22)' : t.hair;
  const accent = accentOverride || (onImage ? t.accentGold : t.accent);

  return (
    <div style={{
      width: '100%', height: '100%', background: t.paper,
      color: ink, position: 'relative', overflow: 'hidden',
      padding: 'clamp(20px, 5vw, 56px) clamp(18px, 5vw, 64px)',
      display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 'clamp(16px, 3vw, 32px)',
    }}>
      {background}

      <div style={{
        position: 'relative', zIndex: 2, ...topRow, color: muted,
        opacity: entered ? 1 : 0, transition: 'opacity .9s ease .1s',
        flexWrap: 'wrap', rowGap: 8,
      }}>
        <div style={{ display: 'flex', gap: 'clamp(12px, 2.5vw, 22px)', flexWrap: 'wrap' }}>
          {SOCIAL_LINKS.map(l => <SocialLink key={l.label} {...l} color={muted} />)}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, alignSelf: 'center', textAlign: 'center' }}>
        <div style={{
          fontFamily: t.serif, fontWeight: 400,
          fontSize: 'clamp(54px, 13vw, 184px)', lineHeight: 0.88, letterSpacing: '-0.038em'
        }}>
          <SplitLine entered={entered} delay={0.2}>
            <span>Danielle</span>
          </SplitLine>
          <SplitLine entered={entered} delay={0.35}>
            <span style={{ fontStyle: 'italic', color: accent }}>
              Whisnant
            </span>
          </SplitLine>
        </div>
      </div>

      <nav style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isNarrow ? 'repeat(2, 1fr)' : `repeat(${NAV.length}, 1fr)`,
          gap: isNarrow ? '4px 0' : 0,
          paddingTop: 'clamp(14px, 2.5vw, 22px)',
        }}>
          {NAV.map((n, i) => {
            const isFirstInRow = isNarrow ? (i % 2 === 0) : (i === 0);
            return (
              <a key={n.id} href={`#${n.id}`}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                style={{
                  padding: isNarrow ? '6px 12px 14px' : '4px 18px 18px',
                  borderLeft: isFirstInRow ? 'none' : `1px solid ${hair}`,
                  textDecoration: 'none', color: ink, cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start',
                  position: 'relative',
                  opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity .8s ease ${.9 + i * .06}s, transform .8s cubic-bezier(.2,.8,.2,1) ${.9 + i * .06}s`
                }}>
                <span style={{ fontFamily: t.serif, fontStyle: 'italic', fontSize: 12, color: muted, letterSpacing: '0.01em' }}>{n.num}</span>
                <span style={{
                  fontFamily: t.serif, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1,
                  fontSize: 'clamp(13px, 1.6vw, 19px)',
                  whiteSpace: 'nowrap',
                }}>
                  <RollText active={hover === i} color={ink} accent={accent}>
                    {isNarrow && n.label === 'Academia & Research' ? 'Academia' : n.label}
                  </RollText>
                </span>
                <span style={{
                  position: 'absolute', left: 18, right: 18, bottom: 0, height: 1,
                  background: accent,
                  transform: hover === i ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform .5s cubic-bezier(.6,.05,.2,1)'
                }} />
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function HeroCenterBlobSunset() {
  return <HeroCenterBlob
    accentOverride="#ffd6b0"
    inkOverride="#fff8ec"
    background={
      <ImageBackground url={SUNSET_URL} opacity={1} blur={0}
        overlay="radial-gradient(ellipse 70% 55% at 50% 50%, rgba(8,6,22,0.62) 0%, rgba(8,6,22,0.32) 55%, rgba(8,6,22,0.55) 100%)" />
    } />;
}

/* ============================================================
   BIRD PEEKERS — tiny silhouette birds that occasionally pop up
   from random edges of the viewport, look around, and duck back.
   Mounted at the app root so they're visible across the whole site.
   ============================================================ */
// Colors sampled from the sunset background — warm corals, ambers, dusky pinks, and deep blues.
const BIRD_PALETTE = [
  '#f4a261', // warm amber
  '#e76f51', // coral
  '#d4677a', // dusky pink
  '#b8506b', // deep rose
  '#7a3a5c', // wine
  '#3d4a78', // dusk blue
  '#5a6ea3', // sky blue
  '#e8c071', // gold
  '#c08552', // burnt sienna
  '#8a4a3d', // rust
];

function BirdPeekers({ enabled = true, minDelay = 4000, maxDelay = 12000 }) {
  const [bird, setBird] = useState(null); // { id, edge, pos, variant, look, color }
  const idRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;

    const schedule = (delay) => {
      timeoutRef.current = setTimeout(() => {
        if (cancelled) return;

        // Pick a random edge and position along it (avoid the very corners)
        const edges = ['top', 'right', 'bottom', 'left'];
        const edge = edges[Math.floor(Math.random() * edges.length)];
        const pos = 12 + Math.random() * 76; // 12% – 88% along the edge
        const variant = Math.floor(Math.random() * 3); // small style variations
        const flipped = Math.random() < 0.5;
        const color = BIRD_PALETTE[Math.floor(Math.random() * BIRD_PALETTE.length)];

        const id = ++idRef.current;
        setBird({ id, edge, pos, variant, flipped, phase: 'enter', color });

        // Look around partway through the visit
        setTimeout(() => {
          if (cancelled) return;
          setBird((b) => (b && b.id === id ? { ...b, phase: 'look' } : b));
        }, 700);

        // Duck back
        setTimeout(() => {
          if (cancelled) return;
          setBird((b) => (b && b.id === id ? { ...b, phase: 'exit' } : b));
        }, 4500);

        // Clear and schedule the next one
        setTimeout(() => {
          if (cancelled) return;
          setBird((b) => (b && b.id === id ? null : b));
          const next = minDelay + Math.random() * (maxDelay - minDelay);
          schedule(next);
        }, 5200);
      }, delay);
    };

    schedule(minDelay + Math.random() * (maxDelay - minDelay));

    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
  }, [enabled, minDelay, maxDelay]);

  if (!bird) return null;
  return <Bird {...bird} />;
}

function Bird({ edge, pos, variant, flipped, phase, color }) {
  const [hover, setHover] = useState(false);
  // Position the bird's anchor point on the edge it's poking through.
  // Each edge anchors a different side of the bird, and the "hidden" transform
  // pushes it offscreen along the edge normal.
  const SIZE = 72; // bird size in px (head + small body)

  let containerStyle = {
    position: 'fixed',
    width: SIZE,
    height: SIZE,
    pointerEvents: 'none',
    zIndex: 9000,
    transition: 'transform .55s cubic-bezier(.34,1.56,.64,1)',
  };

  // Anchor + offscreen transforms per edge
  const hidden = {
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)',
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
  }[edge];

  const visible = {
    top: 'translateY(-22%)',  // peek so just the head + a sliver of body shows
    bottom: 'translateY(22%)',
    left: 'translateX(-22%)',
    right: 'translateX(22%)',
  }[edge];

  // Place the bird on the chosen edge
  if (edge === 'top') Object.assign(containerStyle, { top: 0, left: `${pos}%`, marginLeft: -SIZE / 2 });
  if (edge === 'bottom') Object.assign(containerStyle, { bottom: 0, left: `${pos}%`, marginLeft: -SIZE / 2 });
  if (edge === 'left') Object.assign(containerStyle, { left: 0, top: `${pos}%`, marginTop: -SIZE / 2 });
  if (edge === 'right') Object.assign(containerStyle, { right: 0, top: `${pos}%`, marginTop: -SIZE / 2 });

  // Bird should "stand" with its body anchored to the edge.
  // We rotate the SVG so the body points toward the edge (out of view) and
  // the head looks into the viewport.
  const baseRotation = {
    top: 180,   // body up & out of frame
    bottom: 0,     // body down & out of frame
    left: 90,    // body to the left & out of frame
    right: -90,   // body to the right & out of frame
  }[edge];

  // Look animation: subtle head tilt during the "look" phase
  const looking = phase === 'look';
  const tilt = looking ? (variant === 0 ? 12 : variant === 1 ? -10 : 6) : 0;

  // Compose transform: hidden -> visible (edge pop) plus a base rotation for orientation
  const popTransform = (phase === 'enter' || phase === 'look') ? visible : hidden;

  return (
    <div style={containerStyle}>
      <div style={{
        width: '100%', height: '100%',
        transform: popTransform,
        transition: 'transform .65s cubic-bezier(.34,1.56,.64,1)',
      }}>
        <div style={{
          width: '100%', height: '100%',
          transform: `rotate(${baseRotation}deg) ${flipped ? 'scaleX(-1)' : ''}`,
        }}>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width: '100%', height: '100%',
              transform: `rotate(${tilt}deg)`,
              transformOrigin: '50% 75%',
              transition: 'transform .35s cubic-bezier(.34,1.56,.64,1)',
              pointerEvents: 'auto',
            }}>
            <BirdSVG variant={variant} color={color} blink={hover} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BirdSVG({ variant = 0, color = '#1a1726', blink = false }) {
  // Three subtle silhouette variations — head shape and tuft differ.
  // Coordinates are designed for a 100×100 viewBox where (50, 100) is the
  // bird's "feet" (the edge of the screen) and (50, 50) is the head center.
  const tufts = [
    null, // smooth head
    <path key="t" d="M 42 22 Q 50 12 58 22" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />, // single tuft
    <g key="t2">
      <circle cx="44" cy="22" r="3" fill={color} />
      <circle cx="56" cy="22" r="3" fill={color} />
    </g>, // two-feather tuft
  ];

  return (
    <svg viewBox="0 0 100 100" style={{
      width: '100%', height: '100%', overflow: 'visible',
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))'
    }}>
      {/* small body sliver below the head — sits inside the offscreen part */}
      <ellipse cx="50" cy="78" rx="22" ry="16" fill={color} />
      {/* head */}
      <circle cx="50" cy="50" r="22" fill={color} />
      {/* tuft */}
      {tufts[variant]}
      {/* eye */}
      <ellipse cx="58" cy="48" rx="3" ry={blink ? 0.4 : 3} fill="#fff8ec"
        style={{ transition: 'ry .12s ease' }} />
      <circle cx="59" cy="49" r={blink ? 0 : 1.4} fill="#1a1726" />
      {/* beak */}
      <path d="M 70 52 L 80 50 L 70 56 Z" fill="#f4a261" />
    </svg>
  );
}

export { HeroCenterBlobSunset, BirdPeekers };


