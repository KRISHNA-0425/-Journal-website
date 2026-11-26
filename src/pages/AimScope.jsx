import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Atom } from 'lucide-react'

const subjectAreas = [
  {
    category: 'Fundamental Sciences',
    accent: 'var(--accent)',
    topics: [
      'Condensed Matter Physics',
      'Quantum Physics & Mechanics',
      'Astrophysics & Cosmology',
      'Organic & Inorganic Chemistry',
      'Analytical Chemistry',
      'Physical Chemistry',
      'Mathematical Modelling',
      'Statistics & Data Science',
      'Molecular Biology',
      'Microbiology & Genetics',
    ],
  },
  {
    category: 'Engineering & Technology',
    accent: 'var(--accent-2)',
    topics: [
      'Materials Science & Engineering',
      'Nanotechnology & Nanodevices',
      'Optical Fibers & Photonics',
      'Biomedical Engineering',
      'Chemical Engineering',
      'Environmental Engineering',
      'Energy Engineering & Storage',
      'Computational Modelling',
      'Artificial Intelligence & ML',
      'Sensor Technologies',
    ],
  },
  {
    category: 'Applied & Interdisciplinary',
    accent: 'var(--accent-3)',
    topics: [
      'Drug Delivery Systems',
      'Green & Sustainable Chemistry',
      'Renewable Energy Systems',
      'Environmental Monitoring',
      'Biosensors & Diagnostics',
      'Smart Materials',
      'Polymer Science',
      'Composite Materials',
      'Spectroscopy & Characterization',
      'Health Technology Assessment',
    ],
  },
]

export default function AimScope() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: 80 }}>
      {/* Page Header */}
      <section className="page-header relative overflow-hidden">
        <div className="container-xl relative">
          <nav className="flex items-center gap-2 mb-6" style={{ fontSize: 12, color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--accent)' }}>Aim &amp; Scope</span>
          </nav>

          <span className="label">Journal Mandate</span>
          <h1 className="heading-xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: 20, maxWidth: 720 }}>
            Aim &amp; <span style={{ color: 'var(--accent)' }}>Scope</span>
          </h1>
          <p className="body-muted" style={{ fontSize: 18, maxWidth: 640 }}>
            Our mandate is to advance scientific understanding through rigorous,
            interdisciplinary research that bridges fundamental science with
            engineering innovation and technological application.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
                <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 32, height: 32, background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Atom size={16} color="var(--accent)" />
                  </span>
                  Journal Mission
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--muted)', fontSize: 15, lineHeight: 1.75 }}>
                  <p>
                    Addressing fundamental scientific questions and advancing scientific understanding
                    increasingly require the integration of knowledge, methodologies, and enabling
                    technologies across disciplinary boundaries.
                  </p>
                  <p>
                    <strong style={{ color: 'var(--text)' }}>Advances in Science, Engineering and Technology Research (ASETR)</strong> aims
                    to provide a rigorous scholarly platform for disseminating high-quality original
                    research and critical reviews that deepen our understanding of basic sciences and
                    strengthen their applications through engineering, technological innovation, and
                    interdisciplinary approaches.
                  </p>
                  <p>
                    The journal encompasses fundamental and applied research in physics, chemistry,
                    mathematical sciences, biological sciences, and related fields, with particular
                    emphasis on the role of engineering disciplines, materials science, computing and
                    digital technologies, energy systems, environmental technologies, and health-related
                    technologies as enabling tools and approaches for scientific investigation,
                    experimentation, modelling, characterization, and validation.
                  </p>
                  <p>
                    The journal particularly welcomes methodologically robust and conceptually
                    significant contributions that advance fundamental scientific knowledge, develop
                    innovative research methodologies, or demonstrate how technological capabilities
                    can address emerging scientific challenges, fostering meaningful scientific
                    discovery and knowledge exchange across disciplines.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Publication Type',     value: 'Open Access',                          accent: 'var(--accent-2)' },
                { label: 'Review Process',       value: 'Double-blind Peer Review',             accent: 'var(--accent)'   },
                { label: 'Submission Languages', value: 'English',                              accent: 'var(--accent-3)' },
                { label: 'Article Types',        value: 'Original Research, Reviews, Methods',  accent: 'var(--accent-4)' },
                { label: 'Focus',                value: 'Interdisciplinary Science & Engineering', accent: 'var(--accent)' },
              ].map(item => (
                <div key={item.label} className="glass" style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, color: 'var(--subtle)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 14, color: item.accent }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Areas */}
          <div className="mb-16">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="label">Subject Coverage</span>
              <h2 className="heading-lg">
                Topics We <span style={{ color: 'var(--accent)' }}>Publish</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subjectAreas.map(area => (
                <div
                  key={area.category}
                  className="glass"
                  style={{
                    padding: 24,
                    border: `1px solid color-mix(in srgb, ${area.accent} 25%, var(--glass-border))`,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `3px 3px 0 ${area.accent}` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-glass)' }}
                >
                  <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: area.accent, marginBottom: 20 }}>
                    {area.category}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {area.topics.map(topic => (
                      <li key={topic} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--muted)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: area.accent, flexShrink: 0 }} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass" style={{ padding: 'clamp(32px, 5vw, 48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--accent)', opacity: 0.6 }} />
            <h3 className="heading-lg" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 12 }}>
              Ready to Contribute?
            </h3>
            <p className="body-muted" style={{ maxWidth: 480, margin: '0 auto 28px', fontSize: 14 }}>
              We welcome original research that advances scientific knowledge and
              bridges disciplinary boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/submit" id="aim-scope-submit-btn" className="btn-primary justify-center">
                Submit Manuscript <ArrowRight size={15} />
              </Link>
              <Link to="/contact" id="aim-scope-contact-btn" className="btn-secondary justify-center">
                Contact Editors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
