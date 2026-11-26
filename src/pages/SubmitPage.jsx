import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Upload, FileText, CheckCircle, Download, AlertCircle, ChevronDown } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Prepare Manuscript',
    desc: 'Format your manuscript according to our template guidelines. Ensure all authors, affiliations, and references are correctly formatted.',
    details: [
      'Use the provided ASETR manuscript template (DOCX format)',
      'Remove all author identification for blind review',
      'Include structured abstract (250 words max)',
      'Ensure all figures are high resolution (300+ DPI)',
      'Follow ASETR citation style (APA/Vancouver)',
    ],
  },
  {
    num: '02',
    title: 'Check Eligibility',
    desc: 'Confirm your research falls within ASETR\'s aim and scope. We accept original research articles, review papers, and methodological papers.',
    details: [
      'Original, unpublished research only',
      'Must align with ASETR scope (science, engineering, technology)',
      'Written in English',
      'Not under review elsewhere',
      'All co-authors consent to submission',
    ],
  },
  {
    num: '03',
    title: 'Submit Online',
    desc: 'Submit your manuscript along with a cover letter and any supplementary materials through our editorial system.',
    details: [
      'Upload main manuscript (DOCX or PDF)',
      'Upload figures separately (high-res)',
      'Provide cover letter',
      'Suggest potential reviewers (optional)',
      'Declare conflicts of interest',
    ],
  },
  {
    num: '04',
    title: 'Peer Review',
    desc: 'Your submission undergoes rigorous double-blind peer review by experts in your field. This typically takes 4–8 weeks.',
    details: [
      'Double-blind peer review process',
      'Minimum two independent reviewers',
      'Editorial decision within 8 weeks',
      'Detailed reviewer feedback provided',
      'Option to revise and resubmit',
    ],
  },
  {
    num: '05',
    title: 'Publication',
    desc: 'After acceptance, your paper undergoes copyediting and typesetting before online publication in ASETR.',
    details: [
      'Proof review and corrections',
      'Open access publication',
      'DOI assignment',
      'Indexed in major databases',
      'Promotional support for your research',
    ],
  },
]

const requirements = [
  { label: 'File Format', value: 'DOCX (preferred) or PDF' },
  { label: 'Word Limit',  value: '4,000–8,000 words (excluding references)' },
  { label: 'Abstract',    value: 'Structured, 250 words maximum' },
  { label: 'Keywords',    value: '5–8 keywords' },
  { label: 'References',  value: 'APA or Vancouver style, minimum 20' },
  { label: 'Figures',     value: '300+ DPI, TIFF or PNG' },
]

