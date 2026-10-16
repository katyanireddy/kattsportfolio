
import { useMemo, useState } from 'react'
import './App.css'
import websiteImg from './assets/website.png';

const websiteTypes = [
  { id: 'landing', name: 'Landing Page', desc: 'Single page for a product or service', price: 4500, pages: 1, icon: '▱', rate: 900 },
  { id: 'portfolio', name: 'Portfolio', desc: 'Personal brand and showcase', price: 6500, pages: 4, icon: '♟', rate: 1200 },
  { id: 'business', name: 'Business Website', desc: 'Small business, startup or service', price: 9000, pages: 5, icon: '▥', rate: 1200, popular: true },
  { id: 'corporate', name: 'Corporate Website', desc: 'Company profile and services', price: 18000, pages: 6, icon: '▤', rate: 1200 },
  { id: 'event', name: 'Event Website', desc: 'Event details and registration', price: 7500, pages: 4, icon: '▦', rate: 1200 },
  { id: 'restaurant', name: 'Restaurant Website', desc: 'Menu, location and enquiries', price: 8500, pages: 5, icon: '♨', rate: 1200 },
  { id: 'blog', name: 'Blog / Content', desc: 'Articles, categories and CMS', price: 12000, pages: 5, icon: '▧', rate: 1200 },
  { id: 'ecommerce', name: 'E-commerce', desc: 'Products, cart and checkout', price: 24000, pages: 6, icon: '🛒', rate: 1200 },
  { id: 'booking', name: 'Booking Website', desc: 'Appointments and scheduling', price: 16000, pages: 5, icon: '▦', rate: 1200 },
  { id: 'realestate', name: 'Real Estate', desc: 'Property listings and enquiries', price: 18000, pages: 6, icon: '⌂', rate: 1200 },
  { id: 'webapp', name: 'Web Application', desc: 'Custom features, dashboard and login', price: 30000, pages: 5, icon: '</>', rate: 1800 },
  { id: 'saas', name: 'SaaS / Marketplace', desc: 'Multi-user platforms and workflows', price: 60000, pages: 7, icon: '✳', rate: 1800 },
]

const featureOptions = [
  { id: 'contact', label: 'Contact form', price: 1500 },
  { id: 'cms', label: 'Content management system', price: 3500 },
  { id: 'login', label: 'Login / signup', price: 4000 },
  { id: 'dashboard', label: 'Admin dashboard', price: 6500 },
  { id: 'payment', label: 'Payment gateway integration', price: 4500 },
  { id: 'booking', label: 'Booking / appointment flow', price: 5000 },
  { id: 'database', label: 'Database / dynamic content', price: 4500 },
  { id: 'search', label: 'Search and filters', price: 2500 },
  { id: 'email', label: 'Email notifications', price: 1800 },
  { id: 'whatsapp', label: 'WhatsApp contact button', price: 500 },
  { id: 'seo', label: 'Basic SEO setup', price: 1500 },
  { id: 'analytics', label: 'Analytics integration', price: 1000 },
  { id: 'animations', label: 'Advanced animations', price: 3000 },
  { id: 'languages', label: 'Multiple languages', price: 3500 },
  { id: 'ai', label: 'AI chatbot / API integration', price: 6000 },
]

const designs = [
  { id: 'template', name: 'Template', desc: 'Clean and simple', multiplier: 0.78, badge: '−22%' },
  { id: 'custom', name: 'Custom', desc: 'Modern and on-brand', multiplier: 1, badge: '' },
  { id: 'premium', name: 'Premium', desc: 'Extra polished', multiplier: 1.32, badge: '+32%' },
]

const contentOptions = [
  { id: 'provided', name: "I'll provide text and images", price: 0 },
  { id: 'polish', name: 'Help me polish the content', price: 1800 },
  { id: 'copy', name: 'Full copywriting', price: 900 },
]

const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(value))

const round500 = (value) => Math.round(value / 500) * 500

