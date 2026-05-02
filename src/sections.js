/* ============================================================
   SECTION OVERLAY — deep navy popup with sunset blurred behind
   ============================================================ */

import React, { useState, useEffect, useRef } from 'react';
import { SECTION_DATA } from './sectionData';

/* ---------- tokens ---------- */
const T = {
  bg: '#0d1130',                 // deep navy
  bgLayer2: '#1a1d3a',
  ink: '#fff8ec',                 // warm cream
  inkSoft: 'rgba(255,248,236,0.78)',
  inkMuted: 'rgba(255,248,236,0.55)',
  hair: 'rgba(255,248,236,0.14)',
  hairStrong: 'rgba(255,248,236,0.28)',
  accent: '#ffd6b0',                 // soft peach (matches sunset hero)
  accent2: '#ff9d6b',                 // burnt copper
  display: 'var(--serif, "EB Garamond", Georgia, serif)',
  body: '"Inter", system-ui, sans-serif',
  mono: '"Inter", system-ui, sans-serif',
};
/* ============================================================
   SHELL — handles hash routing, ESC, animation
   ============================================================ */
function SectionOverlay({ animation = 'origin', backgroundUrl = 'assets/sunset_background.jpeg' }) {
  const [hash, setHash] = useState('');
  const [closing, setClosing] = useState(false);
  const [origin, setOrigin] = useState(null); // {x,y,w,h} viewport coords of the clicked nav item

  // Helper: find a visible nav anchor on the page for a given hash, return inset rect
  const findOriginFor = (h) => {
    const el = document.querySelector(`a[href="#${h}"]`);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return null;
    const W = window.innerWidth, H = window.innerHeight;
    return {
      x: r.left + r.width / 2, y: r.top + r.height / 2,
      w: r.width, h: r.height,
      // insets from viewport edges (for clip-path: inset(top right bottom left))
      top: r.top, right: W - r.right, bottom: H - r.bottom, left: r.left,
    };
  };

  // Intercept nav clicks BEFORE the hash changes so we can capture the origin rect
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const h = a.getAttribute('href').slice(1);
      if (!SECTION_DATA[h]) return;
      const r = a.getBoundingClientRect();
      const W = window.innerWidth, H = window.innerHeight;
      setOrigin({
        x: r.left + r.width / 2, y: r.top + r.height / 2,
        w: r.width, h: r.height,
        top: r.top, right: W - r.right, bottom: H - r.bottom, left: r.left,
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    const sync = () => {
      const h = (window.location.hash || '').replace('#', '');
      if (SECTION_DATA[h]) { setHash(h); setClosing(false); }
      else if (hash) { setClosing(true); setTimeout(() => setHash(''), 380); }
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [hash]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && hash) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = hash ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [hash]);

  const close = () => {
    // Re-capture origin rect on close (the page may have scrolled or been resized;
    // the visible nav item is the one we want to contract back into)
    const newOrigin = findOriginFor(hash);
    if (newOrigin) setOrigin(newOrigin);
    setClosing(true);
    setTimeout(() => {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      setHash('');
    }, 380);
  };

  if (!hash || !SECTION_DATA[hash]) return null;

  const section = SECTION_DATA[hash];
  const animState = closing ? 'out' : 'in';

  // Compute origin point (fallback to center of viewport)
  const ox = origin ? origin.x : window.innerWidth / 2;
  const oy = origin ? origin.y : window.innerHeight / 2;
  const W = window.innerWidth, H = window.innerHeight;
  // Inset values for the rectangular reveal
  const it = origin ? origin.top : H / 2;
  const ir = origin ? origin.right : W / 2;
  const ib = origin ? origin.bottom : H / 2;
  const il = origin ? origin.left : W / 2;

  const useOrigin = animation === 'origin';

  return (
    <div role="dialog" aria-modal="true" aria-label={section.title}
      className={useOrigin ? `overlay-origin-${animState}` : ''}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        '--ox': `${ox}px`,
        '--oy': `${oy}px`,
        '--it': `${it}px`,
        '--ir': `${ir}px`,
        '--ib': `${ib}px`,
        '--il': `${il}px`,
      }}>
      {/* Background — blurred sunset under the navy */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'blur(24px) saturate(0.85)',
        transform: 'scale(1.08)',
      }} />
      {/* Navy overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 30%, ${T.bgLayer2} 0%, ${T.bg} 70%, #06081d 100%)`,
        opacity: 0.92,
      }} />
      {/* Subtle film grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,248,236,0.04) 1px, transparent 1px)',
        backgroundSize: '3px 3px', mixBlendMode: 'overlay', opacity: 0.6,
      }} />

      {/* Content panel */}
      <div className={!useOrigin ? `overlay-content overlay-${animation}-${animState}` : 'overlay-content'} style={{
        position: 'absolute', inset: 0,
        overflow: 'auto',
      }}>
        <OverlayChrome eyebrow={section.eyebrow} title={section.title} onClose={close} />
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 64px 120px' }}>
          {hash === 'bio' && <BioSection data={section} />}
          {hash === 'academia' && <AcademiaSection data={section} />}
          {hash === 'work' && <WorkSection data={section} />}
          {hash === 'projects' && <ProjectsSection data={section} />}
          {hash === 'apparel' && <ApparelSection data={section} />}
          <Footer />
        </div>
      </div>

      <style>{`
        .overlay-content { color: ${T.ink}; font-family: ${T.body}; }
        .overlay-content::-webkit-scrollbar { width: 10px; }
        .overlay-content::-webkit-scrollbar-track { background: transparent; }
        .overlay-content::-webkit-scrollbar-thumb { background: ${T.hairStrong}; border-radius: 8px; }

        /* origin — rectangular reveal from the clicked nav item */
        .overlay-origin-in  { animation: originIn  .58s cubic-bezier(.4,.0,.2,1) both; }
        .overlay-origin-out { animation: originOut .42s cubic-bezier(.6,.0,.4,1) both; }
        @keyframes originIn  {
          from { clip-path: inset(var(--it) var(--ir) var(--ib) var(--il) round 4px); }
          to   { clip-path: inset(0 0 0 0 round 0px); }
        }
        @keyframes originOut {
          from { clip-path: inset(0 0 0 0 round 0px); }
          to   { clip-path: inset(var(--it) var(--ir) var(--ib) var(--il) round 4px); opacity: 0.85; }
        }

        /* fade-scale */
        .overlay-fade-scale-in  { animation: fadescaleIn .42s cubic-bezier(.2,.8,.2,1) both; }
        .overlay-fade-scale-out { animation: fadescaleOut .28s cubic-bezier(.4,.1,.6,1) both; }
        @keyframes fadescaleIn  { from { opacity:0; transform:scale(.985); } to { opacity:1; transform:scale(1); } }
        @keyframes fadescaleOut { to   { opacity:0; transform:scale(.99); } }

        /* curtain (slide up from bottom) */
        .overlay-curtain-in     { animation: curtainIn .55s cubic-bezier(.2,.8,.2,1) both; }
        .overlay-curtain-out    { animation: curtainOut .32s cubic-bezier(.4,.1,.6,1) both; }
        @keyframes curtainIn    { from { transform:translateY(100%); } to { transform:translateY(0); } }
        @keyframes curtainOut   { to   { transform:translateY(100%); } }
      `}</style>
    </div>
  );
}
export { SectionOverlay };