function AccordionStep({ step, isOpen, onToggle }) {
  return (
    <div
      className="glass"
      style={{
        border: isOpen ? '2px solid var(--accent)' : '1px solid var(--glass-border)',
        boxShadow: isOpen ? '3px 3px 0 var(--accent)' : 'var(--shadow-glass)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <button
        onClick={onToggle}
        id={`step-toggle-${step.num}`}
        style={{
          width: '100%', padding: 24, display: 'flex', alignItems: 'center', gap: 20,
          textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 32, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, color: 'color-mix(in srgb, var(--accent) 45%, transparent)', lineHeight: 1, flexShrink: 0, width: 44 }}>
          {step.num}
        </span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 4 }}>{step.title}</h3>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{step.desc}</p>
        </div>
        <ChevronDown
          size={18}
          color="var(--muted)"
          style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}
        />
      </button>

      <div style={{ maxHeight: isOpen ? 360 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <div style={{ padding: '0 24px 24px 88px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {step.details.map(detail => (
              <li key={detail} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle size={15} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: 'var(--muted)', fontSize: 13 }}>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function SubmitPage() {
  const [openStep, setOpenStep] = useState(0)

  return (
    <div className="page-wrapper" style={{ paddingBottom: 80 }}>
      {/* Page Header */}
      <section className="page-header relative overflow-hidden">
        <div className="container-xl relative">
          <nav className="flex items-center gap-2 mb-6" style={{ fontSize: 12, color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--accent)' }}>Submit Paper</span>
          </nav>

          <span className="label">Author Resources</span>
          <h1 className="heading-xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: 20, maxWidth: 720 }}>
            Submit Your <span style={{ color: 'var(--accent)' }}>Research</span>
          </h1>
          <p className="body-muted" style={{ fontSize: 18, maxWidth: 640 }}>
            Share your findings with the global scientific community.
            Our streamlined submission process ensures a smooth experience.
          </p>
        </div>
      </section>

      <div className="container-xl" style={{ paddingTop: 48 }}>
        {/* Quick download */}
        <div className="glass mb-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ padding: 24 }}>
          <div className="flex items-start gap-4">
            <div style={{ width: 48, height: 48, background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Download size={22} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 4 }}>
                Manuscript Template
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>
                Download the official ASETR submission template. Using this template
                ensures your manuscript meets formatting requirements.
              </p>
            </div>
          </div>
          <a
            href="#"
            id="download-template-docx"
            className="btn-primary flex-shrink-0"
            onClick={e => { e.preventDefault(); alert('Template download will be available soon.') }}
          >
            <Download size={15} /> Download DOCX
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main: Steps */}
          <div className="lg:col-span-2">
            <div style={{ marginBottom: 28 }}>
              <span className="label">Submission Process</span>
              <h2 className="heading-lg" style={{ marginBottom: 8 }}>Step-by-Step Guide</h2>
              <p className="body-muted" style={{ fontSize: 14 }}>Follow these steps to successfully submit your manuscript to ASETR.</p>
            </div>

            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <AccordionStep
                  key={step.num}
                  step={step}
                  isOpen={openStep === i}
                  onToggle={() => setOpenStep(openStep === i ? -1 : i)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Requirements */}
            <div className="glass" style={{ padding: 24, border: '1px solid color-mix(in srgb, var(--accent-2) 30%, var(--glass-border))', boxShadow: '3px 3px 0 var(--accent-2)' }}>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--accent-2)', marginBottom: 18 }}>
                Requirements
              </h3>
              <div className="flex flex-col gap-3">
                {requirements.map((req, idx) => (
                  <div
                    key={req.label}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: idx < requirements.length - 1 ? 12 : 0,
                      borderBottom: idx < requirements.length - 1 ? '1px solid var(--border-soft)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: 11, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{req.label}</span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethics note */}
            <div className="glass" style={{ padding: 24, border: '1px solid color-mix(in srgb, var(--accent-3) 35%, var(--glass-border))' }}>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} color="var(--accent-3)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--accent-3)', marginBottom: 6 }}>
                    Publication Ethics
                  </h4>
                  <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.65 }}>
                    ASETR follows COPE guidelines. All submissions must be original,
                    not submitted elsewhere, and properly attributed. Data fabrication
                    or plagiarism results in immediate rejection.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact editors */}
            <div className="glass" style={{ padding: 24, textAlign: 'center' }}>
              <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 8 }}>
                Questions?
              </h4>
              <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 18, lineHeight: 1.6 }}>
                Our editorial team is happy to help with any submission inquiries.
              </p>
              <Link to="/contact" id="submit-contact-btn" className="btn-secondary w-full justify-center">
                Contact Editors <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="glass mt-16" style={{ padding: 'clamp(36px, 5vw, 56px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--accent)', opacity: 0.6 }} />
          <Upload size={40} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Ready to Submit?</h2>
          <p className="body-muted" style={{ maxWidth: 480, margin: '0 auto 28px', fontSize: 14 }}>
            Join the growing community of researchers advancing science, engineering,
            and technology through ASETR.
          </p>
          <a
            href="mailto:editor@asetr.org?subject=Manuscript Submission - ASETR"
            id="email-submit-btn"
            className="btn-primary"
          >
            Submit via Email <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
