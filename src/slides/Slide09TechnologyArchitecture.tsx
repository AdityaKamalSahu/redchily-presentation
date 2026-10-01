const layers = [
  { level: '01', name: 'PUBLIC WEBSITE', detail: 'React · TypeScript · Tailwind CSS' },
  { level: '02', name: 'APPLICATION / API', detail: 'Authentication · Roles · Validation' },
  { level: '03', name: 'DATABASE + MEDIA', detail: 'Relational data · Media storage · CDN' },
  { level: '04', name: 'INFRASTRUCTURE', detail: 'Cloud deployment · Cloudflare compatible' },
]
const capabilities = [
  { name: 'SECURITY', detail: 'Authentication · RBAC' },
  { name: 'SEO', detail: 'Sitemap · Structured data' },
  { name: 'PERFORMANCE', detail: 'Caching · Responsive media' },
  { name: 'ANALYTICS', detail: 'Stories · Districts · Categories' },
  { name: 'SCALABILITY', detail: 'Structured · Extensible' },
]

export function Slide09TechnologyArchitecture() {
  return (
    <div className="ops-slide ops-slide--architecture">
      <header className="ops-heading"><p>TECHNOLOGY &amp; ARCHITECTURE / 09</p><h1>मजबूत अनुभव के पीछे<br /><span>एक मजबूत आर्किटेक्चर।</span></h1><span>तेज़, सुरक्षित और स्केलेबल डिजिटल न्यूज़ प्लेटफॉर्म के लिए आधुनिक तकनीकी आधार।</span></header>
      <div className="architecture-map" aria-label="सार्वजनिक वेबसाइट से इन्फ्रास्ट्रक्चर तक प्रस्तावित आर्किटेक्चर">
        <div className="architecture-map__brand"><b>रेड चिली</b><span>PROPOSED PLATFORM FOUNDATION</span></div>
        <div className="architecture-map__layers">{layers.map((layer, index) => <div className={`architecture-layer architecture-layer--${index + 1}`} key={layer.level}><b>{layer.level}</b><span><strong>{layer.name}</strong><small>{layer.detail}</small></span>{index < layers.length - 1 && <i aria-hidden="true">↓</i>}</div>)}</div>
        <div className="architecture-map__capabilities">{capabilities.map(item => <div key={item.name}><b>{item.name}</b><span>{item.detail}</span></div>)}</div>
        <footer>आधुनिक ओपन स्टैक · विक्रेता-निर्भरता से बचने योग्य संरचना</footer>
      </div>
      <aside className="architecture-legend"><span>प्रस्तावित तकनीकी दिशा</span><p>अनुभव</p><i>↓</i><p>एप्लिकेशन</p><i>↓</i><p>डेटा व मीडिया</p><i>↓</i><p>इन्फ्रास्ट्रक्चर</p></aside>
    </div>
  )
}