/* ============================================================
   CHROME — top bar with eyebrow / title / close
   ============================================================ */
function OverlayChrome({ eyebrow, title, onClose }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 5,
      backdropFilter: 'blur(8px)',
      background: 'linear-gradient(180deg, rgba(13,17,48,0.88) 0%, rgba(13,17,48,0.65) 80%, rgba(13,17,48,0) 100%)',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '28px 64px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: T.body, fontSize: 13, color: T.accent, marginBottom: 12,
          }}>{eyebrow}</div>
          <h2 style={{
            fontFamily: T.display, fontWeight: 400,
            fontSize: 64, lineHeight: 1, letterSpacing: '-0.01em',
            margin: 0, fontStyle: 'italic',
          }}>{title}</h2>
        </div>
        <button onClick={onClose} aria-label="Close" style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'transparent', border: `1px solid ${T.hairStrong}`,
          color: T.ink, cursor: 'pointer',
          display: 'grid', placeItems: 'center',
          fontSize: 18, fontFamily: T.body,
          transition: 'background .2s, border-color .2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = T.hair; e.currentTarget.style.borderColor = T.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = T.hairStrong; }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{
      marginTop: 80, paddingTop: 32, borderTop: `1px solid ${T.hair}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: T.body, fontSize: 13, color: T.inkMuted,
    }}>
      <span>esc to close</span>
      <span>danielle whisnant · {new Date().getFullYear()}</span>
    </div>
  );
}

/* ============================================================
   BIO — big serif paragraph + portrait + facts column
   ============================================================ */
const BIO_ACCENT_PHRASES = ['technology', 'public health', 'human rights'];

function highlightPhrases(text, phrases, color) {
  let nodes = [text];
  phrases.forEach((phrase, pIdx) => {
    const next = [];
    let done = false;
    nodes.forEach((node) => {
      if (!done && typeof node === 'string') {
        const idx = node.indexOf(phrase);
        if (idx !== -1) {
          if (idx > 0) next.push(node.slice(0, idx));
          next.push(<span key={`acc-${pIdx}`} style={{ color }}>{phrase}</span>);
          if (idx + phrase.length < node.length) next.push(node.slice(idx + phrase.length));
          done = true;
          return;
        }
      }
      next.push(node);
    });
    nodes = next;
  });
  return nodes;
}

function BioSection({ data }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '260px minmax(0, 620px)',
      gap: 64, marginTop: 40,
      justifyContent: 'start',
    }}>
      {/* Left: portrait */}
      <div>
        <img src={data.headshot} alt="Danielle Whisnant"
          style={{
            width: 260, height: 320, objectFit: 'cover',
            filter: 'sepia(0.08) saturate(0.95)',
            border: `1px solid ${T.hairStrong}`,
            display: 'block',
          }} />
      </div>

      {/* Right: prose */}
      <div>
        <div style={{
          fontFamily: T.display, fontSize: 22, lineHeight: 1.65,
          color: T.inkSoft, fontWeight: 300,
        }}>
          {data.paragraphs.map((p, i) => (
            <p key={i} style={{ margin: '0 0 22px' }}>
              {highlightPhrases(p, BIO_ACCENT_PHRASES, T.accent)}
            </p>
          ))}
        </div>

        {data.aside && (
          <div style={{
            marginTop: 36, padding: '24px 28px',
            borderLeft: `2px solid ${T.accent}`,
            background: 'rgba(255,248,236,0.04)',
            fontFamily: T.body, fontSize: 16, lineHeight: 1.6,
            color: T.inkSoft,
          }}>
            {data.aside}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   ACADEMIA — left rail nav (sticky scrollspy), then sections:
   intro · education · research (horizontal timeline) · publications · coursework
   ============================================================ */
const ACADEMIA_SECTIONS = [
  { id: 'intro', label: 'Intro' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'coursework', label: 'Coursework' },
];

function AcademiaSection({ data }) {
  const [active, setActive] = useState('intro');
  const refs = useRef({});

  // Scrollspy: which section is currently in view inside the overlay scroller
  useEffect(() => {
    const root = document.querySelector('.overlay-content') || null;
    const io = new IntersectionObserver((entries) => {
      // pick the entry with greatest intersection ratio that's intersecting
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.dataset.acid);
    }, { root, rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    ACADEMIA_SECTIONS.forEach(s => { if (refs.current[s.id]) io.observe(refs.current[s.id]); });
    return () => io.disconnect();
  }, []);

  const jump = (id) => (e) => {
    e.preventDefault();
    const node = refs.current[id];
    if (!node) return;
    const root = document.querySelector('.overlay-content');
    if (root) {
      const top = node.offsetTop - 24;
      root.scrollTo({ top, behavior: 'smooth' });
    } else {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr', gap: 64, marginTop: 40,
      alignItems: 'start',
    }}>
      {/* Left rail */}
      <aside style={{ position: 'sticky', top: 140, alignSelf: 'start' }}>
        <div style={{
          fontFamily: T.display, fontSize: 16, fontStyle: 'italic', color: T.inkSoft, marginBottom: 18,
          paddingBottom: 12, borderBottom: `1px solid ${T.hair}`,
        }}>Contents</div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ACADEMIA_SECTIONS.map((s, i) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a href={`#academia/${s.id}`} onClick={jump(s.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  fontFamily: T.body, fontSize: 14, textDecoration: 'none',
                  color: isActive ? T.accent : T.inkSoft,
                  padding: '4px 0',
                  transition: 'color .25s ease',
                }}>
                  <span style={{
                    width: isActive ? 22 : 12, height: 1,
                    background: isActive ? T.accent : T.hair,
                    transition: 'width .3s cubic-bezier(.2,.8,.2,1), background .25s ease',
                    flexShrink: 0,
                  }} />
                  <span>{s.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </aside>

      {/* Main content */}
      <div>
        <section ref={el => refs.current.intro = el} data-acid="intro" style={{ scrollMarginTop: 24 }}>
          <p style={{
            fontFamily: T.display, fontSize: 19, lineHeight: 1.5,
            color: T.inkSoft, fontWeight: 300, fontStyle: 'italic',
            margin: '0 0 72px', maxWidth: 820,
          }}>{data.intro}</p>
        </section>

        <div ref={el => refs.current.education = el} data-acid="education" style={{ scrollMarginTop: 24 }}>
          {/* Education */}
          <SectionLabel>Education</SectionLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            marginBottom: 72,
          }}>
            {data.education.map((d, i) => (
              <EducationCard key={i} d={d} />
            ))}
          </div>
        </div>

        {/* Research */}
        <div ref={el => refs.current.research = el} data-acid="research" style={{ scrollMarginTop: 24 }}>
          <div style={{
            fontFamily: T.display, fontSize: 22, fontStyle: 'italic', fontWeight: 400,
            color: T.ink, marginBottom: 28,
            paddingBottom: 14, borderBottom: `1px solid ${T.hair}`,
            letterSpacing: '-0.005em',
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
          }}>
            <span>Research</span>
            <span style={{
              fontFamily: T.body, fontSize: 13, fontStyle: 'italic',
              color: T.inkSoft, fontWeight: 400,
            }}>
              Click on the timeline below to read about my work at each institution.
            </span>
          </div>
          <ResearchTimeline roles={data.research || []} />
        </div>

        {/* Publications */}
        <div ref={el => refs.current.publications = el} data-acid="publications" style={{ scrollMarginTop: 24 }}>
          <SectionLabel>Publications & Reports</SectionLabel>
          <ol style={{ listStyle: 'none', margin: '0 0 72px', padding: 0 }}>
            {data.publications.map((p, i) => (
              <li key={i} style={{
                padding: '24px 0',
                borderBottom: i === data.publications.length - 1 ? 'none' : `1px solid ${T.hair}`,
                display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 24, alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontFamily: T.display, fontSize: 19, lineHeight: 1.35, color: T.ink, fontStyle: 'italic', marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontFamily: T.body, fontSize: 13, color: T.inkSoft, marginBottom: p.note ? 4 : 0 }}>{p.org}</div>
                  {p.note && <div style={{ fontFamily: T.body, fontSize: 12, color: T.inkMuted, fontStyle: 'italic' }}>{p.note}</div>}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: T.mono, fontSize: 11, color: T.accent, textDecoration: 'none', whiteSpace: 'nowrap',
                  borderBottom: `1px solid ${T.accent}`, paddingBottom: 2,
                }}>View →</a>
              </li>
            ))}
          </ol>
        </div>

        {/* Coursework */}
        <div ref={el => refs.current.coursework = el} data-acid="coursework" style={{ scrollMarginTop: 24 }}>
          <SectionLabel>Coursework</SectionLabel>
          <div>
            {data.coursework.map((c) => <CourseworkAccordion key={c.cat} cat={c.cat} items={c.items} />)}
          </div>
        </div>
      </div>{/* /main column */}
    </div>
  );
}

