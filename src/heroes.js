import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

/* ============================================================
   SHARED DESIGN TOKENS — deep violet + lavender on cream
   ============================================================ */
const NAV = [
  { id: 'bio',      label: 'Bio',                 num: '01', whisper: 'who'        },
  { id: 'academia', label: 'Academia & Research', num: '02', whisper: 'study'      },
  { id: 'work',     label: 'Work',                num: '03', whisper: 'doing'      },
  { id: 'projects', label: 'Projects',            num: '04', whisper: 'tinkering'  },
  { id: 'apparel',  label: 'Apparel',             num: '05', whisper: 'wearing'    },
];

// Edit these to update the CV / LinkedIn / Email links across the hero.
const SOCIAL_LINKS = [
  { label: 'CV',       href: '/Danielle-Whisnant-CV.pdf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danielle-whisnant/' },
  { label: 'Email',    href: 'mailto:danielle_whisnant@brown.edu' },
];

const t = {
  ink:      '#1c1f2a',          // deep ink, slight cool cast
  paper:    '#f4efe6',          // warm cream (off-white, warm bias)
  paperWarm:'#ebe4d6',          // toasted cream
  muted:    '#6b6557',
  hair:     'rgba(28,31,42,0.18)',
  accent:   '#a8631f',          // burnt copper / sienna
  accentLt: '#d99a4a',           // warm amber for dark backgrounds
  accentGold:'#e8c071',          // gold star — used on cosmic bgs
  serif:    'var(--serif, "EB Garamond", Georgia, serif)',
  sans:     '"Inter", "Helvetica Neue", system-ui, sans-serif',
  mono:     '"Inter", system-ui, sans-serif',
};

/* ---------- shared utilities ---------- */
const topRow = {
  display:'flex', justifyContent:'space-between', alignItems:'baseline',
  fontFamily: 'var(--serif, "EB Garamond", Georgia, serif)', fontStyle:'italic', fontSize: 15, color: t.muted,
};

function FloatingSocials({ corner = 'bottom-right', tone = 'dark' }) {
  const pos = {
    'bottom-right': { bottom: 28, right: 32 },
    'bottom-left':  { bottom: 28, left:  32 },
    'top-right':    { top: 28,    right: 32 },
  }[corner];
  const color = tone === 'dark' ? t.ink : t.paper;
  const links = SOCIAL_LINKS;
  return (
    <div style={{
      position:'absolute', ...pos, display:'flex', gap: 22, alignItems:'baseline',
      fontFamily: t.serif, fontStyle:'italic', fontSize: 15, color, zIndex: 5,
    }}>
      {links.map((l, i) => (
        <React.Fragment key={l.label}>
          {i > 0 && <span style={{ opacity: 0.35, fontStyle:'normal', fontSize: 11 }}>·</span>}
          <SocialLink {...l} color={color} />
        </React.Fragment>
      ))}
    </div>
  );
}
function SocialLink({ label, href, color }) {
  const [hov, setHov] = useState(false);
  const external = !href.startsWith('mailto:') && !href.startsWith('#');
  return (
    <a href={href}
       target={external ? '_blank' : undefined}
       rel={external ? 'noopener noreferrer' : undefined}
       onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
       style={{ color, textDecoration:'none', position:'relative',
                display:'inline-flex', alignItems:'baseline', gap: 4, paddingBottom: 4,
                fontFamily: t.serif, fontStyle:'italic', fontSize: 15, lineHeight: 1.1 }}>
      <span>{label}</span>
      <sup style={{ fontSize: 9, opacity: .5, fontStyle:'normal' }}>↗</sup>
      <span style={{ position:'absolute', left:0, right:'0.7em', bottom:0, height:1, background: color, opacity:.35,
        transform: hov ? 'scaleX(1)' : 'scaleX(0.4)', transformOrigin:'left',
        transition:'transform .45s cubic-bezier(.2,.8,.2,1)' }} />
    </a>
  );
}