function App() {
  const [typeId, setTypeId] = useState('business')
  const [pages, setPages] = useState(5)
  const [design, setDesign] = useState('custom')
  const [features, setFeatures] = useState(['seo', 'whatsapp', 'animations'])
  const [content, setContent] = useState('provided')
  const [timeline, setTimeline] = useState('standard')
  const [maintenance, setMaintenance] = useState('none')
  const [hosting, setHosting] = useState('client')
  const [toast, setToast] = useState('')
  const [showQuote, setShowQuote] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', description: '' })

  const selectedType = websiteTypes.find((item) => item.id === typeId) || websiteTypes[2]
  const selectedDesign = designs.find((item) => item.id === design) || designs[1]

  const estimate = useMemo(() => {
    const extraPages = Math.max(0, pages - selectedType.pages)
    const extraPageCost = extraPages * selectedType.rate
    const selectedFeatures = featureOptions.filter((item) => features.includes(item.id))
    const featureCost = selectedFeatures.reduce((sum, item) => sum + item.price, 0)
    const contentCost = content === 'polish' ? 1800 : content === 'copy' ? Math.max(2500, pages * 900) : 0

    const beforeDesign = selectedType.price + extraPageCost + featureCost + contentCost
    const designedSubtotal = beforeDesign * selectedDesign.multiplier
    const deliveryCost = timeline === 'rush' ? designedSubtotal * 0.25 : timeline === 'super' ? designedSubtotal * 0.4 : 0
    const hostingCost = hosting === 'include' ? 2500 : 0
    const unroundedTotal = designedSubtotal + deliveryCost + hostingCost
    const total = round500(unroundedTotal)
    const maintenanceCost = maintenance === 'basic' ? 1500 : maintenance === 'active' ? 3500 : 0

    const breakdown = [
      { label: 'Website type', amount: selectedType.price },
      ...(extraPageCost > 0 ? [{ label: `Extra pages (${extraPages})`, amount: extraPageCost }] : []),
      ...selectedFeatures.map((item) => ({ label: item.label, amount: item.price })),
      ...(contentCost ? [{ label: 'Content service', amount: contentCost }] : []),
      ...(designedSubtotal - beforeDesign !== 0 ? [{ label: `Design adjustment (${selectedDesign.name})`, amount: designedSubtotal - beforeDesign }] : []),
      ...(deliveryCost > 0 ? [{ label: 'Rush delivery', amount: deliveryCost }] : []),
      ...(hostingCost > 0 ? [{ label: 'Hosting setup allowance', amount: hostingCost }] : []),
    ]

    return {
      extraPages, extraPageCost, featureCost, selectedFeatures, contentCost,
      beforeDesign, designedSubtotal, deliveryCost, hostingCost, unroundedTotal,
      total, low: Math.max(0, round500(total * 0.9)),
      high: round500(total * 1.18), maintenanceCost, breakdown,
    }
  }, [pages, selectedType, design, selectedDesign, features, content, timeline, hosting, maintenance])

  const notify = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2400)
  }

  const toggleFeature = (id) => {
    setFeatures((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const buildBrief = () => [
    'KATYANI.EXE — WEBSITE PROJECT BRIEF',
    '',
    `Website: ${selectedType.name}`,
    `Pages / screens: ${pages}`,
    `Design: ${selectedDesign.name}`,
    `Features: ${estimate.selectedFeatures.map((item) => item.label).join(', ') || 'None'}`,
    `Content: ${contentOptions.find((item) => item.id === content)?.name}`,
    `Delivery: ${timeline === 'standard' ? 'Normal' : timeline === 'rush' ? 'Rush (+25%)' : 'Super Rush (+40%)'}`,
    `Hosting: ${hosting === 'include' ? 'Setup allowance included' : 'Client manages separately'}`,
    `Monthly maintenance: ${formatINR(estimate.maintenanceCost)}`,
    '',
    'ITEMISED ESTIMATE',
    ...estimate.breakdown.map((item) => `${item.label}: ${formatINR(item.amount)}`),
    '',
    `Estimated one-time total: ${formatINR(estimate.total)}`,
    `Suggested range: ${formatINR(estimate.low)} – ${formatINR(estimate.high)}`,
    '',
    'Prices are indicative. Third-party subscriptions, domains and usage charges may be extra.',
  ].join('\n')

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildBrief())
      notify('Project brief copied ♡')
    } catch {
      notify('Clipboard unavailable. Use the enquiry option to continue.')
    }
  }

  const whatsappNumber = '917691833047' // Replace with your WhatsApp number in international forma

  const sendWhatsApp = () => {
    if (whatsappNumber.includes('REPLACE')) {
      notify('Add your WhatsApp number in App.jsx first.')
      return
    }
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildBrief())}`, '_blank', 'noopener,noreferrer')
  }

  const handleEnquiry = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Website project enquiry — ${selectedType.name}`)
    const body = encodeURIComponent(`${buildBrief()}\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp || 'Not provided'}\nProject description: ${form.description}`)
    window.location.href = `mailto:katyanireddy17@gmail.com?subject=${subject}&body=${body}`
    setShowQuote(false)
    notify('Email draft opened. Send it from your email app.')
  }

  const chooseType = (id) => {
    setTypeId(id)
    setPages((current) => Math.max(1, Math.min(20, current)))
  }

  return (
    <main className="builder">
      <header className="topbar">
        <a href="/" className="wordmark">KATYANI.EXE</a>
        <nav>
          <a href="/#about">WHO'S THIS?</a>
          <a href="/#projects">BUILT THIS.</a>
          <a href="/#toolkit">MY TOOLKIT.</a>
          <a href="/#resume">RESUME.</a>
          <a href="/#side-quests">SIDE QUESTS.</a>
          <a href="/#contact">LET'S TALK.</a>
        </nav>
        <a className="back-link" href="../index.html">← BACK TO PORTFOLIO</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="breadcrumb">KATYANI.EXE / SIDE QUEST / WEBSITE BUILDER</p>
          <h1>LET'S BUILD YOUR <span>WEBSITE.</span></h1>
          <p className="subtitle">Pick your pieces. Get your price. No awkward guessing.</p>
          <p className="scribble">same ideas.<br />different websites. ♡</p>
        </div>
        <div className="hero-art">
          <img src={websiteImg} alt="Katyani's illustrated character" />
          <div className="speech">tell me what you need<br />and i'll build it ♡</div>
          <div className="sticky-note">• ideas<br />• design<br />• code<br />• deploy<br />• you happy :)</div>
          <span className="floating-heart heart-a">♡</span>
          <span className="floating-heart heart-b">♥</span>
        </div>
      </section>

      <div className="layout">
        <div className="form-column">
          <section className="panel">
            <div className="section-heading"><span>01</span><div><h2>WHAT ARE WE MAKING?</h2><p>Choose the closest option. You can customise more later.</p></div></div>
            <div className="type-grid">
              {websiteTypes.map((type) => (
                <button key={type.id} type="button" onClick={() => chooseType(type.id)} className={`type-card ${typeId === type.id ? 'selected' : ''}`}>
                  {type.popular && <span className="popular">MOST POPULAR</span>}
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-copy"><strong>{type.name}</strong><small>{type.desc}</small><em>From {formatINR(type.price)}</em></span>
                  {typeId === type.id && <span className="check">✓</span>}
                </button>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="section-heading"><span>02</span><div><h2>MAKE IT YOURS</h2><p>Tell me a few details.</p></div></div>
            <div className="custom-grid">
              <div className="page-control">
                <label htmlFor="pages">Number of pages / main screens</label>
                <div className="slider-row">
                  <button type="button" onClick={() => setPages((p) => Math.max(1, p - 1))} aria-label="Decrease pages">−</button>
                  <input id="pages" type="range" min="1" max="20" value={pages} onChange={(e) => setPages(Number(e.target.value))} />
                  <button type="button" onClick={() => setPages((p) => Math.min(20, p + 1))} aria-label="Increase pages">+</button>
                  <strong>{pages} pages</strong>
                </div>
              </div>
              <div>
                <p className="field-label">Design level</p>
                <div className="design-grid">
                  {designs.map((item) => (
                    <button type="button" key={item.id} onClick={() => setDesign(item.id)} className={`design-card ${design === item.id ? 'selected' : ''}`}>
                      <strong>{item.name}</strong><small>{item.desc}</small>{item.badge && <em>{item.badge}</em>}
                    </button>
                  ))}
                </div>
                <p className="hint">Design pricing applies to the development subtotal, excluding separate external charges.</p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="section-heading"><span>03</span><div><h2>ADD YOUR EXTRAS</h2><p>Select any features you need.</p></div></div>
            <div className="feature-grid">
              {featureOptions.map((feature) => (
                <label className="feature-row" key={feature.id}>
                  <input type="checkbox" checked={features.includes(feature.id)} onChange={() => toggleFeature(feature.id)} />
                  <span>{feature.label}</span><strong>+{formatINR(feature.price)}</strong>
                </label>
              ))}
            </div>
            <p className="hint">Third-party subscriptions, paid APIs and payment provider charges may be extra.</p>
          </section>

          <section className="panel">
            <div className="section-heading"><span>04</span><div><h2>CONTENT</h2><p>Who is handling the words and images?</p></div></div>
            <div className="choice-grid">
              {contentOptions.map((item) => (
                <button type="button" key={item.id} onClick={() => setContent(item.id)} className={`choice-card ${content === item.id ? 'selected' : ''}`}>
                  <strong>{item.name}</strong><small>{item.id === 'copy' ? `${formatINR(item.price)} per page · ₹2,500 minimum` : formatINR(item.price)}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="section-heading"><span>05</span><div><h2>DELIVERY TIMELINE</h2><p>Urgent work depends on availability and agreed scope.</p></div></div>
            <div className="choice-grid three">
              {[['standard', 'Normal', 'Standard timeline'], ['rush', 'Rush', '+25% development'], ['super', 'Super Rush', '+40% development']].map(([id, name, desc]) => (
                <button type="button" key={id} onClick={() => setTimeline(id)} className={`choice-card ${timeline === id ? 'selected' : ''}`}>
                  <strong>{name}</strong><small>{desc}</small>
                </button>
              ))}
            </div>
          </section>

          
<section className="panel">
  <div className="section-heading">
    <span>06</span>
    <div>
      <h2>MAINTENANCE + HOSTING</h2>
      <p>Optional ongoing support and setup.</p>
    </div>
  </div>

  <div className="custom-grid">
    <div>
      <label className="field-label" htmlFor="maintenance">
        Monthly maintenance
      </label>

      <select
        id="maintenance"
        className="select"
        value={maintenance}
        onChange={(e) => setMaintenance(e.target.value)}
      >
        <option value="none">No maintenance</option>
        <option value="basic">Basic — ₹1,500/month</option>
        <option value="active">Ongoing support — ₹3,500/month</option>
      </select>
    </div>

    <div>
      <label className="field-label" htmlFor="hosting">
        Domain category
      </label>

      <select
        id="hosting"
        className="select"
        value={hosting}
        onChange={(e) => setHosting(e.target.value)}
      >
        <option value="client">
          I'll purchase/manage my own domain — ₹0
        </option>
        <option value="budget">
          Budget — .in / .co.in — ₹700/year
        </option>
        <option value="standard">
          Standard — .com / .net / .org — ₹1,200/year
        </option>
        <option value="premium">
          Premium — .app / .dev / .io — ₹3,000/year
        </option>
      </select>
    </div>
  </div>

  <p className="hint">
    Domain prices are estimates for the first year. Renewal prices,
    premium domains and registrar fees may vary. Hosting is separate.
  </p>
</section>

        </div>

        <aside className="estimate">
          <div className="window-bar"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><strong>YOUR ESTIMATE ✦</strong></div>
          <div className="estimate-body">
            <p className="estimate-label">Estimated price</p>
            <div className="total">{formatINR(estimate.total)}</div>
            <div className="price-underline" />
            <p className="disclaimer">This is an indicative estimate based on your selected requirements. Final pricing may vary after detailed discussion.</p>
            <div className="breakdown">
              <h3>♧ &nbsp; Breakdown</h3>
              {estimate.breakdown.map((item, index) => <div className="breakdown-row" key={`${item.label}-${index}`}><span>{item.label}</span><strong>{formatINR(item.amount)}</strong></div>)}
              <div className="grand-total"><strong>Estimated Total</strong><strong>{formatINR(estimate.total)}</strong></div>
              <div className="suggested-range"><span>Suggested Range</span><strong>{formatINR(estimate.low)} – {formatINR(estimate.high)}</strong></div>
            </div>
            <p className="maintenance-line">Monthly maintenance: <strong>{formatINR(estimate.maintenanceCost)}/month</strong></p>
            <button className="primary-button" type="button" onClick={() => setShowQuote(true)}>♥ LET'S MAKE IT REAL ↗</button>
            <button className="secondary-button" type="button" onClick={copyBrief}>▤ &nbsp; COPY PROJECT BRIEF</button>
            <button className="secondary-button" type="button" onClick={sendWhatsApp}>WHATSAPP ENQUIRY ↗</button>
            <p className="sticky-message">good ideas<br />start here ♡</p>
          </div>
        </aside>
      </div>

      <footer className="footer"><a href="/">← BACK TO KATYANI.EXE</a><span>GOOD IDEAS START HERE ♡</span></footer>

      {showQuote && (
        <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowQuote(false) }}>
          <form className="quote-modal" onSubmit={handleEnquiry}>
            <button className="modal-close" type="button" onClick={() => setShowQuote(false)} aria-label="Close enquiry">×</button>
            <p className="breadcrumb">LET'S MAKE IT REAL ♡</p>
            <h2>Tell me about your idea.</h2>
            <p className="modal-summary">{selectedType.name} · {pages} pages · {formatINR(estimate.low)}–{formatINR(estimate.high)}</p>
            <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            <label>WhatsApp (optional)<input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} /></label>
            <label>Tell me about the project<textarea required rows="4" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label>
            <button className="primary-button" type="submit">SEND ENQUIRY ↗</button>
            <button className="secondary-button" type="button" onClick={() => setShowQuote(false)}>BACK TO EDITING</button>
          </form>
        </div>
      )}

      {toast && <div className="toast" role="status">{toast}</div>}
    </main>
  )
}

export default App