/* ============================================================
   DEGREE CARD — concentration / competencies / coursework
   collapsed by default, expandable.
   ============================================================ */
function EducationCard({ d }) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!(d.concentration || (d.competencies && d.competencies.length) || (d.coreCourses && d.coreCourses.length));

  return (
    <>
      <div style={{
        padding: '28px 28px 32px',
        border: `1px solid ${T.hairStrong}`,
        background: 'rgba(255,248,236,0.025)',
        display: 'flex', flexDirection: 'column',
        height: '100%',
      }}>
        <div style={{
          fontFamily: T.mono, fontSize: 11, color: T.accent, marginBottom: 14,
        }}>{d.year}</div>
        <h3 style={{
          fontFamily: T.display, fontSize: 26, lineHeight: 1.2, fontWeight: 400,
          fontStyle: 'italic', margin: '0 0 8px', color: T.ink,
        }}>{d.degree}</h3>
        <div style={{ fontFamily: T.body, fontSize: 14, color: T.inkSoft }}>{d.institution}</div>

        {/* spacer pushes the link to the bottom of the card */}
        <div style={{ flex: 1 }} />

        {hasDetails && (
          <button onClick={() => setOpen(true)} style={{
            marginTop: 22, alignSelf: 'flex-start',
            background: 'transparent', border: 'none', padding: 0,
            cursor: 'pointer', textAlign: 'left',
            fontFamily: T.mono, fontSize: 11, color: T.accent, borderBottom: `1px solid ${T.accent}`, paddingBottom: 3,
            transition: 'opacity .2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
            Learn more about my concentration →
          </button>
        )}

        {d.thesis && (
          <div style={{ marginTop: 18, paddingTop: 18, borderTop: `1px solid ${T.hair}` }}>
            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.inkMuted, marginBottom: 8 }}>Thesis</div>
            <div style={{ fontFamily: T.display, fontSize: 16, lineHeight: 1.4, fontStyle: 'italic', color: T.ink, marginBottom: 10 }}>{d.thesis}</div>
            <div style={{ fontFamily: T.body, fontSize: 13, color: T.inkMuted, lineHeight: 1.5 }}>
              {d.thesisAdvisor}<br />
              {d.partner}
            </div>
          </div>
        )}
      </div>

      {open && hasDetails && <DegreeDetailModal d={d} onClose={() => setOpen(false)} />}
    </>
  );
}