function useCursor(ref) {
  const [p, setP] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setP({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [ref]);
  return p;
}
function useEntered(delay = 80) {
  const [on, setOn] = useState(false);
  useEffect(() => { const tt = setTimeout(()=>setOn(true), delay); return () => clearTimeout(tt); }, [delay]);
  return on;
}
function SplitLine({ children, entered, delay = 0 }) {
  return (
    <div style={{ overflow:'hidden', lineHeight: 0.86 }}>
      <div style={{ transform: entered ? 'translateY(0)' : 'translateY(110%)',
        transition:`transform 1.1s cubic-bezier(.6,.05,.2,1) ${delay}s` }}>{children}</div>
    </div>
  );
}
function RollText({ children, active, color = t.ink, accent = t.accent, italicAlt = false, size }) {
  return (
    <span style={{ display:'inline-block', position:'relative', overflow:'hidden',
      lineHeight: 1, height:'1em', fontSize: size }}>
      <span style={{ display:'block',
        transform: active ? 'translateY(-100%)' : 'translateY(0)',
        transition:'transform .55s cubic-bezier(.6,.05,.2,1)', color }}>{children}</span>
      <span style={{ display:'block', position:'absolute', top:'100%', left:0,
        transform: active ? 'translateY(-100%)' : 'translateY(0)',
        transition:'transform .55s cubic-bezier(.6,.05,.2,1)',
        color: accent, fontStyle: italicAlt ? 'italic' : 'inherit' }}>{children}</span>
    </span>
  );
}

/* ============================================================
   BACKGROUNDS — Van Gogh + Galaxy, public domain images
   ============================================================ */
const VANGOGH_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg';
const CAFE_URL    = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/1024px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg';
const GALAXY_URL  = 'https://images-assets.nasa.gov/image/PIA15985/PIA15985~medium.jpg';
const SUNSET_URL  = 'assets/sunset_background.jpeg';
const SUNSET2_URL = 'assets/sunset_background.jpeg';

/* ----- Van Gogh swirl: a brushstroke trail that follows the cursor.
   Captures the painting's spiraling stroke language using layered
   rotating SVG arcs in the canvas's blues + golds. ----- */
function VanGoghSwirl({ cursor, palette = 'starry' }) {
  const colors = palette === 'cafe'
    ? { a: '#f5c34a', b: '#e89a2a', c: '#3a5b8a', d: '#1f3a5f' }   // cafe terrace gold/blue
    : { a: '#e8c071', b: '#c9962f', c: '#5a7fb8', d: '#2a4577' };  // starry night
  const t1 = useRef(0);
  const [, force] = useState(0);
  useEffect(() => {
    let raf;
    const tick = () => { t1.current += 1; force(t1.current); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const phase = t1.current;
  return (
    <div style={{
      position:'absolute', width: 520, height: 520, pointerEvents:'none',
      left:`calc(${cursor.x*100}% - 260px)`, top:`calc(${cursor.y*100}% - 260px)`,
      transition:'left 1.2s cubic-bezier(.2,.8,.2,1), top 1.2s cubic-bezier(.2,.8,.2,1)',
      zIndex: 1, mixBlendMode:'screen', opacity: 0.85,
    }}>
      <svg viewBox="-100 -100 200 200" style={{ width:'100%', height:'100%', overflow:'visible' }}>
        <defs>
          <radialGradient id="vgGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%"  stopColor={colors.a} stopOpacity="0.55" />
            <stop offset="40%" stopColor={colors.b} stopOpacity="0.22" />
            <stop offset="100%" stopColor={colors.d} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* core glow */}
        <circle cx="0" cy="0" r="60" fill="url(#vgGlow)" />

        {/* outer spiral — slow */}
        <g style={{ transform:`rotate(${phase * 0.35}deg)`, transformOrigin:'center', filter:'blur(0.6px)' }}>
          {[0, 60, 120, 180, 240, 300].map(a => (
            <path key={a} transform={`rotate(${a})`}
              d="M 0 0 Q 30 -10 50 -30 T 80 -70"
              fill="none" stroke={colors.c} strokeWidth="2.4" strokeLinecap="round" opacity="0.45" />
          ))}
        </g>

        {/* mid spiral — counter-rotating, gold */}
        <g style={{ transform:`rotate(${-phase * 0.6}deg)`, transformOrigin:'center' }}>
          {[0, 72, 144, 216, 288].map(a => (
            <path key={a} transform={`rotate(${a})`}
              d="M 0 0 C 12 -6 24 -8 36 -22 S 48 -48 38 -60"
              fill="none" stroke={colors.a} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
          ))}
        </g>

        {/* inner tight spiral — fast */}
        <g style={{ transform:`rotate(${phase * 1.2}deg)`, transformOrigin:'center' }}>
          {[0, 90, 180, 270].map(a => (
            <path key={a} transform={`rotate(${a})`}
              d="M 0 0 Q 8 -4 14 -10 T 22 -22"
              fill="none" stroke={colors.b} strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
          ))}
        </g>

        {/* dotted star points — stippling like the painting */}
        <g style={{ transform:`rotate(${phase * 0.2}deg)`, transformOrigin:'center', opacity: 0.7 }}>
          {[15, 75, 135, 195, 255, 315].map(a => (
            <circle key={a} cx={Math.cos(a*Math.PI/180)*46} cy={Math.sin(a*Math.PI/180)*46}
              r="1.2" fill={colors.a} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function ImageBackground({ url, opacity = 1, blur = 0, overlay = 'rgba(245,243,255,0.78)' }) {
  return (
    <>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity, filter: blur ? `blur(${blur}px)` : 'none',
        zIndex: 0,
      }} />
      <div style={{
        position:'absolute', inset: 0, background: overlay, zIndex: 0,
      }} />
    </>
  );
}

/* ============================================================
   VARIANT A — EDITORIAL INDEX (clean, violet/cream)
   ============================================================ */
function HeroEditorial({ background = null, accentOverride = null, inkOverride = null }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(null);
  const cursor = useCursor(ref);
  const entered = useEntered(120);
  const onImage = !!background;

  const ink = inkOverride || (onImage ? '#fff8ec' : t.ink);
  const muted = onImage ? 'rgba(255,248,236,0.7)' : t.muted;
  const hair = onImage ? 'rgba(255,248,236,0.28)' : t.hair;
  const accent = accentOverride || (onImage ? t.accentGold : t.accent);

  return (
    <div ref={ref} style={{
      width:'100%', height:'100%', background: t.paper, color: ink,
      fontFamily: t.serif, position:'relative', overflow:'hidden',
      padding:'56px 64px', display:'grid', gridTemplateRows:'auto 1fr auto', gap: 40,
    }}>
      {background}
      <div style={{ position:'relative', zIndex: 2, ...topRow, color: muted, opacity: entered ? 1 : 0, transition:'opacity .9s ease .1s' }}>
        <span>Vol. I</span>
        <span>Portfolio, 2026</span>
        <span>Providence, RI</span>
      </div>

      <div style={{ position:'relative', zIndex: 2, alignSelf:'center' }}>
        <div style={{ position:'absolute', left:'50%', top:0, height:1, background: ink,
          width: entered ? '100%' : 0, transform:'translateX(-50%)',
          transition:'width 1s cubic-bezier(.7,0,.2,1)' }} />
        <div style={{ position:'absolute', left:'50%', bottom:0, height:1, background: ink,
          width: entered ? '100%' : 0, transform:'translateX(-50%)',
          transition:'width 1s cubic-bezier(.7,0,.2,1) .1s' }} />

        <div style={{ padding:'34px 0', textAlign:'center' }}>
          <div style={{
            fontSize:'clamp(80px, 11vw, 168px)', lineHeight: 0.86,
            letterSpacing:'-0.04em', fontWeight: 400,
            opacity: entered ? 1 : 0,
            transform: entered ? 'translateY(0)' : 'translateY(20px)',
            transition:'opacity 1s ease .35s, transform 1s cubic-bezier(.2,.8,.2,1) .35s',
          }}>
            <span style={{ fontStyle:'italic' }}>Danielle</span>
            <span style={{ display:'inline-block', color: accent, padding:'0 0.18em',
              transform: `translate(${(cursor.x-.5)*10}px, ${(cursor.y-.5)*8}px)`,
              transition:'transform .6s cubic-bezier(.2,.8,.2,1)' }}>·</span>
            <span>Whisnant</span>
          </div>
          <div style={{ marginTop: 14, fontFamily: t.mono, fontSize: 11,
            color: muted,
            opacity: entered ? 1 : 0, transition:'opacity 1s ease .8s' }}>
            engineer · researcher · designer of garments &amp; systems
          </div>
        </div>
      </div>

      <nav style={{ position:'relative', zIndex: 2 }}>
        <ol style={{ listStyle:'none', margin:0, padding:0,
          display:'grid', gridTemplateColumns:'repeat(5, 1fr)' }}>
          {NAV.map((n, i) => (
            <IndexItem key={n.id} n={n} i={i} hover={hover === i} entered={entered}
              ink={ink} muted={muted} hair={hair} accent={accent}
              onEnter={()=>setHover(i)} onLeave={()=>setHover(null)} />
          ))}
        </ol>
      </nav>

      <FloatingSocials corner="top-right" tone={onImage ? 'light' : 'dark'} />
    </div>
  );
}
function IndexItem({ n, i, hover, entered, onEnter, onLeave, ink, muted, hair, accent }) {
  return (
    <li onMouseEnter={onEnter} onMouseLeave={onLeave}
        style={{ position:'relative', borderLeft: i === 0 ? 'none' : `1px solid ${hair}`,
          padding:'10px 22px 26px', cursor:'pointer',
          opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(10px)',
          transition:`opacity .8s ease ${.5+i*.08}s, transform .8s cubic-bezier(.2,.8,.2,1) ${.5+i*.08}s` }}>
      <div style={{ fontFamily: t.serif, fontStyle:'italic', fontSize: 13, color: accent,
        opacity: hover ? 1 : 0, transform: hover ? 'translateY(0)' : 'translateY(6px)',
        transition:'opacity .35s ease, transform .35s cubic-bezier(.2,.8,.2,1)',
        marginBottom: 4, height: 18 }}>↳ {n.whisper}</div>
      <div style={{ fontFamily: t.mono, fontSize: 10, color: muted,
        marginBottom: 10 }}>{n.num} / {String(NAV.length).padStart(2,'0')}</div>
      <div style={{ fontSize: 24, lineHeight: 1.05, fontWeight: 400,
        fontStyle: hover ? 'italic' : 'normal',
        color: hover ? accent : ink,
        transform: hover ? 'translateX(6px)' : 'translateX(0)',
        transition:'transform .35s cubic-bezier(.2,.8,.2,1), color .3s, font-style .3s' }}>{n.label}</div>
      <svg viewBox="0 0 200 6" preserveAspectRatio="none" style={{
        position:'absolute', left: 22, right: 22, bottom: 4,
        width:'calc(100% - 44px)', height: 6, overflow:'visible' }}>
        <path d="M0 3 Q 50 1 100 3 T 200 3" fill="none"
              stroke={accent} strokeWidth="1.2" strokeLinecap="round"
              strokeDasharray="220" strokeDashoffset={hover ? 0 : 220}
              style={{ transition:'stroke-dashoffset .55s cubic-bezier(.6,.05,.2,1)' }} />
      </svg>
    </li>
  );
}

/* ============================================================
   VARIANT B — LIGHT TICKER RAIL (cream, violet rolling text)
   ============================================================ */
function HeroTicker() {
  const [hover, setHover] = useState(null);
  const ref = useRef(null);
  const itemRefs = useRef([]);
  const [bar, setBar] = useState({ left: 0, width: 0, opacity: 0 });
  const entered = useEntered(120);

  useLayoutEffect(() => {
    if (hover == null) { setBar(b => ({ ...b, opacity: 0 })); return; }
    const el = itemRefs.current[hover]; const parent = ref.current;
    if (!el || !parent) return;
    const er = el.getBoundingClientRect(); const pr = parent.getBoundingClientRect();
    setBar({ left: er.left - pr.left, width: er.width, opacity: 1 });
  }, [hover]);

  return (
    <div ref={ref} style={{
      width:'100%', height:'100%', background: t.paperWarm, color: t.ink,
      position:'relative', overflow:'hidden',
      display:'grid', gridTemplateRows:'auto 1fr auto', padding:'56px 64px',
    }}>
      <div style={{ ...topRow, opacity: entered ? 1 : 0, transition:'opacity .9s ease .1s' }}>
        <span>Index</span>
        <span style={{}}>— 2026 / WORKING ARCHIVE —</span>
        <span>05 sections</span>
      </div>

      <div style={{ alignSelf:'center', position:'relative', zIndex: 2 }}>
        <div style={{ fontFamily: t.serif, fontSize:'clamp(96px, 13vw, 200px)',
          lineHeight: 0.86, letterSpacing:'-0.038em', fontWeight: 400 }}>
          <SplitLine entered={entered} delay={0.2}>
            <span>Danielle</span>
          </SplitLine>
          <SplitLine entered={entered} delay={0.35}>
            <span style={{ fontStyle:'italic', color: t.accent, marginLeft:'0.18em' }}>
              Whisnant<span style={{ color: t.ink, fontStyle:'normal' }}>.</span>
            </span>
          </SplitLine>
        </div>
        <div style={{ marginTop: 26, fontFamily: t.mono, fontSize: 11,
          color: t.muted,
          opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(8px)',
          transition:'opacity 1s ease .8s, transform 1s ease .8s' }}>
          (b. 2003) — Brown ScB → ScM, MD/PhD-bound, makes clothes on the side.
        </div>
      </div>

      <div style={{ position:'relative', borderTop:`1px solid ${t.hair}`,
        borderBottom:`1px solid ${t.hair}`, paddingTop: 18, paddingBottom: 18,
        opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(14px)',
        transition:'opacity 1s ease 1.1s, transform 1s ease 1.1s' }}>
        <div style={{ position:'absolute', bottom:-1, height: 2, background: t.accent,
          left: bar.left, width: bar.width, opacity: bar.opacity,
          transition:'left .5s cubic-bezier(.2,.8,.2,1), width .5s cubic-bezier(.2,.8,.2,1), opacity .25s ease' }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          {NAV.map((n, i) => (
            <button key={n.id} ref={(el)=>itemRefs.current[i]=el}
              onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
              style={{ background:'none', border:'none', cursor:'pointer', padding:'4px',
                color: t.ink, display:'flex', alignItems:'baseline', gap: 12 }}>
              <span style={{ fontFamily: t.mono, fontSize: 10, color: t.muted,
                transform: hover === i ? 'translateY(-2px)' : 'none', transition:'transform .3s ease' }}>{n.num}</span>
              <span style={{ fontFamily: t.mono, fontSize: 13, fontWeight: 500,
                opacity: hover != null && hover !== i ? 0.4 : 1, transition:'opacity .3s ease' }}>
                <RollText active={hover === i} color={t.ink} accent={t.accent}>{n.label}</RollText>
              </span>
            </button>
          ))}
        </div>
      </div>

      <FloatingSocials corner="bottom-right" tone="dark" />
    </div>
  );
}

/* ============================================================
   VARIANT C — BIG ITALIC NAME + cursor blob + horizontal index
   (no vertical list — uses horizontal index like A, but with
    C's centered presentation and cursor blob)
   ============================================================ */
function HeroCenterBlob({ background = null, accentOverride = null, inkOverride = null, swirl = null, cursorEffect = null }) {
  const [hover, setHover] = useState(null);
  const ref = useRef(null);
  const cursor = useCursor(ref);
  const entered = useEntered(120);
  const onImage = !!background;

  const ink = inkOverride || (onImage ? '#fbf6e8' : t.ink);
  const muted = onImage ? 'rgba(251,246,232,0.72)' : t.muted;
  const hair = onImage ? 'rgba(251,246,232,0.22)' : t.hair;
  const accent = accentOverride || (onImage ? t.accentGold : t.accent);

  return (
    <div ref={ref} style={{
      width:'100%', height:'100%', background: t.paper,
      color: ink, position:'relative', overflow:'hidden',
      padding:'56px 64px', display:'grid', gridTemplateRows:'auto 1fr auto', gap: 32,
    }}>
      {background}

      {/* cursor effect — swirl on Van Gogh, custom on others, soft blob default */}
      {cursorEffect ? cursorEffect(cursor) : swirl ? <VanGoghSwirl cursor={cursor} palette={swirl} /> : (
        <div style={{ position:'absolute', width: 640, height: 640, borderRadius:'50%',
          background:`radial-gradient(circle at center, ${onImage ? 'rgba(232,192,113,0.32)' : t.accent + '26'}, transparent 60%)`,
          left:`calc(${cursor.x*100}% - 320px)`, top:`calc(${cursor.y*100}% - 320px)`,
          transition:'left 1s cubic-bezier(.2,.8,.2,1), top 1s cubic-bezier(.2,.8,.2,1)',
          pointerEvents:'none', filter:'blur(6px)', zIndex: 1 }} />
      )}

      <div style={{ position:'relative', zIndex: 2, ...topRow, color: muted,
        opacity: entered ? 1 : 0, transition:'opacity .9s ease .1s' }}>
        <div style={{ display:'flex', gap: 22 }}>
          {SOCIAL_LINKS.map(l => <SocialLink key={l.label} {...l} color={muted} />)}
        </div>
      </div>

      <div style={{ position:'relative', zIndex: 2, alignSelf:'center', textAlign:'center' }}>
        <div style={{ fontFamily: t.serif, fontWeight: 400,
          fontSize:'clamp(86px, 12vw, 184px)', lineHeight: 0.88, letterSpacing:'-0.038em' }}>
          <SplitLine entered={entered} delay={0.2}>
            <span>Danielle</span>
          </SplitLine>
          <SplitLine entered={entered} delay={0.35}>
            <span style={{ fontStyle:'italic', color: accent }}>
              Whisnant
            </span>
          </SplitLine>
        </div>
      </div>

      <nav style={{ position:'relative', zIndex: 2 }}>
        <div style={{ display:'flex', justifyContent:'center', gap: 0,
          paddingTop: 22 }}>
          {NAV.map((n, i) => (
            <a key={n.id} href={`#${n.id}`}
               onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
               style={{ flex: 1, padding:'4px 18px 18px', borderLeft: i === 0 ? 'none' : `1px solid ${hair}`,
                 textDecoration:'none', color: ink, cursor:'pointer',
                 display:'flex', flexDirection:'column', gap: 6, alignItems:'flex-start',
                 position:'relative',
                 opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(8px)',
                 transition:`opacity .8s ease ${.9 + i*.06}s, transform .8s cubic-bezier(.2,.8,.2,1) ${.9 + i*.06}s` }}>
              <span style={{ fontFamily: t.serif, fontStyle:'italic', fontSize: 12, color: muted, letterSpacing:'0.01em' }}>{n.num}</span>
              <span style={{ fontFamily: t.serif, fontStyle:'italic', fontSize: 19, fontWeight: 400, lineHeight: 1.1, whiteSpace:'nowrap' }}>
                <RollText active={hover === i} color={ink} accent={accent}>{n.label}</RollText>
              </span>
              <span style={{ position:'absolute', left: 18, right: 18, bottom: 0, height: 1,
                background: accent,
                transform: hover === i ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left',
                transition:'transform .5s cubic-bezier(.6,.05,.2,1)' }} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
function HeroCenterBlobVangogh() {
  return <HeroCenterBlob swirl="starry" background={
    <ImageBackground url={VANGOGH_URL} opacity={1} blur={0}
      overlay="linear-gradient(180deg, rgba(8,14,38,0.42) 0%, rgba(8,14,38,0.18) 35%, rgba(8,14,38,0.55) 100%)" />
  } />;
}
function HeroCenterBlobCafe() {
  return <HeroCenterBlob swirl="cafe" background={
    <ImageBackground url={CAFE_URL} opacity={1} blur={0}
      overlay="linear-gradient(180deg, rgba(20,16,8,0.32) 0%, rgba(20,16,8,0.12) 35%, rgba(20,16,8,0.5) 100%)" />
  } />;
}
function HeroCenterBlobGalaxy() {
  return <HeroCenterBlob background={
    <ImageBackground url={GALAXY_URL} opacity={1} blur={0}
      overlay="radial-gradient(ellipse at 50% 45%, rgba(6,4,20,0.35) 0%, rgba(6,4,20,0.78) 100%)" />
  } />;
}
function HeroCenterBlobSunset() {
  return <HeroCenterBlob
    accentOverride="#ffb56b"
    cursorEffect={() => null}
    background={
      <ImageBackground url={SUNSET_URL} opacity={1} blur={0}
        overlay="linear-gradient(180deg, rgba(10,8,24,0.28) 0%, rgba(10,8,24,0.05) 30%, rgba(10,8,24,0.55) 100%)" />
  } />;
}

/* ============================================================
   VARIANT D — PLAYFUL (tightened layout) + cursor flower
   ============================================================ */
function HeroPlayful({ background = null }) {
  const [hover, setHover] = useState(null);
  const ref = useRef(null);
  const cursor = useCursor(ref);
  const entered = useEntered(120);
  const onImage = !!background;

  const ink   = onImage ? '#fbf6e8' : t.ink;
  const muted = onImage ? 'rgba(251,246,232,0.72)' : t.muted;
  const accent= onImage ? t.accentGold : t.accent;

  return (
    <div ref={ref} style={{
      width:'100%', height:'100%', position:'relative', overflow:'hidden',
      background: t.paperWarm, color: ink, padding:'56px 64px',
      display:'grid', gridTemplateRows:'auto 1fr auto', gap: 32,
    }}>
      {background}

      {/* cursor flower */}
      <div style={{ position:'absolute', fontFamily: t.serif, fontSize: 260,
        color: accent, fontStyle:'italic', userSelect:'none',
        top:`calc(${cursor.y*100}% - 150px)`,
        right:`calc(${(1-cursor.x)*100}% - 150px)`,
        transition:'top 1.4s cubic-bezier(.2,.8,.2,1), right 1.4s cubic-bezier(.2,.8,.2,1)',
        opacity: onImage ? 0.35 : 0.18, pointerEvents:'none',
        animation:'spinSlow 30s linear infinite', zIndex: 1 }}>✻</div>
      <style>{`
        @keyframes spinSlow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes wobble {
          0%, 100% { transform: rotate(var(--rot)) translateY(0); }
          50% { transform: rotate(calc(var(--rot) + 1.5deg)) translateY(-2px); }
        }
      `}</style>

      <div style={{ position:'relative', zIndex: 2, ...topRow, color: muted,
        opacity: entered ? 1 : 0, transition:'opacity .9s ease .1s' }}>
        <span>★ Hello</span>
        <span style={{}}>— A SMALL, OPINIONATED INDEX —</span>
        <span>est. 2003</span>
      </div>

      {/* Name — left aligned, cleaner */}
      <div style={{ position:'relative', zIndex: 2, alignSelf:'center' }}>
        <div style={{ fontFamily: t.serif, fontSize:'clamp(80px, 11vw, 168px)',
          lineHeight: 0.9, letterSpacing:'-0.04em', fontWeight: 400 }}>
          <SplitLine entered={entered} delay={0.2}>
            <span>
              <span style={{ display:'inline-block', transform:'translateY(-4px) rotate(-1.5deg)' }}>Danielle</span>
              <sup style={{ fontFamily: t.mono, fontSize: 12, marginLeft: 10,
                color: muted,
                verticalAlign:'super' }}>she/her</sup>
            </span>
          </SplitLine>
          <SplitLine entered={entered} delay={0.35}>
            <span style={{ fontStyle:'italic', color: accent, marginLeft:'1.2em',
              display:'inline-block', transform:'rotate(0.5deg)' }}>
              Whisnant
              <span style={{ fontFamily: t.mono, fontSize: 14, fontStyle:'normal', color: muted,
                marginLeft: 12, }}>—</span>
            </span>
          </SplitLine>
        </div>
      </div>

      {/* Tightened: structured row of nav with playful angles, not absolute scatter */}
      <nav style={{ position:'relative', zIndex: 2 }}>
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'flex-end',
          gap: 16, paddingTop: 20, borderTop: `1px dashed ${onImage ? 'rgba(255,255,255,0.3)' : t.hair}`,
        }}>
          {NAV.map((n, i) => {
            const rot = [-2, 1.5, -1, 2, -1.5][i];
            const sizes = [34, 30, 38, 32, 36];
            const active = hover === i;
            return (
              <a key={n.id} href={`#${n.id}`}
                 onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
                 style={{ textDecoration:'none', color: ink, cursor:'pointer',
                   display:'flex', flexDirection:'column', alignItems:'flex-start', gap: 6,
                   position:'relative', flex: 1,
                   opacity: entered ? 1 : 0,
                   transform: entered
                     ? (active ? `rotate(0deg) translateY(-6px)` : `rotate(${rot}deg) translateY(0)`)
                     : `rotate(${rot}deg) translateY(20px)`,
                   transition:`opacity .8s ease ${.7 + i*.08}s, transform .55s cubic-bezier(.2,.8,.2,1)`,
                   '--rot': `${rot}deg`,
                   animation: active ? 'none' : `wobble ${4 + i*.4}s ease-in-out ${i*.2}s infinite`,
                   padding:'6px 8px',
                 }}>
                <span style={{ fontFamily: t.mono, fontSize: 10, color: muted }}>{n.num}</span>
                <span style={{ fontFamily: t.serif, fontStyle: i % 2 ? 'italic' : 'normal',
                  fontSize: sizes[i], color: active ? accent : ink,
                  transition:'color .3s ease', position:'relative', lineHeight: 1 }}>
                  {n.label}
                  <span style={{ position:'absolute', right:-22, top:-8, fontSize: 18, color: accent,
                    opacity: active ? 1 : 0,
                    transform: active ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0.4)',
                    transition:'opacity .35s ease, transform .45s cubic-bezier(.5,1.6,.5,1)',
                    fontStyle:'normal' }}>✻</span>
                  <span style={{ position:'absolute', left:0, right:0, bottom:-3, height:1,
                    background: accent,
                    transform: active ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left',
                    transition:'transform .5s cubic-bezier(.6,.05,.2,1)' }} />
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <FloatingSocials corner="bottom-right" tone={onImage ? 'light' : 'dark'} />
    </div>
  );
}
function HeroPlayfulGalaxy() {
  return <HeroPlayful background={
    <ImageBackground url={GALAXY_URL} opacity={1}
      overlay="radial-gradient(ellipse at 60% 40%, rgba(6,4,20,0.35) 0%, rgba(6,4,20,0.78) 100%)" />
  } />;
}
function HeroPlayfulVangogh() {
  return <HeroPlayful background={
    <ImageBackground url={VANGOGH_URL} opacity={1}
      overlay="linear-gradient(180deg, rgba(8,14,38,0.42) 0%, rgba(8,14,38,0.22) 40%, rgba(8,14,38,0.6) 100%)" />
  } />;
}

/* expose */
function HeroCenterBlobSunset2() {
  return <HeroCenterBlob
    accentOverride="#ffd6b0"
    inkOverride="#fff8ec"
    cursorEffect={() => null}
    background={
      <ImageBackground url={SUNSET2_URL} opacity={1} blur={0}
        overlay="radial-gradient(ellipse 70% 55% at 50% 50%, rgba(8,6,22,0.62) 0%, rgba(8,6,22,0.32) 55%, rgba(8,6,22,0.55) 100%)" />
  } />;
}
function HeroEditorialSunset2() {
  return <HeroEditorial
    accentOverride="#ffd6b0"
    inkOverride="#fff8ec"
    background={
      <ImageBackground url={SUNSET2_URL} opacity={1} blur={0}
        overlay="radial-gradient(ellipse 75% 60% at 50% 50%, rgba(8,6,22,0.66) 0%, rgba(8,6,22,0.36) 55%, rgba(8,6,22,0.6) 100%)" />
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
    position:'fixed',
    width: SIZE,
    height: SIZE,
    pointerEvents:'none',
    zIndex: 9000,
    transition:'transform .55s cubic-bezier(.34,1.56,.64,1)',
  };

  // Anchor + offscreen transforms per edge
  const hidden = {
    top:    'translateY(-100%)',
    bottom: 'translateY(100%)',
    left:   'translateX(-100%)',
    right:  'translateX(100%)',
  }[edge];

  const visible = {
    top:    'translateY(-22%)',  // peek so just the head + a sliver of body shows
    bottom: 'translateY(22%)',
    left:   'translateX(-22%)',
    right:  'translateX(22%)',
  }[edge];

  // Place the bird on the chosen edge
  if (edge === 'top')    Object.assign(containerStyle, { top: 0, left: `${pos}%`, marginLeft: -SIZE/2 });
  if (edge === 'bottom') Object.assign(containerStyle, { bottom: 0, left: `${pos}%`, marginLeft: -SIZE/2 });
  if (edge === 'left')   Object.assign(containerStyle, { left: 0, top: `${pos}%`, marginTop: -SIZE/2 });
  if (edge === 'right')  Object.assign(containerStyle, { right: 0, top: `${pos}%`, marginTop: -SIZE/2 });

  // Bird should "stand" with its body anchored to the edge.
  // We rotate the SVG so the body points toward the edge (out of view) and
  // the head looks into the viewport.
  const baseRotation = {
    top:    180,   // body up & out of frame
    bottom: 0,     // body down & out of frame
    left:   90,    // body to the left & out of frame
    right:  -90,   // body to the right & out of frame
  }[edge];

  // Look animation: subtle head tilt during the "look" phase
  const looking = phase === 'look';
  const tilt = looking ? (variant === 0 ? 12 : variant === 1 ? -10 : 6) : 0;

  // Compose transform: hidden -> visible (edge pop) plus a base rotation for orientation
  const popTransform = (phase === 'enter' || phase === 'look') ? visible : hidden;

  return (
    <div style={containerStyle}>
      <div style={{
        width:'100%', height:'100%',
        transform: popTransform,
        transition:'transform .65s cubic-bezier(.34,1.56,.64,1)',
      }}>
        <div style={{
          width:'100%', height:'100%',
          transform: `rotate(${baseRotation}deg) ${flipped ? 'scaleX(-1)' : ''}`,
        }}>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width:'100%', height:'100%',
              transform: `rotate(${tilt}deg)`,
              transformOrigin:'50% 75%',
              transition:'transform .35s cubic-bezier(.34,1.56,.64,1)',
              pointerEvents:'auto',
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
      <circle cx="44" cy="22" r="3" fill={color}/>
      <circle cx="56" cy="22" r="3" fill={color}/>
    </g>, // two-feather tuft
  ];

  return (
    <svg viewBox="0 0 100 100" style={{ width:'100%', height:'100%', overflow:'visible',
      filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.35))' }}>
      {/* small body sliver below the head — sits inside the offscreen part */}
      <ellipse cx="50" cy="78" rx="22" ry="16" fill={color} />
      {/* head */}
      <circle cx="50" cy="50" r="22" fill={color} />
      {/* tuft */}
      {tufts[variant]}
      {/* eye */}
      <ellipse cx="58" cy="48" rx="3" ry={blink ? 0.4 : 3} fill="#fff8ec"
        style={{ transition:'ry .12s ease' }} />
      <circle cx="59" cy="49" r={blink ? 0 : 1.4} fill="#1a1726" />
      {/* beak */}
      <path d="M 70 52 L 80 50 L 70 56 Z" fill="#f4a261" />
    </svg>
  );
}

export {
  HeroEditorial, HeroEditorialSunset2, HeroTicker,
  HeroCenterBlob, HeroCenterBlobVangogh, HeroCenterBlobCafe, HeroCenterBlobGalaxy, HeroCenterBlobSunset, HeroCenterBlobSunset2,
  HeroPlayful, HeroPlayfulGalaxy, HeroPlayfulVangogh,
  BirdPeekers,
};


