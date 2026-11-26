import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, ChevronRight, Users } from 'lucide-react'

const editors = [
  {
    name: 'Dr. Asha Anish Madhavan',
    title: 'Associate Professor – Engineering',
    role: 'Program Leader – Nanotechnology',
    institution: 'Amity University Dubai',
    location: 'Dubai International Academic City, Dubai, UAE',
    email: 'amadhavan@amityuniversity.ae',
    website: 'www.amityuniversity.ae',
    phones: [
      { label: 'Tel', number: '+971 4 455 4900' },
      { label: 'Direct', number: '+971 4 455 4749' },
      { label: 'Fax', number: '+971 4 435 6810' },
      { label: 'Mobile', number: '+971 55 842 5297' },
    ],
    specialization: ['Nanotechnology', 'Engineering', 'Materials Research', 'Nanomaterials'],
    bio: 'Dr. Asha Anish Madhavan is an Associate Professor in Engineering and Program Leader for Nanotechnology at Amity University Dubai. She brings expertise in nanotechnology and materials engineering, contributing to the journal\'s focus on cutting-edge materials research and engineering innovations in the UAE region.',
    initials: 'AAM',
    accent: 'var(--accent)',
    affiliations: null,
  },
  {
    name: 'Dr. Jyoti Giri',
    title: 'Senior Research Specialist',
    role: 'Chemistry',
    institution: 'Tribhuvan University (TU)',
    location: 'Ghantaghar, Kathmandu, Bagmati Province, Nepal',
    email: 'jyoti.giri@trc.tu.edu.np',
    website: null,
    phones: [
      { label: 'Tel', number: '+977-1-5454975 / 5437362' },
    ],
    specialization: ['Chemistry', 'Polymer Science', 'Materials Research', 'Analytical Chemistry'],
    bio: 'Dr. Jyoti Giri serves as a Senior Research Specialist in Chemistry, affiliated with multiple premier institutions in Nepal including Tri-Chandra Multiple Campus (TC) of Tribhuvan University, Nepal Polymer Institute (NPI), and Nepal Development and Research Institute (NDRI). Her interdisciplinary expertise spans chemistry, polymer science, and materials research.',
    initials: 'JG',
    accent: 'var(--accent-2)',
    affiliations: [
      'Tri-Chandra Multiple Campus (TC), Tribhuvan University, Ghantaghar, Kathmandu, Nepal',
      'Nepal Polymer Institute (NPI), P.O. Box 24411, Kathmandu, Nepal',
      'Nepal Development and Research Institute (NDRI), Manbhawan, Lalitpur, Nepal',
    ],
  },
  {
    name: 'Dr. Rakesh Sharma',
    title: 'Professor & Head of Department',
    role: 'Department of Physics',
    institution: 'National Defence Academy (NDA)',
    location: 'Pune 411023, Maharashtra, India',
    email: 'rakeshsharma.nda78@gmail.com',
    website: null,
    phones: [
      { label: 'Mobile', number: '+91 9172422782' },
    ],
    specialization: ['Astrophysics', 'Nanotechnology', 'Optical Fiber', 'Material Science'],
    bio: 'Dr. Rakesh Sharma is a Professor and Head of the Physics Department at the National Defence Academy (NDA), Pune. With expertise spanning astrophysics, nanotechnology, optical fiber technologies, and material science, he brings a unique interdisciplinary perspective that bridges theoretical physics with advanced engineering applications.',
    initials: 'RS',
    accent: 'var(--accent-3)',
    affiliations: null,
  },
]