/* Modal popup with the full concentration / competencies / coursework content. */
function DegreeDetailModal({ d, onClose }) {
  const [openComp, setOpenComp] = useState(true);
  const [openCourse, setOpenCourse] = useState(true);
  const hasComp = d.competencies && d.competencies.length > 0;
  const hasCourse = d.coreCourses && d.coreCourses.length > 0;

  // Close on Escape — but stop propagation so the section overlay's ESC handler doesn't fire too
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose]);

  const accordionButton = {
    width: '100%', padding: '18px 0', background: 'transparent', border: 'none',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    color: T.ink, cursor: 'pointer',
    fontFamily: T.display, fontSize: 16, fontStyle: 'italic', fontWeight: 400,
    textAlign: 'left',
  };
  const accordionMeta = {
    fontFamily: T.body, fontSize: 12, color: T.accent,
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1100,
      background: 'rgba(6, 8, 29, 0.72)',
      backdropFilter: 'blur(6px)',
      display: 'grid', placeItems: 'center',
      padding: 32,
      animation: 'degreeModalFadeIn .28s ease both',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: T.bg,
        border: `1px solid ${T.hairStrong}`,
        maxWidth: 720, width: '100%',
        maxHeight: '85vh', overflow: 'auto',
        padding: '64px 56px 56px',
        position: 'relative',
        animation: 'degreeModalSlideIn .35s cubic-bezier(.2,.8,.2,1) both',
      }}>
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 18, right: 18,
          width: 36, height: 36, borderRadius: '50%',
          background: 'transparent', border: `1px solid ${T.hairStrong}`,
          color: T.ink, cursor: 'pointer', display: 'grid', placeItems: 'center',
          transition: 'background .2s, border-color .2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = T.hair; e.currentTarget.style.borderColor = T.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = T.hairStrong; }}>
          <svg width="12" height="12" viewBox="0 0 14 14"><path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
        </button>

        {d.concentration && (
          <div style={{
            fontFamily: T.body, fontSize: 14, lineHeight: 1.65,
            color: T.inkSoft, marginBottom: 32,
          }}>
            {d.concentration}
          </div>
        )}

        {hasComp && (
          <div style={{ borderTop: `1px solid ${T.hair}`, borderBottom: `1px solid ${T.hair}` }}>
            <button onClick={() => setOpenComp(!openComp)} style={accordionButton}>
              <span>my degree's competencies</span>
              <span style={accordionMeta}>{d.competencies.length} {openComp ? '−' : '+'}</span>
            </button>
            {openComp && (
              <div style={{ paddingBottom: 22 }}>
                {d.competencies.map((c, k) => (
                  <div key={k} style={{
                    display: 'grid', gridTemplateColumns: '44px 1fr', gap: 18,
                    padding: '14px 0',
                    borderTop: `1px solid ${T.hair}`,
                    alignItems: 'baseline',
                  }}>
                    <span style={{
                      fontFamily: T.mono, fontSize: 11, color: T.accent,
                      letterSpacing: 1, fontVariantNumeric: 'tabular-nums',
                    }}>{String(k + 1).padStart(2, '0')}</span>
                    <span style={{
                      fontFamily: T.body, fontSize: 14, lineHeight: 1.55, color: T.inkSoft,
                    }}>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {hasCourse && (
          <div style={{
            borderTop: hasComp ? 'none' : `1px solid ${T.hair}`,
            borderBottom: `1px solid ${T.hair}`,
          }}>
            <button onClick={() => setOpenCourse(!openCourse)} style={accordionButton}>
              <span>coursework</span>
              <span style={accordionMeta}>{d.coreCourses.length} {openCourse ? '−' : '+'}</span>
            </button>
            {openCourse && (
              <>
                {d.coreCourses.some(c => c.concentration) && (
                  <div style={{
                    fontFamily: T.body, fontSize: 11, fontStyle: 'italic',
                    color: T.inkMuted, padding: '0 0 10px',
                  }}>
                    <span style={{ color: T.inkSoft, marginRight: 4 }}>★</span>
                    core concentration course
                  </div>
                )}
                <div style={{
                  paddingBottom: 22,
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                  columnGap: 28, rowGap: 0,
                }}>
                  {d.coreCourses.map((c, k) => (
                    <div key={k} style={{
                      display: 'flex', flexDirection: 'column', gap: 4,
                      padding: '14px 0',
                      borderTop: `1px solid ${T.hair}`,
                    }}>
                      <span style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1, color: T.accent }}>
                        {c.concentration && <span style={{ marginRight: 6 }}>★</span>}
                        {c.code}
                      </span>
                      <span style={{ fontFamily: T.body, fontSize: 13.5, lineHeight: 1.4, color: T.ink }}>{c.title}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes degreeModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes degreeModalSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   RESEARCH TIMELINE — horizontal, oldest → newest.
   Click a chip to expand a detail card below. Up to 5–6 roles fit
   in the column without scrolling; if more, use overflow scroll.
   ============================================================ */
function ResearchTimeline({ roles }) {
  // Sort oldest → newest by .start (numeric)
  const sorted = [...roles].sort((a, b) => (a.start || 0) - (b.start || 0));
  const [openIdx, setOpenIdx] = useState(-1);
  const open = openIdx >= 0 ? sorted[openIdx] : null;

  return (
    <div style={{ marginBottom: 72 }}>
      {/* Track */}
      <div style={{ position: 'relative', padding: '12px 0 28px' }}>
        {/* spine */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 32, height: 1,
          background: T.hair,
        }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${sorted.length}, minmax(0, 1fr))`,
          gap: 0,
          position: 'relative',
        }}>
          {sorted.map((r, i) => {
            const isOpen = openIdx === i;
            return (
              <button key={i} onClick={() => setOpenIdx(isOpen ? -1 : i)} style={{
                background: 'transparent', border: 'none', padding: '0 8px',
                cursor: 'pointer', textAlign: 'left',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0,
                color: T.ink, position: 'relative',
              }}>
                <span style={{
                  fontFamily: T.mono, fontSize: 10, color: isOpen ? T.accent : T.inkMuted, marginBottom: 14, transition: 'color .25s',
                }}>{r.year}</span>
                {/* tick on the spine */}
                <span style={{
                  position: 'absolute', left: 8, top: 32,
                  width: isOpen ? 11 : 1, height: isOpen ? 11 : 9,
                  borderRadius: isOpen ? '50%' : 0,
                  background: isOpen ? T.accent : T.hairStrong,
                  transform: isOpen ? 'translate(-1px, -5px)' : 'translateY(-4px)',
                  transition: 'all .25s ease',
                  pointerEvents: 'none',
                }} />
                <span style={{
                  fontFamily: T.display, fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.25, color: isOpen ? T.ink : T.inkSoft,
                  transition: 'color .25s', marginTop: 14,
                }}>{r.chipLabel || shortenOrg(r.org)}</span>

              </button>
            );
          })}
        </div>
      </div>

      {/* Detail card */}
      <div style={{
        maxHeight: open ? 600 : 0,
        overflow: 'hidden',
        transition: 'max-height .45s cubic-bezier(.2,.8,.2,1)',
      }}>
        {open && (
          <div style={{
            padding: '28px 32px',
            border: `1px solid ${T.hairStrong}`,
            background: 'rgba(255,248,236,0.025)',
            display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32,
          }}>
            <div>
              <div style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, marginBottom: 14 }}>{open.year}</div>
              <div style={{ fontFamily: T.display, fontSize: 14, color: T.inkSoft, fontStyle: 'italic' }}>
                {open.role}
              </div>
              {open.advisor && (
                <div style={{ fontFamily: T.body, fontSize: 12, color: T.inkMuted, marginTop: 8, lineHeight: 1.5 }}>
                  {open.advisor}
                </div>
              )}
            </div>
            <div>
              <h4 style={{
                fontFamily: T.display, fontSize: 22, lineHeight: 1.25, fontWeight: 400,
                fontStyle: 'italic', margin: '0 0 6px', color: T.ink,
              }}>{open.org}</h4>
              {open.sub && (
                <div style={{
                  fontFamily: T.body, fontSize: 13, color: T.inkSoft,
                  marginBottom: 14, lineHeight: 1.5,
                }}>{open.sub}</div>
              )}
              <ul style={{
                margin: 0, padding: 0, listStyle: 'none',
                fontFamily: T.body, fontSize: 14, lineHeight: 1.6, color: T.inkSoft
              }}>
                {open.bullets.map((b, j) => (
                  <li key={j} style={{ paddingLeft: 18, position: 'relative', marginBottom: 6 }}>
                    <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 1, background: T.accent }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Shorten very long org names for the chip label
function shortenOrg(s) {
  if (!s) return '';
  // take portion before " · " if present
  const head = s.split(' · ')[0];
  return head;
}

function CourseworkAccordion({ cat, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: `1px solid ${T.hair}` }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', padding: '18px 0', background: 'transparent', border: 'none',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        color: T.ink, cursor: 'pointer', fontFamily: T.display, fontSize: 17, fontWeight: 400,
        fontStyle: 'italic', textAlign: 'left',
      }}>
        <span>{cat}</span>
        <span style={{ fontFamily: T.body, fontSize: 12, color: T.accent, }}>
          {items.length} {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }}>
          {items.map((c, i) => (
            <div key={i} style={{ paddingBottom: 12, borderBottom: `1px dashed ${T.hair}` }}>
              <div style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, marginBottom: 3 }}>{c.code}</div>
              <div style={{ fontFamily: T.body, fontSize: 14, color: T.inkSoft }}>{c.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   WORK — two subsections (Internships, Volunteer), each its own
   vertical timeline. Rows collapsed by default, expand on click.
   ============================================================ */
function WorkSection({ data }) {
  return (
    <div style={{ marginTop: 40 }}>
      {/* <p style={{
        fontFamily: T.display, fontSize: 17, lineHeight: 1.55, fontWeight: 300,
        fontStyle:'italic', color: T.inkSoft, margin:'0 0 56px', maxWidth: 720,
      }}>Work outside of academia. .</p> */}

      <SectionLabel>Internships</SectionLabel>
      <WorkGroup roles={data.internships || []} keyBase="i" />

      <div style={{ height: 56 }} />

      <SectionLabel>Volunteer</SectionLabel>
      <WorkGroup roles={data.volunteer || []} keyBase="v" />
    </div>
  );
}

function WorkGroup({ roles, keyBase }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <ol style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, position: 'relative' }}>
      {/* spine */}
      <div style={{
        position: 'absolute', left: 110, top: 8, bottom: 8,
        width: 1, background: T.hair,
      }} />
      {roles.map((r, i) => (
        <WorkRow key={`${keyBase}-${i}`} role={r} idx={i}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          isLast={i === roles.length - 1} />
      ))}
    </ol>
  );
}

function WorkRow({ role, idx, isOpen, onToggle, isLast }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // The overlay scroll container is the closest scrollable ancestor (.overlay-content)
    const root = node.closest('.overlay-content') || null;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setInView(true); }),
      { root, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <li ref={ref} style={{
      display: 'grid', gridTemplateColumns: '120px 1fr',
      gap: 40, padding: isOpen ? '24px 0 32px' : '20px 0',
      borderBottom: isLast ? 'none' : `1px solid ${T.hair}`,
      position: 'relative',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity .7s cubic-bezier(.2,.8,.2,1) ${idx * 0.04}s, transform .7s cubic-bezier(.2,.8,.2,1) ${idx * 0.04}s, padding .35s cubic-bezier(.2,.8,.2,1)`,
    }}>
      <div style={{ position: 'relative' }}>
        <span style={{
          fontFamily: T.mono, fontSize: 11, color: T.accent,
        }}>{role.year}</span>
        <span style={{
          position: 'absolute', left: 110, top: 6, transform: 'translateX(-50%)',
          width: isOpen ? 12 : 9, height: isOpen ? 12 : 9, borderRadius: '50%',
          background: T.accent, boxShadow: `0 0 0 4px ${T.bg}`,
          transition: 'width .3s ease, height .3s ease',
        }} />
        {/* pulse ring */}
        {inView && (
          <span aria-hidden style={{
            position: 'absolute', left: 110, top: 6, transform: 'translate(-50%, -50%)',
            width: 9, height: 9, borderRadius: '50%',
            border: `1px solid ${T.accent}`,
            animation: `workPing 1.4s ease-out ${idx * 0.04}s 1 both`, pointerEvents: 'none',
          }} />
        )}
      </div>

      <button onClick={onToggle} style={{
        background: 'transparent', border: 'none', padding: 0, textAlign: 'left',
        color: T.ink, cursor: 'pointer', width: '100%',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: T.display, fontSize: 26, lineHeight: 1.2, fontWeight: 400,
              fontStyle: 'italic', margin: '0 0 4px', color: T.ink,
            }}>{role.org}</h3>
            <div style={{
              fontFamily: T.body, fontSize: 14, color: T.inkSoft,
              display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap',
            }}>
              <span>{role.role}</span>
              {role.tag && <span style={{
                fontFamily: T.mono, fontSize: 9, color: T.accent2,
                border: `1px solid ${T.accent2}`, padding: '3px 8px',
              }}>{role.tag}</span>}
            </div>
          </div>
          <span style={{
            fontFamily: T.mono, fontSize: 11, color: T.accent,
            whiteSpace: 'nowrap', flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform .3s ease',
            display: 'inline-block',
          }}>{isOpen ? '— close' : 'open +'}</span>
        </div>

        <div style={{
          maxHeight: isOpen ? 600 : 0,
          overflow: 'hidden',
          transition: 'max-height .45s cubic-bezier(.2,.8,.2,1)',
        }}>
          <ul style={{
            margin: '18px 0 0', padding: 0, listStyle: 'none',
            fontFamily: T.body, fontSize: 14, lineHeight: 1.6, color: T.inkSoft,
          }}>
            {role.bullets.map((b, j) => (
              <li key={j} style={{ paddingLeft: 18, position: 'relative', marginBottom: 6 }}>
                <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 1, background: T.accent }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </button>
      <style>{`
        @keyframes workPing {
          0%   { width: 9px; height: 9px; opacity: 1; }
          100% { width: 36px; height: 36px; opacity: 0; }
        }
      `}</style>
    </li>
  );
}

/* ============================================================
   PROJECTS — expandable rows
   ============================================================ */
function ProjectsSection({ data }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div style={{ marginTop: 40 }}>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {data.items.map((p, i) => (
          <ProjectRow key={i} idx={i} project={p}
            open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            isLast={i === data.items.length - 1} />
        ))}
      </ol>
    </div>
  );
}

function ProjectRow({ idx, project, open, onToggle, isLast }) {
  return (
    <li style={{
      borderTop: idx === 0 ? `1px solid ${T.hair}` : 'none',
      borderBottom: `1px solid ${T.hair}`,
    }}>
      <button onClick={onToggle} style={{
        width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '28px 0', textAlign: 'left', color: T.ink,
        display: 'grid', gridTemplateColumns: '48px 1fr 1.4fr auto', gap: 28, alignItems: 'center',
      }}>
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, }}>{String(idx + 1).padStart(2, '0')}</span>
        <h3 style={{
          fontFamily: T.display, fontSize: 28, lineHeight: 1.15, fontWeight: 400,
          fontStyle: 'italic', margin: 0, color: T.ink,
        }}>{project.title}</h3>
        <p style={{
          margin: 0, fontFamily: T.body, fontSize: 14, lineHeight: 1.5, color: T.inkSoft,
          opacity: open ? 0 : 1,
          transition: 'opacity .25s ease',
        }}>{project.blurb}</p>
        <span style={{
          fontFamily: T.mono, fontSize: 11, color: T.accent,
          display: 'inline-block',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform .3s ease',
        }}>{open ? '— close' : 'open +'}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 40, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }}>
          <div>
            {project.award && (
              <div style={{
                display: 'inline-block', marginBottom: 20,
                fontFamily: T.mono, fontSize: 10, color: T.accent2, border: `1px solid ${T.accent2}`, padding: '6px 12px',
              }}>★ {project.award}</div>
            )}
            <div style={{
              fontFamily: T.body, fontSize: 14.5, lineHeight: 1.65, color: T.inkSoft,
            }}>
              {project.prose.map((para, i) => <p key={i} style={{ margin: '0 0 14px' }}>{para}</p>)}
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 24 }}>
              {project.links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: T.mono, fontSize: 11, color: T.accent, textDecoration: 'none',
                  borderBottom: `1px solid ${T.accent}`, paddingBottom: 3,
                }}>{l.label} →</a>
              ))}
            </div>
          </div>
          <div>
            <ProjectGallery project={project} />
          </div>
        </div>
      )}
    </li>
  );
}

