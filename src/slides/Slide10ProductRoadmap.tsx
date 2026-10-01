const coreFeatures = [
  'Core News Platform',
  'District-First Architecture',
  'Editorial CMS',
  'Search + SEO',
  'Analytics',
  'Advertisement Management',
]

const futureFeatures = [
  'Android / iOS', 'E-paper', 'Reporter Mobile App', 'Push Notifications',
  'WhatsApp Publishing', 'Social Automation', 'Video Platform', 'Events',
  'Classifieds', 'Jobs', 'Business Directory', 'Subscription / Membership', 'Newsletter',
]

export function Slide10ProductRoadmap() {
  return (
    <div className="roadmap-slide">
      <header className="roadmap-heading"><p>PRODUCT ROADMAP / 10</p><h1>आज की नींव।<br /><span>कल का विस्तार।</span></h1><div>आज की core news platform जरूरतें — भविष्य की digital media capabilities के लिए तैयार आधार।</div></header>
      <section className="roadmap-core"><header><span>V1</span><b>CORE PLATFORM</b></header><ol>{coreFeatures.map((feature, index) => <li key={feature}><b>0{index + 1}</b><span>{feature}</span></li>)}</ol><small>प्रस्तावित पहली उत्पाद नींव</small></section>
      <div className="roadmap-bridge"><span>CORE</span><i>→</i><span>EXPANSION</span></div>
      <section className="roadmap-future"><header><b>FUTURE EXPANSION</b><span>भविष्य की संभावनाएँ</span></header><div className="roadmap-future__branches">{futureFeatures.map((feature, index) => <span key={feature}><i>0{index + 1}</i>{feature}</span>)}</div><small>विकास के संभावित अगले आयाम · कोई समय-सीमा निर्धारित नहीं</small></section>
    </div>
  )
}