export default function EditorialBoardPage() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: 80 }}>
      {/* Page Header */}
      <section className="page-header relative overflow-hidden">
        <div className="container-xl relative">
          <nav className="flex items-center gap-2 mb-6" style={{ fontSize: 12, color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--accent)' }}>Editorial Board</span>
          </nav>

          <span className="label">Our Leadership</span>
          <h1 className="heading-xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: 20, maxWidth: 720 }}>
            Editorial <span style={{ color: 'var(--accent)' }}>Board</span>
          </h1>
          <p className="body-muted" style={{ fontSize: 18, maxWidth: 640 }}>
            Distinguished researchers and educators from leading institutions across
            the UAE, Nepal, and India guiding ASETR&apos;s scientific direction.
          </p>
        </div>
      </section>

      {/* Stats Row — 4-grid */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border-soft)' }}>
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Editorial Members', value: '3', desc: 'Expert Editors' },
              { label: 'Countries',         value: '3', desc: 'UAE, Nepal, India' },
              { label: 'Institutions',      value: '5+', desc: 'Affiliated' },
              { label: 'Disciplines',       value: '8+', desc: 'Research Areas' },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div style={{ fontSize: 28, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editors */}
      <section className="section-pad">
        <div className="container-xl flex flex-col gap-8">
          {editors.map((editor, idx) => (
            <div
              key={editor.name}
              id={`editor-${idx + 1}`}
              className="glass"
              style={{
                border: `1px solid color-mix(in srgb, ${editor.accent} 25%, var(--glass-border))`,
                overflow: 'hidden',
                boxShadow: `3px 3px 0 ${editor.accent}`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left panel */}
                <div
                  style={{
                    padding: 32,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--surface)',
                    borderRight: '1px solid var(--border-soft)',
                  }}
                >
                  <div style={{ position: 'absolute', top: -12, right: -8, fontSize: 100, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, color: editor.accent, opacity: 0.05, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                    {editor.initials}
                  </div>

                  {/* Avatar */}
                  <div style={{ position: 'relative', marginBottom: 24, display: 'inline-block' }}>
                    <div style={{ width: 72, height: 72, background: editor.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#fff', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22 }}>{editor.initials}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: -4, right: -4, width: 72, height: 72, border: `2px solid color-mix(in srgb, ${editor.accent} 40%, transparent)`, borderRadius: 8, zIndex: -1 }} />
                  </div>

                  <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 6, lineHeight: 1.25 }}>
                    {editor.name}
                  </h2>
                  <p style={{ fontSize: 13, fontWeight: 600, color: editor.accent, marginBottom: 4 }}>{editor.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 4 }}>{editor.role}</p>
                  <p style={{ fontSize: 12, color: 'var(--subtle)', marginBottom: 20 }}>{editor.institution}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {editor.specialization.map(s => (
                      <span
                        key={s}
                        style={{
                          fontSize: 11, padding: '4px 10px', borderRadius: 4,
                          background: `color-mix(in srgb, ${editor.accent} 12%, var(--elevated))`,
                          color: editor.accent,
                          border: `1px solid color-mix(in srgb, ${editor.accent} 25%, transparent)`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <div className="lg:col-span-2" style={{ padding: 32 }}>
                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>
                      Biography
                    </h3>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14 }}>{editor.bio}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <div>
                      <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 14 }}>
                        Contact
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <a href={`mailto:${editor.email}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, textDecoration: 'none', color: 'var(--muted)', fontSize: 13, wordBreak: 'break-all' }}>
                          <Mail size={15} color={editor.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{editor.email}</span>
                        </a>

                        {editor.phones.map(ph => (
                          <div key={ph.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--muted)' }}>
                            <Phone size={15} color="var(--subtle)" style={{ flexShrink: 0, marginTop: 2 }} />
                            <span>
                              <span style={{ color: 'var(--subtle)', fontSize: 11 }}>{ph.label}: </span>
                              {ph.number}
                            </span>
                          </div>
                        ))}

                        {editor.website && (
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                            <Globe size={15} color="var(--subtle)" style={{ flexShrink: 0, marginTop: 2 }} />
                            <a href={`https://${editor.website}`} target="_blank" rel="noopener noreferrer" style={{ color: editor.accent, textDecoration: 'none' }}>
                              {editor.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Affiliations */}
                    <div>
                      <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 14 }}>
                        Affiliations
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <MapPin size={15} color={editor.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <div>
                            <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{editor.institution}</div>
                            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{editor.location}</div>
                          </div>
                        </div>

                        {editor.affiliations && editor.affiliations.map((aff, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: editor.accent, flexShrink: 0, marginTop: 6, marginLeft: 4 }} />
                            <span style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{aff}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Board CTA */}
      <section style={{ paddingBottom: 40 }}>
        <div className="container-xl">
          <div className="glass" style={{ padding: 40, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--accent)', opacity: 0.6 }} />
            <Users size={36} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 10 }}>
              Interested in Joining the Editorial Board?
            </h3>
            <p className="body-muted" style={{ maxWidth: 480, margin: '0 auto 24px', fontSize: 14 }}>
              We welcome distinguished researchers from all disciplines to contribute
              their expertise to ASETR&apos;s growing scholarly community.
            </p>
            <Link to="/contact" id="join-board-btn" className="btn-primary">
              Get in Touch <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