/* ============================================================
   APPAREL — lookbook editorial grid
   ============================================================ */
function ProjectGallery({ project }) {
  const imgs = (project.images && project.images.length > 0) ? project.images : [project.image];
  const [active, setActive] = useState(0);
  const safeActive = Math.min(active, imgs.length - 1);

  return (
    <div>
      <div style={{
        position: 'relative',
        width: '100%',
        background: T.bg,
        border: `1px solid ${T.hairStrong}`,
        overflow: 'hidden',
      }}>
        <img src={imgs[safeActive]} alt={project.title}
          key={safeActive}
          style={{
            width: '100%', height: 'auto', maxHeight: 360, objectFit: 'cover',
            display: 'block',
            animation: 'projGalleryFade .35s ease both',
          }} />

        {imgs.length > 1 && (
          <>
            <button onClick={() => setActive((safeActive - 1 + imgs.length) % imgs.length)}
              aria-label="Previous image" style={galleryArrowStyle('left')}>‹</button>
            <button onClick={() => setActive((safeActive + 1) % imgs.length)}
              aria-label="Next image" style={galleryArrowStyle('right')}>›</button>
            <div style={{
              position: 'absolute', bottom: 12, left: 0, right: 0,
              display: 'flex', justifyContent: 'center', gap: 6,
              pointerEvents: 'none',
            }}>
              {imgs.map((_, i) => (
                <span key={i} style={{
                  width: i === safeActive ? 22 : 6, height: 4,
                  background: i === safeActive ? T.accent : 'rgba(255,248,236,0.4)',
                  transition: 'width .25s, background .25s',
                }} />
              ))}
            </div>
          </>
        )}
      </div>

      {imgs.length > 1 && (
        <div style={{
          marginTop: 12, display: 'grid',
          gridTemplateColumns: `repeat(${imgs.length}, 1fr)`,
          gap: 8,
        }}>
          {imgs.map((src, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Image ${i + 1}`} style={{
              padding: 0, background: 'transparent', cursor: 'pointer',
              border: i === safeActive ? `1px solid ${T.accent}` : `1px solid ${T.hair}`,
              opacity: i === safeActive ? 1 : 0.55,
              transition: 'opacity .2s, border-color .2s',
              overflow: 'hidden', display: 'block',
            }}
              onMouseEnter={(e) => { if (i !== safeActive) e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { if (i !== safeActive) e.currentTarget.style.opacity = '0.55'; }}>
              <img src={src} alt="" style={{
                width: '100%', height: 64, objectFit: 'cover', display: 'block',
              }} />
            </button>
          ))}
        </div>
      )}

      <style>{`@keyframes projGalleryFade { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}

function galleryArrowStyle(side) {
  return {
    position: 'absolute', top: '50%', [side]: 12, transform: 'translateY(-50%)',
    width: 36, height: 36, borderRadius: '50%',
    background: 'rgba(6,8,29,0.55)', backdropFilter: 'blur(6px)',
    border: `1px solid rgba(255,248,236,0.25)`,
    color: T.ink, fontSize: 22, lineHeight: 1, cursor: 'pointer',
    display: 'grid', placeItems: 'center',
    transition: 'background .2s, border-color .2s',
  };
}

/* ============================================================
   APPAREL — lookbook editorial grid (collage)
   ============================================================ */
function ApparelSection({ data }) {
  // Flatten all photos with metadata. Each photo carries its own (optional) models override;
  // if absent, fall back to the shoot's full models list.
  const photos = [];
  data.collections.forEach((c) => {
    (c.photos || []).forEach((p) => {
      photos.push({
        src: p.src,
        shoot: c.name,
        season: c.season,
        models: p.models && p.models.length ? p.models : c.models,
        description: c.description,
      });
    });
  });

  // Build per-shoot photo queues, then round-robin pick from them so all four
  // shoots are interleaved through the masonry instead of clustered.
  const queues = {};
  data.collections.forEach((c) => { queues[c.name] = []; });
  data.collections.forEach((c) => {
    (c.photos || []).forEach((p) => {
      const matched = photos.find((x) => x.src === p.src && x.shoot === c.name);
      if (matched) queues[c.name].push(matched);
    });
  });
  const shootOrder = data.collections.map((c) => c.name);
  const ordered = [];
  let added = true;
  while (added) {
    added = false;
    for (const name of shootOrder) {
      const q = queues[name];
      if (q && q.length) {
        ordered.push(q.shift());
        added = true;
      }
    }
  }
  // Fallback: any photo missed by the queues
  photos.forEach((p) => { if (!ordered.includes(p)) ordered.push(p); });

  return (
    <div style={{ marginTop: 40 }}>
      <p style={{
        fontFamily: T.display, fontSize: 18, lineHeight: 1.55, fontWeight: 300,
        fontStyle: 'italic', color: T.inkSoft, margin: '0 0 56px', maxWidth: 720,
      }}>{data.statement}</p>

      {/* CSS columns masonry — preserves each photo's full aspect ratio, no cropping */}
      <div style={{
        columnCount: 3,
        columnGap: 16,
      }}
        className="apparelMasonry">
        {ordered.map((p, i) => (
          <ApparelTile key={i} photo={p} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apparelMasonry { column-count: 2 !important; }
        }
        @media (max-width: 560px) {
          .apparelMasonry { column-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}

function ApparelTile({ photo }) {
  const [hover, setHover] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        breakInside: 'avoid',
        margin: '0 0 16px',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${T.hairStrong}`,
        cursor: 'default',
      }}>
      <img src={photo.src} alt={photo.shoot} style={{
        width: '100%', height: 'auto', display: 'block',
        transform: hover ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform .6s cubic-bezier(.2,.8,.2,1), filter .35s ease',
        filter: hover ? 'brightness(0.55)' : 'brightness(1)',
      }} />
      {/* hover overlay */}
      <figcaption style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '20px 22px',
        opacity: hover ? 1 : 0,
        transition: 'opacity .3s ease',
        pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(6,8,29,0.85) 0%, rgba(6,8,29,0.35) 60%, rgba(6,8,29,0) 100%)',
      }}>
        <div style={{
          fontFamily: T.mono, fontSize: 10, color: T.accent, marginBottom: 6,
        }}>{photo.season}</div>
        <div style={{
          fontFamily: T.display, fontSize: 26, lineHeight: 1.05,
          fontWeight: 400, fontStyle: 'italic',
          color: T.ink, marginBottom: 12,
        }}>{photo.shoot}</div>
        <div style={{
          fontFamily: T.mono, fontSize: 9, color: T.inkMuted, marginBottom: 4,
        }}>Models</div>
        <div style={{
          fontFamily: T.body, fontSize: 12, lineHeight: 1.5,
          color: T.inkSoft,
        }}>{photo.models.join(' · ')}</div>
      </figcaption>
    </figure>
  );
}

/* ---------- helpers ---------- */
function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: T.display, fontSize: 22, fontStyle: 'italic', fontWeight: 400,
      color: T.ink, marginBottom: 28,
      paddingBottom: 14, borderBottom: `1px solid ${T.hair}`,
      letterSpacing: '-0.005em',
    }}>{children}</div>
  );
}
