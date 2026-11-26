import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown,
  Atom, FlaskConical, Cpu, Leaf,
  Zap, Globe2, BookOpen, Users, FileText, Award,
  Microscope, Layers, Binary, Wind, Heart, Beaker,
} from 'lucide-react'

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────
function HeroSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', paddingTop: 80, overflow: 'hidden',
      }}
    >
      {/* Subtle top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)',
        opacity: 0.5,
      }} />

      <div className="container-xl" style={{ position: 'relative', textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>

        {/* Title */}
        <h1
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            lineHeight: 1.07,
            marginBottom: 24,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
          }}
        >
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', color: 'var(--text)', marginBottom: 4 }}>
            Advances in Science,
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', color: 'var(--accent)', marginBottom: 4 }}>
            Engineering &amp; Technology
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)', color: 'var(--muted)', fontWeight: 500 }}>
            Research
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'var(--muted)', fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.75,
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s',
          }}
        >
          A rigorous scholarly platform for disseminating high-quality original research
          and critical reviews across disciplinary boundaries.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 60,
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s',
          }}
        >
          <Link to="/submit" id="hero-submit-btn" className="btn-primary">
            Submit Manuscript <ArrowRight size={15} />
          </Link>
          <Link to="/aim-scope" id="hero-scope-btn" className="btn-secondary">
            Explore Scope <BookOpen size={15} />
          </Link>
        </div>

        {/* Stats Row — 4-grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.45s, transform 0.55s ease 0.45s',
          }}
        >
          {[
            { label: 'Research Domains', value: '8+' },
            { label: 'Editorial Experts', value: '3' },
            { label: 'Open Access',       value: '100%' },
            { label: 'Peer Reviewed',     value: 'Yes' },
          ].map(stat => (
            <div key={stat.label} className="stat-card">
              <div style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.03em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.35,
        animation: 'bounce 1.8s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={14} color="var(--muted)" />
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Focus Areas
// ─────────────────────────────────────────────
const focusAreas = [
  { icon: Atom,       label: 'Physics',              desc: 'Fundamental & applied physics',           accent: 'var(--accent)'   },
  { icon: FlaskConical,label:'Chemistry',            desc: 'Organic, inorganic & analytical',         accent: 'var(--accent-2)' },
  { icon: Microscope, label: 'Nanotechnology',       desc: 'Nanoscale materials & devices',           accent: 'var(--accent-3)' },
  { icon: Layers,     label: 'Materials Science',    desc: 'Advanced materials & characterization',   accent: 'var(--accent-4)' },
  { icon: Leaf,       label: 'Biological Sciences',  desc: 'Life sciences & biotechnology',           accent: 'var(--accent-2)' },
  { icon: Binary,     label: 'Computing & Digital',  desc: 'AI, computation & digital tech',          accent: 'var(--accent)'   },
  { icon: Zap,        label: 'Energy Systems',       desc: 'Renewable & sustainable energy',          accent: 'var(--accent-3)' },
  { icon: Wind,       label: 'Environmental Tech',   desc: 'Environmental monitoring & remediation',  accent: 'var(--accent-2)' },
  { icon: Heart,      label: 'Health Technologies',  desc: 'Biomedical & health-related tech',        accent: 'var(--accent-4)' },
  { icon: Cpu,        label: 'Engineering',          desc: 'Interdisciplinary engineering',           accent: 'var(--accent)'   },
  { icon: Globe2,     label: 'Mathematical Sciences',desc: 'Applied mathematics & modelling',         accent: 'var(--accent-3)' },
  { icon: Beaker,     label: 'Research Methods',     desc: 'Novel methodologies & instrumentation',   accent: 'var(--accent-2)' },
]

function FocusAreasSection() {
  return (
    <section id="focus-areas" className="section-pad" style={{ background: 'var(--surface-grid)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
      <div className="container-xl">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label">Research Domains</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Broad Coverage, <span style={{ color: 'var(--accent)' }}>Deep Impact</span></h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', fontSize: 14, lineHeight: 1.75 }}>
            ASETR welcomes contributions spanning fundamental and applied research across diverse scientific disciplines.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {focusAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.label}
                className="glass"
                style={{
                  padding: '20px', border: `1px solid color-mix(in srgb, ${area.accent} 25%, var(--glass-border))`,
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `3px 3px 0 ${area.accent}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-glass)'; }}
              >
                <div style={{ width: 36, height: 36, background: `color-mix(in srgb, ${area.accent} 15%, transparent)`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon size={18} color={area.accent} />
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 13, color: area.accent, marginBottom: 4 }}>{area.label}</h3>
                <p style={{ fontSize: 12, color: 'var(--subtle)', lineHeight: 1.6 }}>{area.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Aim & Scope Preview
// ─────────────────────────────────────────────
function AimScopePreview() {
  const highlights = [
    { text: 'Rigorous double-blind peer review process',  color: 'var(--accent)'   },
    { text: 'Open access publication model',              color: 'var(--accent-2)' },
    { text: 'Interdisciplinary research welcome',         color: 'var(--accent-3)' },
    { text: 'Rapid review & publication timeline',        color: 'var(--accent-4)' },
    { text: 'International editorial expertise',          color: 'var(--accent)'   },
    { text: 'High-quality original research & reviews',   color: 'var(--accent-2)' },
  ]

  return (
    <section id="about-section" className="section-pad">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="label">About the Journal</span>
            <h2 className="heading-lg" style={{ marginBottom: 20 }}>
              Where Science Meets<br /><span style={{ color: 'var(--accent)' }}>Innovation</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 16, fontSize: 15 }}>
              Addressing fundamental scientific questions increasingly requires the integration
              of knowledge, methodologies, and enabling technologies across disciplinary boundaries.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 32, fontSize: 15 }}>
              ASETR provides a rigorous scholarly platform for disseminating high-quality
              original research and critical reviews in physics, chemistry, mathematical sciences,
              biological sciences, and related fields.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link to="/aim-scope" id="about-scope-btn" className="btn-primary">Full Aim &amp; Scope</Link>
              <Link to="/submit"    id="about-submit-btn" className="btn-ghost">Submit Research</Link>
            </div>
          </div>

          {/* Right: Glass card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -8, left: -8, right: 8, bottom: 8,
              border: '2px solid color-mix(in srgb, var(--accent) 20%, transparent)',
              borderRadius: 10, zIndex: 0,
            }} />
            <div className="glass" style={{ position: 'relative', zIndex: 1, padding: '32px' }}>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 32, height: 32, background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={16} color="var(--accent)" />
                </span>
                Journal Highlights
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: item.color, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Editorial Board Preview
// ─────────────────────────────────────────────
const editors = [
  { name: 'Dr. Asha Anish Madhavan', title: 'Associate Professor – Engineering', role: 'Program Leader – Nanotechnology', institution: 'Amity University Dubai', location: 'Dubai, UAE', email: 'amadhavan@amityuniversity.ae', specialization: ['Nanotechnology', 'Engineering', 'Materials Research'], initials: 'AAM', accent: 'var(--accent)'   },
  { name: 'Dr. Jyoti Giri',          title: 'Senior Research Specialist',       role: 'Chemistry',                      institution: 'Tribhuvan University',    location: 'Nepal',      email: 'jyoti.giri@trc.tu.edu.np',       specialization: ['Chemistry', 'Polymer Science', 'Materials Research'],    initials: 'JG',  accent: 'var(--accent-2)' },
  { name: 'Dr. Rakesh Sharma',       title: 'Professor & HoD Physics',          role: 'Department of Physics',           institution: 'NDA Pune',                location: 'India',      email: 'rakeshsharma.nda78@gmail.com',   specialization: ['Astrophysics', 'Nanotechnology', 'Optical Fiber'],       initials: 'RS',  accent: 'var(--accent-3)' },
]

function EditorialBoardPreview() {
  return (
    <section id="editorial-board-preview" className="section-pad" style={{ background: 'var(--surface-grid)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
      <div className="container-xl">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label">Our Leadership</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Meet the <span style={{ color: 'var(--accent)' }}>Editorial Board</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', fontSize: 14, lineHeight: 1.75 }}>
            Distinguished experts from leading institutions across UAE, Nepal, and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {editors.map(editor => (
            <div
              key={editor.name}
              className="glass"
              style={{
                padding: '28px',
                border: `1px solid color-mix(in srgb, ${editor.accent} 20%, var(--glass-border))`,
                position: 'relative', overflow: 'hidden',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `3px 3px 0 ${editor.accent}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-glass)'; }}
            >
              {/* Watermark */}
              <div style={{ position: 'absolute', top: -8, right: -4, fontSize: 80, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, color: editor.accent, opacity: 0.04, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                {editor.initials}
              </div>

              {/* Avatar */}
              <div style={{ position: 'relative', marginBottom: 16, display: 'inline-block' }}>
                <div style={{ width: 56, height: 56, background: editor.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 18 }}>{editor.initials}</span>
                </div>
                <div style={{ position: 'absolute', bottom: -3, right: -3, width: 56, height: 56, border: `2px solid color-mix(in srgb, ${editor.accent} 40%, transparent)`, borderRadius: 8, zIndex: -1 }} />
              </div>

              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text)', lineHeight: 1.3, marginBottom: 2 }}>{editor.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: editor.accent, marginBottom: 2 }}>{editor.title}</p>
              <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>{editor.role}</p>
              <p style={{ fontSize: 11, color: 'var(--subtle)', marginBottom: 16 }}>{editor.institution} · {editor.location}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {editor.specialization.slice(0, 3).map(s => (
                  <span key={s} style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: `color-mix(in srgb, ${editor.accent} 12%, var(--elevated))`, color: editor.accent, border: `1px solid color-mix(in srgb, ${editor.accent} 25%, transparent)` }}>{s}</span>
                ))}
              </div>

              <a href={`mailto:${editor.email}`} style={{ fontSize: 12, color: editor.accent, textDecoration: 'none', wordBreak: 'break-all' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >{editor.email}</a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/editorial-board" id="view-board-btn" className="btn-secondary">
            View Full Board Details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Call for Papers
// ─────────────────────────────────────────────
function CallForPapers() {
  return (
    <section id="call-for-papers" className="section-pad">
      <div className="container-xl">
        <div
          className="glass"
          style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center', border: '1px solid var(--glass-border)' }}
        >
          {/* Top accent stripe */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--accent)', opacity: 0.6 }} />

          <div style={{ position: 'relative' }}>
            <span className="label" style={{ color: 'var(--accent-3)' }}>Open Call</span>
            <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: 16, lineHeight: 1.15 }}>
              Share Your Research<br />
              <span style={{ color: 'var(--accent)' }}>with the World</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.75 }}>
              We welcome methodologically robust and conceptually significant contributions
              that advance fundamental scientific knowledge or demonstrate how technological
              capabilities can address emerging scientific challenges.
            </p>

            {/* 3-col types — stays within 4-grid rhythm */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-32px" style={{ marginBottom: 36 }}>
              {[
                { label: 'Original Research', icon: FileText },
                { label: 'Critical Reviews',  icon: BookOpen },
                { label: 'Methodology Papers',icon: Microscope },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="card" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px' }}>
                  <Icon size={15} color="var(--accent-2)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link to="/submit"    id="cfp-submit-btn" className="btn-primary">Submit Your Paper <ArrowRight size={15} /></Link>
              <Link to="/aim-scope" id="cfp-scope-btn"  className="btn-ghost">Review Guidelines</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Home Page
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <AimScopePreview />
      <FocusAreasSection />
      <EditorialBoardPreview />
      <CallForPapers />
    </>
  )
}
