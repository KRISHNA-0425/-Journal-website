import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home',           path: '/' },
  { label: 'Aim & Scope',   path: '/aim-scope' },
  { label: 'Editorial Board',path: '/editorial-board' },
  { label: 'Submit Paper',   path: '/submit' },
  { label: 'Contact',        path: '/contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const { theme, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <nav
      id="main-navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        padding: scrolled ? '10px 0' : '18px 0',
      }}
    >
      <div className="container-xl flex items-center justify-between">

        {/* Logo */}
        <Link to="/" id="navbar-logo" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="ASETR — Advances in Science, Engineering and Technology Research"
            style={{ height: 42, width: 'auto', objectFit: 'contain', transition: 'opacity 0.2s ease' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="theme-toggle"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/submit" id="nav-submit-cta" className="btn-primary" style={{ padding: '8px 20px', fontSize: 12 }}>
            Submit Paper
          </Link>
        </div>

        {/* Mobile row */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle mobile menu"
            style={{ padding: 8, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: mobileOpen ? 400 : 0,
          opacity:   mobileOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.25s ease',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border-soft)',
        }}
        className="lg:hidden"
      >
        <div className="container-xl py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                color: location.pathname === link.path ? 'var(--accent)' : 'var(--muted)',
                padding: '4px 0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/submit" className="btn-primary mt-2" style={{ justifyContent: 'center' }}>
            Submit Paper
          </Link>
        </div>
      </div>
    </nav>
  )
}
