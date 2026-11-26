import { Link } from 'react-router-dom'
import { Mail, Globe2, ArrowUpRight, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const footerLinks = {
  Journal: [
    { label: 'Aim & Scope',     path: '/aim-scope' },
    { label: 'Editorial Board', path: '/editorial-board' },
    { label: 'Submit Paper',    path: '/submit' },
    { label: 'Contact',         path: '/contact' },
  ],
  'Research Areas': [
    { label: 'Physics',           path: '/aim-scope' },
    { label: 'Chemistry',         path: '/aim-scope' },
    { label: 'Nanotechnology',    path: '/aim-scope' },
    { label: 'Materials Science', path: '/aim-scope' },
    { label: 'Biological Sciences',path: '/aim-scope' },
  ],
  'For Authors': [
    { label: 'Submission Guidelines', path: '/submit' },
    { label: 'Manuscript Template',   path: '/submit' },
    { label: 'Review Process',        path: '/submit' },
    { label: 'Publication Ethics',    path: '/submit' },
  ],
}

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer style={{ background: 'var(--surface-grid)', borderTop: '1px solid var(--border-soft)' }}>
      {/* Top section */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5" style={{ textDecoration: 'none' }}>
              <img
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt="ASETR — Advances in Science, Engineering and Technology Research"
                style={{ height: 52, width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              A rigorous scholarly platform for disseminating high-quality original research at the intersection of science, engineering, and technology.
            </p>
            <div className="flex gap-2">
              {[
                { icon: X,      label: 'X (Twitter)', href: '#' },
                { icon: Globe2, label: 'Website',     href: '#' },
                { icon: Mail,   label: 'Email',       href: 'mailto:editor@asetr.org' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 6,
                    border: '1px solid var(--border-soft)',
                    background: 'var(--glass-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 10%, transparent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.background = 'var(--glass-bg)'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 16 }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1"
                      style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-2)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      {link.label}
                      <ArrowUpRight size={11} style={{ opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border-soft)' }}>
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: 12, color: 'var(--subtle)' }}>
            © {new Date().getFullYear()} Advances in Science, Engineering and Technology Research. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Ethics Policy'].map(label => (
              <a
                key={label}
                href="#"
                style={{ fontSize: 12, color: 'var(--subtle)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--subtle)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
