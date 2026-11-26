import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, ChevronRight, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    name: 'Dr. Asha Anish Madhavan',
    role: 'Editor (Engineering & Nanotechnology)',
    institution: 'Amity University Dubai',
    location: 'Dubai International Academic City, Dubai, UAE',
    email: 'amadhavan@amityuniversity.ae',
    phone: '+971 55 842 5297',
    accent: 'var(--accent)',
  },
  {
    name: 'Dr. Jyoti Giri',
    role: 'Editor (Chemistry)',
    institution: 'Tribhuvan University, Nepal',
    location: 'Kathmandu, Bagmati Province, Nepal',
    email: 'jyoti.giri@trc.tu.edu.np',
    phone: '+977-1-5454975',
    accent: 'var(--accent-2)',
  },
  {
    name: 'Dr. Rakesh Sharma',
    role: 'Editor (Physics)',
    institution: 'National Defence Academy, Pune',
    location: 'Pune 411023, Maharashtra, India',
    email: 'rakeshsharma.nda78@gmail.com',
    phone: '+91 9172422782',
    accent: 'var(--accent-3)',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="page-wrapper" style={{ paddingBottom: 80 }}>
      {/* Page Header */}
      <section className="page-header relative overflow-hidden">
        <div className="container-xl relative">
          <nav className="flex items-center gap-2 mb-6" style={{ fontSize: 12, color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--accent)' }}>Contact</span>
          </nav>

          <span className="label">Get in Touch</span>
          <h1 className="heading-xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: 20, maxWidth: 720 }}>
            Contact <span style={{ color: 'var(--accent)' }}>Us</span>
          </h1>
          <p className="body-muted" style={{ fontSize: 18, maxWidth: 640 }}>
            Reach out to our editorial team for submission queries,
            review requests, or general inquiries.
          </p>
        </div>
      </section>

      <div className="container-xl" style={{ paddingTop: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div style={{ marginBottom: 24 }}>
              <span className="label">Send a Message</span>
              <h2 className="heading-lg">Write to the Editors</h2>
            </div>

            {submitted ? (
              <div className="glass" style={{ padding: 40, textAlign: 'center' }}>
                <CheckCircle size={56} color="var(--accent-2)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p className="body-muted" style={{ marginBottom: 24, fontSize: 14 }}>
                  Thank you for reaching out. Our editorial team will respond within 2–3 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="btn-secondary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass flex flex-col gap-5" style={{ padding: 28 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input"
                      placeholder="jane@university.edu"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="input"
                  >
                    <option value="">Select a topic...</option>
                    <option value="submission">Manuscript Submission</option>
                    <option value="review">Peer Review Query</option>
                    <option value="editorial">Editorial Inquiry</option>
                    <option value="ethics">Publication Ethics</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="input"
                    style={{ resize: 'none' }}
                    placeholder="Describe your inquiry in detail..."
                  />
                </div>

                <div>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{ opacity: submitting ? 0.65 : 1 }}
                  >
                    {submitting ? 'Sending...' : <><Send size={15} /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Editor contacts */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="label">Editorial Contacts</span>
              <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text)' }}>
                Direct Reach
              </h2>
            </div>

            {contactInfo.map(contact => (
              <div
                key={contact.name}
                className="glass"
                style={{
                  padding: 20,
                  border: `1px solid color-mix(in srgb, ${contact.accent} 25%, var(--glass-border))`,
                  boxShadow: `3px 3px 0 ${contact.accent}`,
                }}
              >
                <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 14, color: contact.accent, marginBottom: 2 }}>
                  {contact.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 12 }}>{contact.role}</p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail size={14} color={contact.accent} style={{ flexShrink: 0 }} />
                    <a href={`mailto:${contact.email}`} style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'none' }}>
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} color="var(--subtle)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{contact.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} color="var(--subtle)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{contact.institution}, {contact.location}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Response time */}
            <div className="glass" style={{ padding: 20 }}>
              <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 12 }}>
                Response Times
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { type: 'General Inquiries',  time: '2–3 business days' },
                  { type: 'Submission Status',  time: '3–5 business days' },
                  { type: 'Review Feedback',    time: '4–8 weeks' },
                  { type: 'Editorial Decision', time: '8–12 weeks' },
                ].map(item => (
                  <div key={item.type} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{item.type}</span>
                    <span style={{ fontSize: 12, color: 'var(--accent-2)', fontWeight: 500 }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
